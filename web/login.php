<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
		<!-- form action 的参数是url地址，就是提交数据的地址 -->
        <!-- method 是选择提交的方式 可以选择 post get -->
        <!-- get 是明文传输 它有传输字符限制 -->
        <!-- post 不是明文传输 像登录这种业务必须使用 post -->
	<form action="namen.php" method="post">
		<p>用户名：<input type="text" name="name"/></p>
		<p>密码：<input type="password" name="password"/></p>
		<p><button type="submit">提交</button></p>
		
	</form>
</body>
</html>