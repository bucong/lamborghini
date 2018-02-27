<?php
$conn=@mysql_connect('localhost','root','') or die('连接数据库失败！');
mysql_select_db('lanbojini',$conn) or die('选择数据库失败！');
mysql_query('set names utf8');
?>