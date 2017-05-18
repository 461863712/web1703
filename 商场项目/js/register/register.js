/**
 * Created by DELL- on 2017/5/16.
 */
(function () {
    function Register() {
        this.RegisterValue();
    }

    Register.prototype=new HttpRequest();

    Register.prototype.RegisterValue=function () {
        var self=this;
        $("form").submit(function (event) {
            event.preventDefault();
            this.yhm=this["yhm"];
            this.mm=this["mm"];
            this.qrmm=this["qrmm"];
            if(this.mm.value!=this.qrmm.value){
                alert("密码不一致");
                return;
            }
            self.Jsonp("http://lc.shudong.wang/api_user.php",{status:"register",username:this.yhm.value,password:this.mm.value},function (result) {
                console.log(result);
                switch (result.code){
                    case 2001:
                        alert("用户名已存在");
                        break;
                    case 0:
                        alert("注册成功");
                        window.location.href="../login/login.html";
                        break;
                    case 1000:
                        alert("用户名不合法，请填写3-20位的英文数字下划线");
                        break;
                    case 1001:
                        alert("密码错误,格式不对,需要在6-20位之间,数字字母下划线");
                        break;
                }
            })
        });
    };
    new Register();
})();