window.AW=window.AW||{},function(){"use strict";var t=navigator.userAgent,i={attr:{isIn:t.indexOf("AlipayClient")>=0,version:function(){var i=[].concat(t.match(/AlipayClient\/([^\s]+)/)||"")[1]||"";return""!=i&&(i=parseFloat(i)),i}()},callBridge:function(){var t=arguments,i=function(){var i=window.AlipayJSBridge;i.call.apply(i,t)};window.AlipayJSBridge?i():document.addEventListener("AlipayJSBridgeReady",function(){i()},!1)},checkJSAPI:function(t,i){("undefined"==typeof t||""===t)&&i(!1),this.attr.version<8.1&&(("tradePay"===t||"startApp"===t||"titlebar"===t||"toolbar"===t||"showLoading"===t||"hideLoading"===t||"toast"===t||"login"===t||"sendSMS"===t||"contact"===t)&&i(!0),i(!1)),this.callBridge("checkJSAPI",{api:t},function(t){i(t.available)})},callApi:function(){("none"===o.options.type||"success"===o.options.type||"fail"===o.options.type)&&this.callBridge("toast",{content:o.options.message,type:o.options.type,duration:o.options.hideDelay})}},e={init:function(){"true"===o.options.callContainer&&i.attr.isIn?i.checkJSAPI("toast",function(t){t?i.callApi():this.setCSS().setHTML().show()}):this.setCSS().setHTML().show()},isSetCSS:!1,setCSS:function(){var t=this;if(!t.isSetCSS){var i=document.createElement("style");i.dataset.amwid="toast",i.innerHTML=this.CSSText(),document.head.appendChild(i),t.isSetCSS=!0}return this},isSetHTML:!1,setHTML:function(){var t=this.HTMLText().replace("<%toast-type%>",o.options.type);if(t=t.replace("<%toast-message%>",o.options.message),this.isSetHTML)this.toastDom.innerHTML=t;else{var i=document.createElement("div");i.className="am-toast am-toast-hide",i.innerHTML=t,document.body.appendChild(i),this.toastDom=i,this.isSetHTML=!0}return this},show:function(){this.hide(),this.toastDom.classList.remove("am-toast-hide"),this.toastDom.classList.add("am-toast-show"),this.hideDelay()},hide:function(){clearTimeout(this.hideDelayTimeout),this.toastDom&&(this.toastDom.classList.remove("am-toast-show"),this.toastDom.classList.add("am-toast-hide"))},hideDelayTimeout:{},hideDelay:function(){var t=this;!isNaN(parseFloat(o.options.hideDelay))&&parseFloat(o.options.hideDelay)>0&&(t.hideDelayTimeout=window.setTimeout(function(){t.hide()},parseFloat(o.options.hideDelay)))}},o={};o.options={message:"",type:"none",hideDelay:"2500",callContainer:"true"},o.show=function(t){if("object"==typeof t){for(var i in t)this.options[i]=t[i];e.init()}else"string"==typeof t&&(this.options.message=t,e.init())},o.hide=function(){e.hide()},e.CSSText=function(){var t='.am-toast{position:fixed;z-index:100;top:45%;width:100%;height:1px;text-align:center;font-size:16px;font-family:sans-serif;}.am-toast .am-toast-text{display:inline-block;margin:-24px auto auto;padding:9px 20px;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;-webkit-background-clip:padding-box;color:#FFF;background-color:rgba(0,0,0,0.8);}.am-toast .am-toast-text .iconfont{font-size:16px;}.am-toast-show{display:block;}.am-toast-hide{display:none;}.am-toast .am-icon-fail,.am-toast .am-icon-success{display:inline-block;height:15px;vertical-align:middle;}.am-toast .am-icon-fail:before,.am-toast .am-icon-success:before{content:"";display:block;width:100%;height:100%;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAUCAYAAADLP76nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQzM4RDk3M0NEMzkxMUUzOTA5QkQ5NjEwMTU4QkI2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQzM4RDk3NENEMzkxMUUzOTA5QkQ5NjEwMTU4QkI2MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMzhEOTcxQ0QzOTExRTM5MDlCRDk2MTAxNThCQjYwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJDMzhEOTcyQ0QzOTExRTM5MDlCRDk2MTAxNThCQjYwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wRxj8gAAAclJREFUeNrEl79KxEAQxnPnO9gJhwgWiiDKgeIf0HdI7OysLA4ULxbqNVd4gmBhJVrY6UP4AL6BIIp4WFxQVLSTi9/iHKzrJNnZcHHgl4RkJvt9kOzsluI49ijq4B5cerLwQQW0vP8IZQCE8U98AZ/u2eBTjYq6oE7KAFij869nHg2sh60JXXwvtvogvgRO6f3npgl1WGGEZJnwE2qCPog/McY5A2XdgNREkeKP479xCwZNA7YmihR/xIi/A0PmJ2RroijxikNG/AOocD+xrQmp+Bo4cBDfYsQ/gmEuP+klnAmJ+HXQpdymQHyTGasNRpJq0l4WJJjIEr+qie9Fw0J8gxnrCYym1ZXTepzjs2sQGff2wG5KzQ7l6NEBy+DGphPbTJWSPjEGOkxdyOSGTJ6qHbf57CRNStrsJkDEiNvUcjaY5xHVei4GgpTZJnAwMQmeGZE1wowXqvFcDAQWU6WLiSnwatR0mR9d5UxLp12J+DwmqowJU3zVpelJxecxMQPeGPHvYNa1a3OzgO3ygDORtSeYAx9avrqez7Ps6F1sO65tdBOhZc0C+CQW866bStqWMqQt5YVwUxfQlnJfULNE56u8O8pvAQYAUnCy4ged31IAAAAASUVORK5CYII=") no-repeat;-webkit-background-size:32px auto;}.am-toast .am-icon-fail{width:13px;}.am-toast .am-icon-fail:before{background-position:0 0;}.am-toast .am-icon-success{width:16px;}.am-toast .am-icon-success:before{background-position:-14px 0;}';return t},e.HTMLText=function(){var t='<div class="am-toast-text"><span class="am-icon-<%toast-type%>"></span> <%toast-message%></div>';return t},window.AW.toast=o}();