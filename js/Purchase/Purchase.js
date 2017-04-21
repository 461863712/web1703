/**
 * Created by DELL- on 2016/12/30.
 */
(function () {

    function Purchase(url,data,container) {

        this.CreateShop(url,data,container);
        HttpRequest.call(this);
    }

    Purchase.prototype=new HttpRequest();

    Purchase.prototype.CreateShop=function (url,data,container) {
        this.GetJsonpD(url,data,function (result) {
            console.log(result);
        })
    };

    window.Purchase=Purchase;
})();