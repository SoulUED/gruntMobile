(function() {
  var Weixin;

  Weixin = (function() {
    function Weixin(callback) {
      var _this;
      _this = this;
      this.inWeixin = false;
      document.addEventListener("WeixinJSBridgeReady", function() {
          _this.inWeixin = true;
          callback && callback(_this);
      }, false);
    }

    Weixin.prototype.shareToFriend = function(option, callback) {
        WeixinJSBridge.on("menu:share:appmessage", function() {
           WeixinJSBridge.invoke("sendAppMessage", option, callback);
      });
    };

    Weixin.prototype.shareToTimeLine = function(option, callback) {
        WeixinJSBridge.on("menu:share:timeline", function() {
            WeixinJSBridge.invoke("shareTimeline", option, callback);
      });
    };

    return Weixin;

  })();

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = Weixin;
    }

}).call(this);
