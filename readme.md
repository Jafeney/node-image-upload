# 基于node的图片管理工具
> @author Jafeney
> @dateTime 2016-08-03

## 架构介绍
本项目是典型的基于node服务的前端图片上传和管理工具。

## BUG说明
注意：`node`的图形操作`gm`模块前使用必须 先安装 `imagemagick` 和 `graphicsmagick`

如果你的操作系统是MacOS，那么使用Homebrew可以直接安装：

```
    brew install imagemagick
    brew install graphicsmagick --width-webp   // 支持webp格式的图片  
```

`gm` 具体用法参见 [https://www.npmjs.com/package/gm](https://www.npmjs.com/package/gm)

## 关于跨域支持
本项目后端采用的是express，那么如何使改上传接口支持跨域调用呢？

### 针对ES5编写的Ajax请求
```
    router.post('/upload', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X_FILENAME, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");

        //... 具体操作

        res.send({success: true, res: result})

    });

```

### 针对ES6编写的Ajax请求
> ES6对`XMLHttpRequest`请求做了些许处理，就是无论是 `GET`、`POST`还是`PUT`请求，在它之前会先发一个对应的 `OPTIONS`类型的请求。所以服务端要对这个类型的请求也要做处理:

```
    //allow custom header and CORS
    router.options('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X_FILENAME, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    router.post('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X_FILENAME, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");

        //... 具体操作

        res.send({success: true, res: result})
    });

```


## 欢迎fork
项目在线演示地址： [http://jafeney.com:9999](http://jafeney.com:9999)

---

欢迎关注我的 [个人博客Jafeney](http://jafeney.com)
or link me at 692270687@qq.com  
