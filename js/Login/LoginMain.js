/**
 * Created by DELL- on 2016/12/29.
 */
(function () {
    
    function LoginMain() {

        $("form").submit(function (event) {
            event.preventDefault();
            this.yhm=this["yhm"];
            this.mm=this["mm"];
            new Login("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:this.yhm.value,password:this.mm.value})

        });


    }
    LoginMain();
})();