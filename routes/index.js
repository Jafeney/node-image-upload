var express = require('express');
var app = require('../app');
var router = express.Router();
var multiparty = require('multiparty');
var gm = require('gm');
var fs = require('fs');
var key = 0, timeout = 0;  //授权key和有效期

var auth = function(n) {
    var ai = 0, bi = 0, eq = 0;
    var sequence = [1];
    while (ai + bi < n + eq) {
        var y = 2 * sequence[ai] + 1;
        var z = 3 * sequence[bi] + 1;
        if (y < z) { sequence.push(y); ai++; }
        else if (y > z) { sequence.push(z); bi++; }
        else { sequence.push(y); ai++; bi++; eq++; }
    }
    return sequence.pop();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  key = Math.random()*100000|0;
  timeout = new Date().getHours(); // 1小时登录失效
  res.render('auth', { key: key });
});

router.get('/m', function(req, res, next) {
    res.render('index')
});

router.post('/auth', function(req, res, next) {
    // 1小时内有效
    if (new Date().getHours() === timeout) {
        if (parseInt(req.body.key) === auth(key)) {
            res.json({success: true, key: parseInt(req.body.key)})
        } else {
            res.json({success: false})
        }
    } else {
        res.json({success: false})
    }
});

router.get('/manager', function(req, res, next) {
    var FS_PATH_FILES = './public/file/',
        arrs = [],
        _port = process.env.PORT || '9999',
        relPath = '';

	fs.readdir(FS_PATH_FILES, function(err, list) {
		if (err) {
			throw '没有找到该文件夹，请检查......';
		}
		for (var e; list.length && (e = list.shift());) {
            relPath = 'http://' + req.hostname + ( _port!==80 ? ':' + _port : '' ) + '/file/' + e;
            relName = e;
			arrs.push([relPath,relName]);
		}
        res.render('manager', { arrs: arrs.reverse() })
	});
})

/*上传测试页面*/
router.get('/test', function(req, res, next) {
    res.render('test');
})

/*上传页面*/
router.get('/upload', function(req, res, next) {
    res.render('upload');
})

//allow custom header and CORS
router.options('*', function (req, res, next) {
    // 设置跨域
    allowCross(res);
    next();
});

/*使用multiparty处理上传的图片*/
router.post('/upload', function(req, res, next) {
    // 生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './public/file/'});
    // 上传完成后处理
    form.parse(req, function(err, fields, files) {
        var relPath = '';
        if (err) {
            console.log('Parse error: ' + err);
        } else {
            console.log('Parse Files: ' + JSON.stringify(files, null, 2));
            processImg(req, res, files).then(function(data) {
                // 设置跨域
                allowCross(res);
                res.json({
                    res: JSON.parse(data.filesTmp),
                    relPath: data.relPath,
                })
            }).catch(function(err) {
                console.log(err)
            });
        }
    });
});

/*删除图片*/
router.post('/delete', function(req, res, next) {
    var _path = './public/file/' + req.body.delName;
    try {
        fs.unlinkSync(_path)
        res.json({success: true})
    } catch(e) {
        res.json({success: false})
    }
});

function processImg(req, res, files) {
    var filesTmp = JSON.stringify(files, null, 2);
    return new Promise(function(resolve, reject) {
        var _img = files.filedata[0];
        var uploadedPath = _img.path;
        var _dateSymbol = new Date().toLocaleDateString().split('-').join('');
        var _timeSymbol = new Date().getTime().toString();
        // 获取图片的正式尺寸
        gm(uploadedPath)
        .size(function(err, size) {
            var dstPath = './public/file/' + _dateSymbol + _timeSymbol + '_' + size.width + 'x' + size.height + '.' + _img.originalFilename.split('.')[1];
            var _port = process.env.PORT || '9999';
            relPath = 'http://' + req.hostname + ( _port!==80 ? ':' + _port : '' ) + '/file/' + _dateSymbol + _timeSymbol + '_' + size.width + 'x' + size.height + '.' + _img.originalFilename.split('.')[1];
            // 重命名
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err) {
                    reject(err)
                } else {
                    console.log('rename ok!');
                    // 对上传的图片进行压缩
                    var _path = dstPath.split('.');
                    var _promises = [800, 400, 200].map(function(item) {
                        return reSizeImage(_path, dstPath, item)
                    });
                    Promise.all(_promises).then(function() {
                        resolve({filesTmp, relPath})
                    }).catch(function(err) {
                        console.log(err)
                    });
                }
            });
        });
    });
}

function reSizeImage(paths, path, size) {
    return new Promise(function(resolve, reject) {
        gm(path)
        .noProfile()
        .resizeExact(size)
        .write('.' + paths[1] + '@' + size + '.' + paths[2], function (err) {
            if (!err) {
                console.log('resize as ' + size + ' ok!')
                resolve()
            }
            else {
                reject(err)
            };
        });
    });
}

function allowCross(res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}

module.exports = router;
