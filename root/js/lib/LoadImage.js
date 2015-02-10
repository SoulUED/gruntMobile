/**
 * Created by margintan on 14/12/31.
 */
(function () {
    var ImageLoad;

    ImageLoad = function () {};

    ImageLoad.loading = function (img_array, callback) {
        var _imgLoading, isComplete, checked, percent, allLength;

        allLength = img_array.length;
        percent = 0;

        _imgLoading = img_array.map(function(value) {
                return {
                    url: value,
                    isLoading: false
                }
        });

        _imgLoading.forEach(function (value) {
            var _img = document.createElement("img");

            _img.src = value.url;
            _img.addEventListener("load", function () {
                value.isLoading = true;
                percent = percent + 1;
            }, false);
        });

        checked = setInterval(function (){
            isComplete = _imgLoading.every(function (value) {
                return value.isLoading === true
            });

            callback.ing && callback.ing(percent/allLength);

            if (isComplete) {
                clearInterval(checked);
                callback.success && callback.success();
            }

        }, 16);
    };

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = ImageLoad;
    }

}).call(this);