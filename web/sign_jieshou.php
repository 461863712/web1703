<?php

header("Content-type : text/html;charset=utf-8");
$user = "root";   //主机名字
$pass = "";   //主机密码
$host = "localhost";  //主机地址
$dbname = "web";   //数据库名字
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8' );
// 编码

$dbh = new PDO('mysql:host'.$host.';dbname='.$dbname,$user,$pass,$utf8);
// PDO 连接
// new PDO ();
//参数一：mysql:host= 主机名字; dbname= "数据库名字";
//参数二: username  数据库的用户名字
//参数三: 数据库的密码
//参数四：设置的字符集  ==>用这个方法 array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');

