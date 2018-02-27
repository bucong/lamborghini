<?php
require_once "db.php";
$sql = "select * from car";
$res = mysql_query($sql) or die("查询语句错");
$user = [];
while ( $row = mysql_fetch_array($res)) {
    $user[] = $row;
}
echo json_encode($user);