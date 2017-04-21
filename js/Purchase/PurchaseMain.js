/**
 * Created by DELL- on 2016/12/30.
 */
(function () {

    function PurchaseMain() {
        var goodsID=location.search.replace("?","");

        $("button").click(function () {
            localStorage.getItem("name");
            if({userID:localStorage.getItem("name"),goodsID:goodsID}){
                new Purchase("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:localStorage.getItem("name"),goodsID:goodsID});
                alert("成功添加");
            }else {
                return;
                alert("添加失败");
            }

        });

    }

    PurchaseMain();
})();