<?php
//$postData：json类型的字符串
$postData=file_get_contents("php://input");
//转换为数组
$data=json_decode($postData,true);

require_once "db.php";
$sql="insert into user(username,acountNumber,userpass,city,isAccept) values('{$data['username']}','{$data['acountNumber']}','{$data['userpass']}','{$data['pro']}{$data['city']}','否')";
$result = mysql_query($sql) or die("注册失败");
if ($result){
    echo 1;
}else{
    echo 2;
}
?>