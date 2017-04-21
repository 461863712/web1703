/**
 * Created by DELL- on 2016/12/28.
 */
(function () {

    function RegisterMain() {
        $("form").submit(function (event) {
            event.preventDefault();
            this.yhm=this["yhm"];
            console.log(this.yhm.value);
            this.mm=this["mm"];
            this.qrmm=this["qrmm"];
            if(this.mm.value!=this.qrmm.value){
                alert("密码不一致");
                return;
            }
            new Register("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:this.yhm.value,password:this.mm.value});
        });
    }
    RegisterMain();

})();