/**
 * Created by DELL- on 2016/12/23.
 */
(function () {

    function init() {
        showContent("1");
        showBanner();
        var nav=new Nav("http://datainfo.duapp.com/shopdata/getclass.php",$(".header-nav"),function (items) {
            $(items).each(function () {
                var self=this;
                this.li.click(function () {
                    showContent(self.classID);
                })
            })

        });

        function showContent(classID) {
            new Commodity("http://datainfo.duapp.com/shopdata/getGoods.php",{classID:classID},$(".commodity"));
        }

        function showBanner() {
            var banner=new Banner("http://datainfo.duapp.com/shopdata/getBanner.php",$(".banner"));
        }
        LoginNmae();
    }

    function LoginNmae() {
        var LiFirst=$(".header-top ul li:first-child")[0];
        LiFirst.innerText=localStorage.getItem("name");
        LiFirst.className="login";
        console.log(LiFirst);
        LiFirst.onclick=function () {
            alert("要退出么");
        };
    }


    init();

})();