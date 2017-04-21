/**
 * Created by DELL- on 2016/12/26.
 */
(function () {

    function Commodity(url,data,commodity,itemCallback) {
        this.showShop(url,data,commodity,itemCallback);
        HttpRequest.call(this);
    }

    Commodity.prototype=new HttpRequest();

    Commodity.prototype.showShop=function (url,data,commodity,itemCallback) {
        this.commodityUl=$("<ul class='commodityUl'></ul>");
        commodity.html(this.commodityUl);
        var self=this;
        this.GetJsonp(url,data,function (result) {
            // console.log(result);
            $(result).each(function () {
                var lis=new commodityLi(this,self.commodityUl);
            })
        });
    };

    function commodityLi(info,commodityUl) {
        this.info=info;
        var imgName=info.goodsListImg;
        var goodsName=info.goodsName;
        var discount=info.discount;
        var price=info.price;
        var many=price/discount*10;
        var target="html/Detail.html?"+info.goodsID+"";
        this.li=$("<li><a href="+target+"><img src="+imgName+"><p>"+goodsName+"</p><div><span>"+discount+"折"+"</span><s>"+parseInt(many)+"</s><b>"+price+"￥"+"</b></div></a></li>");
        commodityUl.append(this.li);
    }



    window.Commodity=Commodity;
    window.commodityLi=commodityLi;
})();