import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "#fff",
        "fontSize": "84%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.5,
        "color": "#333",
        "fontFamily": "Arial, sans-serif",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "a": {
        "color": "#34538b",
        "textDecoration": "none"
    },
    "a:hover": {
        "textDecoration": "underline"
    },
    "a img": {
        "border": 0
    },
    "input": {
        "fontSize": "100%"
    },
    "select": {
        "fontSize": "100%"
    },
    "textarea": {
        "fontSize": "100%"
    },
    "header": {
        "height": 60,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "header logo": {
        "marginTop": 12,
        "overflow": "hidden",
        "float": "left"
    },
    "main": {
        "width": "100%",
        "background": "#beceeb",
        "overflow": "hidden"
    },
    "main h1": {
        "lineHeight": 40,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center",
        "fontSize": 18,
        "background": "#49aaed",
        "fontFamily": "'kaiti','microsoft yahei'",
        "color": "#fff"
    },
    "body part": {
        "width": "50%",
        "minHeight": 500,
        "Height": 500,
        "background": "white"
    },
    "code": {
        "float": "left",
        "marginLeft": -1,
        "marginBottom": -999,
        "paddingBottom": 999
    },
    "effect": {
        "float": "right",
        "marginRight": -1,
        "marginBottom": -999,
        "paddingBottom": 999
    },
    "body h3": {
        "lineHeight": 30,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 15,
        "textAlign": "center",
        "background": "#f0f3f9",
        "paddingLeft": 10,
        "borderBottom": "1px solid #ededed",
        "color": "#4e4e4e",
        "textShadow": "0px 1px 0px white"
    },
    "footer": {
        "lineHeight": 1.4,
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "borderTop": "1px solid #486aaa",
        "fontFamily": "'Lucida Grande',Verdana, Sans-Serif",
        "textAlign": "center",
        "textShadow": "1px 1px #cad5eb"
    },
    "footer:before": {
        "display": "block",
        "height": 1,
        "content": "''",
        "backgroundColor": "#909BAF",
        "color": "#aaa",
        "overflow": "hidden",
        "position": "relative",
        "top": -15
    },
    "footer img": {
        "marginBottom": -3
    },
    "show": {
        "paddingBottom": 20
    },
    "show h5": {
        "fontSize": 13,
        "lineHeight": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 8,
        "borderBottom": "1px dotted #e5e5e5"
    },
    "demo": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "Zoom": 1
    },
    "demo:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "pre": {
        "font": "14px/1.3 Consolas, Monaco, monospace",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "whiteSpace": "pre-wrap",
        "wordWrap": "break-word"
    },
    "ad": {
        "width": 468,
        "height": 60,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "color": "#fff",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "left": 250,
        "textAlign": "right",
        "overflow": "hidden"
    },
    "light": {
        "background": "#f0f3f9"
    },
    "content": {
        "minHeight": 500,
        "Height": 500,
        "background": "white",
        "border": "solid #cad5eb",
        "borderWidth": "0 2px",
        "fontFamily": "'Lucida Grande',Verdana"
    },
    "article": {
        "fontFamily": "Arial",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontSize": 12,
        "clear": "both"
    },
    "article_new": {
        "marginTop": -31,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 20,
        "fontFamily": "Arial",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "fontSize": 12,
        "clear": "both",
        "textAlign": "right"
    },
    "article_new a": {
        "display": "inline-block"
    },
    "back": {
        "marginTop": -25,
        "position": "absolute",
        "right": 10
    },
    "upload_box": {
        "width": 800,
        "marginTop": 1,
        "marginRight": "auto",
        "marginBottom": 1,
        "marginLeft": "auto"
    },
    "upload_main": {
        "borderWidth": "1px 1px 2px",
        "borderStyle": "solid",
        "borderColor": "#ccc #ccc #ddd",
        "backgroundColor": "#fbfbfb"
    },
    "upload_choose": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "upload_drag_area": {
        "display": "inline-block",
        "width": "60%",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "marginLeft": 0.5,
        "border": "1px dashed #ddd",
        "background": "#fff url(http://rescdn.qqmail.com/zh_CN/htmledition/images/func/dragfile07bf38.gif) no-repeat 20px center",
        "color": "#999",
        "textAlign": "center",
        "verticalAlign": "middle"
    },
    "upload_drag_hover": {
        "borderColor": "#069",
        "boxShadow": "inset 2px 2px 4px rgba(0, 0, 0, .5)",
        "color": "#333"
    },
    "upload_preview": {
        "borderTop": "1px solid #bbb",
        "borderBottom": "1px solid #bbb",
        "backgroundColor": "#fff",
        "overflow": "hidden",
        "Zoom": 1
    },
    "upload_append_list": {
        "height": 300,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "float": "left",
        "position": "relative"
    },
    "upload_delete": {
        "marginLeft": 2
    },
    "upload_image": {
        "maxHeight": 250,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "upload_submit": {
        "paddingTop": 1,
        "paddingLeft": 1
    },
    "upload_submit_btn": {
        "display": "none",
        "height": 32,
        "fontSize": 14
    },
    "upload_loading": {
        "height": 250,
        "background": "url(http://www.zhangxinxu.com/study/image/loading.gif) no-repeat center"
    },
    "upload_progress": {
        "display": "none",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderRadius": 10,
        "color": "#fff",
        "backgroundColor": "rgba(0,0,0,.6)",
        "position": "absolute",
        "left": 25,
        "top": 45
    },
    "upload_url": {
        "width": 500,
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "marginRight": 6
    }
});