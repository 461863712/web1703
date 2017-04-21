/**
 * Created by DELL- on 2016/12/26.
 */

(function () {

    function Nav(url,headerNav,ItemsCallback) {
        this.headerNav=headerNav;
        this.items=[];
        this.ShowNav(url,ItemsCallback);
        HttpRequest.call(this);

    }

    Nav.prototype=new HttpRequest();

    Nav.prototype.ShowNav=function (url,ItemsCallback) {
        this.navUl=$("<ul class='navUl'></ul>");
        this.headerNav.append(this.navUl);
        var self=this;
        this.GetJson(url,function (result) {
            // console.log(result);/*打印获取的数据*/
            if(!result){
                console.log("获取数据失败");
                return;
            }
            var changeResult=$($.parseJSON(result));
            // console.log(changeResult);/*json字符串转化json对象*/
            changeResult.each(function () {
                this.li=$("<li>"+this.className+"</li>");
                self.navUl.append(this.li);
                self.items.push(this);
            });
            if(ItemsCallback){
                ItemsCallback(self.items);
            }
        })
    };

    window.Nav=Nav;

})();