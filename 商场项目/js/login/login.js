/**
 * Created by DELL- on 2017/5/17.
 */
(function () {
    function Login() {
        this.LoginValue();
    }

    Login.prototype=new HttpRequest();

    Login.prototype.LoginValue=function () {
        var self=this;
        $("form").submit(function (event) {
            event.preventDefault();
            console.log("aa");
            this.yhm=this["yhm"];
            this.mm=this["mm"];
            var selfThis=this;
            self.Jsonp("http://lc.shudong.wang/api_user.php",{status:"login",username:this.yhm.value,password:this.mm.value},function (result) {
                console.log(result.code);
                switch (result.code){
                    case 2003:
                    case 1001:
                    case 1000:
                        alert("用户名和密码不正确");
                        break;
                    case 0:
                        alert("登陆成功");
                        localStorage.setItem("liangcang",selfThis.yhm.value);
                        window.location.href="../../index.html";
                        break;
                }
            })
        });
    };
    new Login();
})();