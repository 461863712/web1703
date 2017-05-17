<?php

require_once("./sign_jieshou.php");

$post = $_POST;
$name = $post['name'];
$age = $post['age'];
$password = $post['password'];
$password = md5($password);
$sex = $post['sex'];
$email = $post['email'];
$number = $post['phone_number'];
$address = $post['address'];

$insertsql = "insert into web(
				name,
				age,
				password,
				email,
				sex,
				phone_number,
				address,
		) values (
			'{$name}',
			'{$age}',
			'{$password}',
			'{$email}',
			'{$sex}',
			'{$phone_number}',
			'{$address}'
		
		)";
//		echo $sql;
//$result = $dbh -> exec($insertsql);
//
//print_r($result);
echo $insertsql;
//echo "注册成功";
//	print_r($post);
//	$sql = 'SELECT * FROM web';
//	foreach ($dbh -> query($sql) as $row){
//		echo "<pre>";
//		echo "以下用户注册成功！";
//		print_r($row['name']);
//	}


