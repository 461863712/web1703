/**
 * Created by DELL- on 2016/12/29.
 */
(function () {

    function Login(url,data,callback) {

        this.ShowLogin(url,data,callback);
        HttpRequest.call(this);
    }

    Login.prototype=new HttpRequest();

    Login.prototype.ShowLogin=function (url,data,callback) {
        this.GetJsonpD(url,data,function (result) {
            console.log(result);
            switch (result){
                case 0:
                    alert("用户名不存在");
                    break;
                case 2:
                    alert("用户名密码错误");
                    break;
                default:
                    open("../index.html");
                    if(result.userID){
                        localStorage.setItem("name",result.userID);
                        // if (+new Date() > +new Date(2014, 11, 30)) {
                        //     localStorage.removeItem("name");
                        // }
                    }
                    break;
            }
        });
    };



    window.Login=Login;
})();