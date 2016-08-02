var express = require('express');
var app = require('../app');
var router = express.Router();
var multiparty = require('multiparty');
var formidable= require('formidable');
var util = require('util');
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
  res.render('index', { key: key });
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
			arrs.push(relPath)
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

/*使用multiparty处理上传的图片*/
router.post('/upload', function(req, res, next) {
    // 生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './public/file/'});

    // 上传完成后处理
    form.parse(req, function(err, fields, files) {

        var filesTmp = JSON.stringify(files, null, 2);
        var relPath = '';

        if (err) {
            console.log('Parse error: ' + err);
        } else {
            console.log('Parse Files: ' + filesTmp);
            var _img = files.filedata[0];

            var uploadedPath = _img.path;
            var _dateSymbol = new Date().toLocaleDateString().split('-').join('');
            var _timeSymbol = new Date().toLocaleTimeString().split(':').join('');
            var dstPath = './public/file/' + _dateSymbol + _timeSymbol + '_' + _img.originalFilename;
            var _port = process.env.PORT || '9999';
            relPath = req.hostname + ( _port!==80 ? ':' + _port : '' ) + '/file/' + _dateSymbol + _timeSymbol + '_' + _img.originalFilename;

            // 重命名为原始文件名
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err) {
                    console.log('Rename Error: ' + err);
                } else {
                    console.log('rename ok!');
                }
            });

        }
        res.json({res:JSON.parse(filesTmp),relPath: relPath})
    });
});

module.exports = router;
