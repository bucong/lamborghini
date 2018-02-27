<?php
 if (isset($_POST['name'])) {
    $name=$_POST['name'];
    require_once "db.php";
    $sql="select * from user where username='$name'";
    $result=mysql_query($sql);
    $row=mysql_fetch_array($result);
    $finish= json_encode($row);
    if($finish){
        echo $finish;
    }else{
        echo 'wrong';
    }
}
 if (isset($_POST['id3'])) {
    $id3 = $_POST['id3'];
    require_once "db.php";
    $sql = "update user set try=null where id=$id3";
    $res = mysql_query($sql) or die("接收失败");
    if($res){
        echo 1;
    }else{
        echo 2;
    }
}
?>