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
    <span>兰博基尼后台管理</span>
    <p class="fr">admin</p>
</header>
<article>
    <div class="row">
        <div class="admin-left col s2">
            <a href="admin.php" class="a-active">查看车辆信息</a>
            <a href="add.php">添加车辆信息</a>
            <a href="try.php">查看试驾订单</a>
        </div>
        <div class="admin-right col s10">
            <?php
            require_once "db.php";
            // var_dump($_GET);
            if (isset($_GET['id'])) {
                $deid = $_GET['id'];
                $sql = "delete from car where id=$deid";
                mysql_query($sql) or die("删除语句错");
            }
            //页面加载时，读数据，并将数据显示在页面上
            $sql = "select * from car";
            $res = mysql_query($sql) or die("查询语句错");
            $user = [];
            while ( $row = mysql_fetch_array($res)) {
                $user[] = $row;
            }
            ?>
            <table class="bordered highlight center admin-tab">
                <tr><th>编号</th> <th>名称</th> <th>报价</th> <th>排量</th> <th>油耗</th> <th>变速箱</th> <th>车身</th> <th>收藏</th> <th></th> </tr>
                <?php
                foreach($user as  $key=>$value) {
                    echo "<tr> <td> {$value['id']} </td>  <td>{$value['name']}</td> <td>{$value['price']}</td> <td>{$value['displacement']}</td> <td>{$value['oil']}</td> <td>{$value['speed']}</td> <td>{$value['car']}</td> <td>{$value['loveNum']}</td> <td> <a href=admin.php?id={$value['id']} class='btn  n'>删除</a> <a href=edit.php?id={$value['id']} class='btn edit-btn'>编辑</a> </td></tr>";
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