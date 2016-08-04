# 基于node和react的图片管理工具
> @author Jafeney
> @dateTime 2016-08-03

## 架构介绍
本项目是典型的基于node服务的React单页应用实例，大前端必会的技术之一。

前端涉及的技术有 `webpack`前端自动化构建 + `react-redux`数据交互 + `react-router`路由管理 ＋ `css3Animate`动画效果。
后端涉及的技术有 `express`web服务构建 ＋ `multiparty`图片上传处理 + `gm`图形图片处理   

## BUG说明
注意：`node`的图形操作`gm`模块前使用必须 先安装 `imagemagick` 和 `graphicsmagick`

如果你的操作系统是MacOS，那么使用Homebrew可以直接安装：

```
    brew install imagemagick
    brew install graphicsmagick --width-webp   // 支持webp格式的图片  
```

'gm' 具体用法参见 [https://www.npmjs.com/package/gm](https://www.npmjs.com/package/gm)

## 欢迎fork
在线演示地址： [http://jafeney.com:9999](http://jafeney.com:9999)

---

欢迎关注我的 [个人博客Jafeney](http://jafeney.com)  
