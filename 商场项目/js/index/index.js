/**
 * Created by DELL- on 2017/5/17.
 */
(function () {

    function Index() {
        this.header();
    }

    Index.prototype.header=function () {
        if(localStorage.getItem("liangcang")){
            this.li1=$(".header-container ul li:nth-child(7)");
            this.li1[0].innerText=""+localStorage.getItem("liangcang")+"";
        }
    };

    window.Index=Index;
})();