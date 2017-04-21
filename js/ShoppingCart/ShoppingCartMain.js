/**
 * Created by DELL- on 2016/12/30.
 */
(function () {

    function ShoppingCartMain() {


        new ShoppingCart("http://datainfo.duapp.com/shopdata/getCar.php",{userID:localStorage.getItem("name")},$("section"));
    }


    ShoppingCartMain();
})();