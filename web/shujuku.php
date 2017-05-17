<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<form action="sign.php" method="post">
		<p>用户名</p><input type="text" name="name" value="" />
		<p>密码</p><input type="password" name="password" value="" />
		<p>年龄</p><input type="text" name="age" value="" />
		<p>性别</p>
		男<input type="radio" name="sex" value="1" />
		女<input type="radio" name="sex" value="2" />
		<p>地址</p><input type="text" name="address" value="" />
		<p>邮箱</p><input type="text" name="email" value="" />
		<p>手机号码</p><input type="text" name="phone_number" value="" />
		<input type="submit" value="提交"/>
	</form>
</body>
</html>