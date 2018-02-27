<?php
$id = $_POST['id'];
$username = $_POST['username'];
require_once "db.php";
$sql = "select name from car where id=$id";
$res = mysql_query($sql) or die("接收失败");
$row=mysql_fetch_array($res);
foreach($row as $k=>$v){
    $carData=$v;
}
$sql = "update user set try='$carData' where username='$username'";
$res = mysql_query($sql) or die("接收失败");
if($res){
    echo 1;
}else{
    echo 2;
}

?>