/**
 * Created by DELL- on 2017/5/16.
 */
(function () {

    function HttpRequest() {

    }

    HttpRequest.prototype.Jsonp=function (url,data,callback) {
        $.post({
            url:url,
            type:"post",
            dataType:"json",
            data:data
        }).done(function (result) {
            if(callback){
                console.log(result);
                callback(result);
            }
        })
    };

    window.HttpRequest=HttpRequest;
})();