/**
 * Created by DELL- on 2017/5/16.
 */
(function () {
    var http=new HttpRequest();
    http.Jsonp("http://h6.duchengjiu.top/shop/api_user.php",{status:"register",username:"4646543546",password:"q461863712"},function (result) {
        console.log(result);
    })
})();