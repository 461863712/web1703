/**
 * Created by DELL- on 2016/12/28.
 */
(function () {
    function Register(url,data,callback) {
        this.ShowRegister(url,data,callback);
        HttpRequest.call(this);

    }
    Register.prototype=new HttpRequest();

    Register.prototype.ShowRegister=function (url,data,callback) {
        this.GetJsonpD(url,data,function (result) {
            console.log(result);
            switch (result){
                case 0:
                    alert("用户名被占用");
                    break;
                case 1:
                    alert("注册成功");
                    break;
                case 2:
                    alert("系统错误");
                    break;
            }
        })
    };

    window.Register=Register;

})();