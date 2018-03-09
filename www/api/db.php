<?php
$conn=@mysql_connect('bucong1129.mysql.rds.aliyuncs.com','root','Bucong5733') or die('连接数据库失败！');
mysql_select_db('lanbojini',$conn) or die('选择数据库失败！');
mysql_query('set names utf8');
?>