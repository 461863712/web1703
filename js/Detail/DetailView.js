/**
 * Created by DELL- on 2016/12/29.
 */
(function () {

    function DetailView(url,id,container) {

        this.ShowShop(url,id,container);
        HttpRequest.call(this);
    }

    DetailView.prototype=new HttpRequest();

    DetailView.prototype.ShowShop=function (url,id,container) {
        var self=this;
        this.GetJsonp(url,{goodsID:id},function (result) {
            // console.log(result);
            self.createView(result[0],container);
        });
    };

    DetailView.prototype.createView=function (info,container) {
        var images=info.imgsUrl.slice(2,info.imgsUrl.length-2).split("\",\"");
        // console.log(images);
        container.append("<img width='450px' src="+images[0]+"><p>￥"+info.price+"</p>");
    };

    window.DetailView=DetailView;
})();