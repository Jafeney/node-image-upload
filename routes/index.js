var express = require('express');
var app = require('../app');
var router = express.Router();
var multiparty = require('multiparty');
var formidable= require('formidable');
var util = require('util');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*上传测试页面*/
router.get('/upload', function(req, res, next) {
    res.render('test');
})

/* 第一种方式：使用multiparty处理上传的图片 */
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
            var dstPath = './public/file/' + _dateSymbol + '_' + _img.originalFilename;
            var _port = process.env.PORT || '9999';
            relPath = req.hostname + ( _port!==80 ? ':' + _port : '' ) + '/file/' + _dateSymbol + '_' + _img.originalFilename;

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

/*第二种方式：使用formidable处理上传的图片*/
router.post('/api/upload', function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        if (!err) {
            res.json(files.filedata);
        } else {
            console.log('upload Error!')
        }
    });
});

module.exports = router;
