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
        "color": "#fff",
        "position": "relative"
    },
    "main h1 button": {
        "position": "absolute",
        "fontSize": 16,
        "lineHeight": 40,
        "border": 0,
        "outline": 0,
        "background": "#49aaed",
        "color": "#fff",
        "height": 40,
        "top": 0,
        "cursor": "pointer"
    },
    "main h1 button:first-child": {
        "left": 10
    },
    "main h1 button:last-child": {
        "right": 10
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
        "wordWrap": "break-word",
        "textAlign": "left"
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
        "background": "#fff url('/images/plus.png') no-repeat 100px center",
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
        "background": "url(http://baaistatic.b0.upaiyun.com/Static/WebApp/Img/upload_animate.gif) no-repeat center"
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
    },
    "auth-form": {
        "width": 450,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 50,
        "textAlign": "center"
    },
    "auth-form span": {
        "fontSize": 14,
        "marginRight": 5
    },
    "auth-form input": {
        "border": "1px solid #ccc",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "display": "inline-block",
        "color": "#888"
    },
    "auth-form button": {
        "border": 0,
        "outline": 0,
        "color": "#fff",
        "backgroundColor": "#49aaed",
        "cursor": "pointer",
        "fontSize": 12,
        "paddingTop": 4,
        "paddingRight": 10,
        "paddingBottom": 4,
        "paddingLeft": 10
    },
    "show-imgs": {
        "fontSize": 0,
        "paddingLeft": 10
    },
    "show-imgs li": {
        "display": "inline-block",
        "position": "relative",
        "maxWidth": 250,
        "verticalAlign": "bottom",
        "border": "5px solid #fff",
        "boxShadow": "0 3px 3px #999",
        "marginRight": 10,
        "marginTop": 10,
        "cursor": "pointer",
        "transition": "all .3s ease",
        "WebkitTransition": "all .3 ease"
    },
    "show-imgs li:hover": {
        "border": "5px solid #49aaed"
    },
    "show-imgs li:hover img-title": {
        "display": "block"
    },
    "show-imgs li:hover img-delete": {
        "display": "block"
    },
    "show-imgs img": {
        "width": "100%",
        "height": "auto"
    },
    "img-title": {
        "display": "none",
        "position": "absolute",
        "zIndex": 99,
        "left": 0,
        "top": 0,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "backgroundColor": "#000",
        "color": "#fff",
        "fontSize": 12,
        "transition": "all .5s ease",
        "WebkitTransition": "all .5s ease"
    },
    "img-delete": {
        "width": 50,
        "height": 25,
        "textAlign": "center",
        "borderRadius": 3,
        "color": "#fff",
        "background": "#000",
        "position": "absolute",
        "right": 0,
        "bottom": 2,
        "fontSize": 14,
        "border": 0,
        "outline": 0,
        "display": "none",
        "cursor": "pointer"
    },
    "img-delete:hover": {
        "background": "#333"
    },
    "mask": {
        "position": "fixed",
        "zIndex": 99999,
        "backgroundColor": "rgba(0, 0, 0, 0.8)",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "modal-box": {
        "width": 560,
        "maxHeight": 180,
        "position": "absolute",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "backgroundColor": "#fff",
        "borderRadius": 5,
        "textAlign": "center"
    },
    "modal-box h2": {
        "fontSize": 16,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "color": "#333"
    },
    "[data-dpr=\"2\"] modal-box h2": {
        "fontSize": 32
    },
    "[data-dpr=\"25\"] modal-box h2": {
        "fontSize": 40
    },
    "[data-dpr=\"275\"] modal-box h2": {
        "fontSize": 44
    },
    "[data-dpr=\"3\"] modal-box h2": {
        "fontSize": 48
    },
    "[data-dpr=\"4\"] modal-box h2": {
        "fontSize": 64
    },
    "modal-box p": {
        "fontSize": 14,
        "paddingTop": 5,
        "paddingRight": 30,
        "paddingBottom": 5,
        "paddingLeft": 30,
        "color": "#666",
        "textAlign": "left"
    },
    "[data-dpr=\"2\"] modal-box p": {
        "fontSize": 28
    },
    "[data-dpr=\"25\"] modal-box p": {
        "fontSize": 35
    },
    "[data-dpr=\"275\"] modal-box p": {
        "fontSize": 39
    },
    "[data-dpr=\"3\"] modal-box p": {
        "fontSize": 42
    },
    "[data-dpr=\"4\"] modal-box p": {
        "fontSize": 56
    },
    "modal-box mask-btns": {
        "position": "absolute",
        "width": "100%",
        "bottom": 0,
        "textAlign": "center",
        "height": 50,
        "lineHeight": 50,
        "borderTop": "1px solid #cecece",
        "color": "#666",
        "display": "flex",
        "cursor": "pointer",
        "WebkitFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "modal-box mask-btns span": {
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "boxSizing": "border-box"
    },
    "modal-box mask-btns span:first-child": {
        "borderRight": "1px solid #cecece"
    },
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animated-fast": {
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animated-zing": {
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "fadeInLeft": {
        "WebkitAnimationName": "fadeInLeft",
        "animationName": "fadeInLeft"
    },
    "fadeInRight": {
        "WebkitAnimationName": "fadeInRight",
        "animationName": "fadeInRight"
    },
    "slideInLeft": {
        "WebkitAnimationName": "slideInLeft",
        "animationName": "slideInLeft"
    },
    "slideInRight": {
        "WebkitAnimationName": "slideInRight",
        "animationName": "slideInRight"
    },
    "scaleIn": {
        "WebkitAnimationName": "scaleIn",
        "animationName": "scaleIn"
    }
});