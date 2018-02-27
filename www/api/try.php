<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台管理</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../components/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../components/materialize/dist/css/materialize.min.css"/>
    <link rel="stylesheet" href="../css/public.css"/>
    <link rel="stylesheet" href="../css/admin.css"/>
</head>
<body>
<header>
    <a href="javascript:void(0)" class="fa fa-navicon"></a>
    <span>兰博基尼试驾订单</span>
    <p class="fr">admin</p>
</header>
<article>
    <div class="row">
        <div class="admin-left col s2">
            <a href="admin.php">查看车辆信息</a>
            <a href="add.php">添加车辆信息</a>
            <a href="try.php" class="a-active">查看试驾订单</a>
        </div>
        <div class="admin-right col s10">
            <?php
            require_once "db.php";
            if (isset($_GET['id'])) {
                $deid = $_GET['id'];
                $sql = "delete from user where id=$deid";
                mysql_query($sql) or die("删除语句错");
            }
            if (isset($_GET['id2'])) {
                $id2 = $_GET['id2'];
                $sql = "update user set isAccept='是' where id=$id2";
                mysql_query($sql) or die("接收失败");
            }

            //页面加载时，读数据，并将数据显示在页面上
            $sql = "select * from user";
            $res = mysql_query($sql) or die("查询语句错");
            $user = [];
            while ( $row = mysql_fetch_array($res)) {
                $user[] = $row;
            }
            ?>
            <table class="bordered highlight center admin-tab">
                <tr><th>编号</th> <th>用户名</th> <th>电话</th> <th>试驾车型</th> <th>是否接收</th> <th></th></tr>
                <?php
                foreach($user as  $key=>$value) {
                    echo "<tr> <td> {$value['id']} </td>  <td>{$value['username']}</td> <td>{$value['acountNumber']}</td> <td>{$value['try']}</td> <td>{$value['isAccept']}</td> <td> <a href=try.php?id={$value['id']} class='btn edit-btn'>删除</a> <a href=try.php?id2={$value['id']} class='btn edit-btn'>接收订单</a> </td></tr>";
                }
                ?>
            </table>
        </div>
    </div>
</article>

<script src="../js/jquery-1.8.3.min.js" type="text/javascript"></script>
<script src="../components/materialize/dist/js/materialize.min.js" type="text/javascript"></script>
<script src="../js/index.js" type="text/javascript"></script>
</body>
</html>