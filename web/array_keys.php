<?php

	$array = [1 => 100 , "color" => "red"];
	$arr = ["大家好","大家好","大家好","大家好","大家好","大家好","大家好",];
	echo "<pre>";
	print_r(array_keys($array)); 
	print_r($arr);
	

	$pizza = "piece1 piece2 piece3 piece4 piece5 piece6";
	$pieces = explode(" ", $pizza);
	print_r ($pieces);

