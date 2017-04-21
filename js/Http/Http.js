/**
 * Created by DELL- on 2016/12/26.
 */

(function () {
    
    function HttpRequest() {
        
    }

    HttpRequest.prototype.GetJson=function (url,callback) {
        $.get(url).done(function (result) {
            if(callback){
                callback(result);
            }
        });
    };

    HttpRequest.prototype.GetJsonp=function (url,data,callback) {
        $.post({
            url:url,
            dataType:"jsonp",
            data:data
        }).done(function (result) {
            if(callback){
                callback(result);
            }
        })
    };

    HttpRequest.prototype.GetJsonpD=function (url,data,callback) {
        $.post({
            url:url,
            dataType:"json",
            data:data
        }).done(function (result) {
            if(callback){
                callback(result);
            }
        })
    };

    window.HttpRequest=HttpRequest;

})();