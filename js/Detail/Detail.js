/**
 * Created by DELL- on 2016/12/29.
 */
(function () {
    
    function Detail() {

        var goodsID=location.search.replace("?","");

        new DetailView("http://datainfo.duapp.com/shopdata/getGoods.php",goodsID,$(".shop"));
    }

    Detail();
})();