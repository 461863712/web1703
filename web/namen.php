<?php
$post = $_POST;
//print_r($post);  // 这个是输出一个数组


$login_info = "恭喜！你的密码是".$post["password"]."!!</br>";
$login_info_1 = "恭喜！你的密码是".$post["name"]."!!";
echo $login_info;  // 输出文本
echo $login_info_1;
