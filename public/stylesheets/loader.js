import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "floatBarsG": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": 56,
        "height": 56,
        "backgroundColor": "rgba(255,98,77,0.98)",
        "animationName": "bounce_floatBarsG",
        "OAnimationName": "bounce_floatBarsG",
        "MsAnimationName": "bounce_floatBarsG",
        "WebkitAnimationName": "bounce_floatBarsG",
        "MozAnimationName": "bounce_floatBarsG",
        "animationDuration": "1.5s",
        "OAnimationDuration": "1.5s",
        "MsAnimationDuration": "1.5s",
        "WebkitAnimationDuration": "1.5s",
        "MozAnimationDuration": "1.5s",
        "animationIterationCount": "infinite",
        "OAnimationIterationCount": "infinite",
        "MsAnimationIterationCount": "infinite",
        "WebkitAnimationIterationCount": "infinite",
        "MozAnimationIterationCount": "infinite",
        "animationDirection": "normal",
        "OAnimationDirection": "normal",
        "MsAnimationDirection": "normal",
        "WebkitAnimationDirection": "normal",
        "MozAnimationDirection": "normal",
        "transform": "scale(.3)",
        "OTransform": "scale(.3)",
        "MsTransform": "scale(.3)",
        "WebkitTransform": "scale(.3)",
        "MozTransform": "scale(.3)"
    },
    "floatBarsG_1": {
        "left": 0,
        "animationDelay": ".6s",
        "OAnimationDelay": ".6s",
        "MsAnimationDelay": ".6s",
        "WebkitAnimationDelay": ".6s",
        "MozAnimationDelay": ".6s"
    },
    "floatBarsG_2": {
        "left": 29,
        "animationDelay": ".75s",
        "OAnimationDelay": ".75s",
        "MsAnimationDelay": ".75s",
        "WebkitAnimationDelay": ".75s",
        "MozAnimationDelay": ".75s"
    },
    "floatBarsG_3": {
        "left": 58,
        "animationDelay": ".9s",
        "OAnimationDelay": ".9s",
        "MsAnimationDelay": ".9s",
        "WebkitAnimationDelay": ".9s",
        "MozAnimationDelay": ".9s"
    },
    "floatBarsG_4": {
        "left": 88,
        "animationDelay": "1.05s",
        "OAnimationDelay": "1.05s",
        "MsAnimationDelay": "1.05s",
        "WebkitAnimationDelay": "1.05s",
        "MozAnimationDelay": "1.05s"
    },
    "floatBarsG_5": {
        "left": 117,
        "animationDelay": "1.2s",
        "OAnimationDelay": "1.2s",
        "MsAnimationDelay": "1.2s",
        "WebkitAnimationDelay": "1.2s",
        "MozAnimationDelay": "1.2s"
    },
    "floatBarsG_6": {
        "left": 146,
        "animationDelay": "1.35s",
        "OAnimationDelay": "1.35s",
        "MsAnimationDelay": "1.35s",
        "WebkitAnimationDelay": "1.35s",
        "MozAnimationDelay": "1.35s"
    },
    "floatBarsG_7": {
        "left": 175,
        "animationDelay": "1.5s",
        "OAnimationDelay": "1.5s",
        "MsAnimationDelay": "1.5s",
        "WebkitAnimationDelay": "1.5s",
        "MozAnimationDelay": "1.5s"
    },
    "floatBarsG_8": {
        "left": 205,
        "animationDelay": "1.64s",
        "OAnimationDelay": "1.64s",
        "MsAnimationDelay": "1.64s",
        "WebkitAnimationDelay": "1.64s",
        "MozAnimationDelay": "1.64s"
    }
});