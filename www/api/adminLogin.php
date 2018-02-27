<?php
//$postData：json类型的字符串
$postData=file_get_contents("php://input");
//转换为数组
$data=json_decode($postData,true);

require_once "db.php";
$sql="select * from admin where adminname='{$data['username']}' and adminpass='{$data['userpass']}'";
$result=mysql_query($sql);
$row=mysql_fetch_assoc($result);
if($row){
    echo 1;
}else{
    echo 2;
}
?>