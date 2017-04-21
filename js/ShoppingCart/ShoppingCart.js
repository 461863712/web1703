/**
 * Created by DELL- on 2016/12/30.
 */
(function () {

    function ShoppingCart(url,data,container) {

        this.ShowShop(url,data,container);
        HttpRequest.call(this);
    }

    ShoppingCart.prototype=new HttpRequest();

    ShoppingCart.prototype.ShowShop=function (url,data,container) {
        this.containerUl=$("<ul class='containerUl'></ul>");
        container.append(this.containerUl);
        var self=this;
        this.GetJsonp(url,data,function (result) {
            console.log(result);
            $(result).each(function () {
                new ShoppingCartLI(this,self.containerUl);
            });

        })
    };
    
    function ShoppingCartLI(info,containerUl) {
        this.info=info;
        var goodsListImg=info.goodsListImg;
        var goodsName=info.goodsName;
        this.li=$("<li><img src="+goodsListImg+"><span>"+goodsName+"</span></li>")
        containerUl.append(this.li);
    }

    window.ShoppingCart=ShoppingCart;
    window.ShoppingCartLI=ShoppingCartLI;
})();