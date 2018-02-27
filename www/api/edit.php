<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>车辆信息</title>
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
            <a href="admin.php">查看车辆信息</a>
            <a href="add.php">添加车辆信息</a>
            <a href="try.php">查看试驾订单</a>
        </div>
        <div class="admin-right col s10">
        <?php
            require_once "db.php";
            $mycar=['单厢','两厢','三厢'];
            if(isset($_GET['id']))
            {
                $editid = $_GET['id'];
                $sql = "select * from car where id=$editid";
                $res =  mysql_query($sql) or die("查询语句错");
                $user = array();
                while($row= mysql_fetch_array($res)){
                    $user[] = $row;
                }
        //        var_dump($user);
            }
            if (isset($_POST['send']))
            {
                $id = $_POST['id'];
                $name= $_POST['name'];
                $price=$_POST['price'];
                $displacement = $_POST['displacement'];
                $oil = $_POST['oil'];
                $speed = $_POST['speed'];
                $car = $_POST['car'];
                $loveNum = $_POST['loveNum'];
                $sql = "update car set name='$name', price='$price', oil='$oil', speed='$speed', car='$car', loveNum='$loveNum' where id=$id";
                mysql_query($sql)or die('更新语句错');
                $row = mysql_affected_rows($conn);
                if ($row>0)
                {
                    echo "更新成功";
                }else{
                    echo "更新失败";
                }
                $sql = "select * from user where id=$id";
                $res =  mysql_query($sql) or die("查询语句错");
                $user = array();
                while($row= mysql_fetch_array($res)){
                    $user[] = $row;
                }
            }
        ?>
            <form action="edit.php" method="post">
                <input type="hidden" name="id" value=<?php echo $user[0]['id'] ?>>
                <table class="highlight center edit-tab center-align">
                    <caption><h3>编辑</h3></caption>
                    <tr> <td>名称</td> <td><input type="text" name="name" value=<?php echo $user[0]['name'] ?>></td> </tr>
                    <tr> <td>报价</td> <td><input type="text" name="price" value=<?php echo $user[0]['price']?>></td> </tr>
                    <tr> <td>排量</td> <td><input type="text" name="displacement" value=<?php echo $user[0]['displacement']?>></td> </tr>
                    <tr> <td>油耗</td> <td><input type="text" name="oil" value=<?php echo $user[0]['oil']?>></td> </tr>
                    <tr> <td>变速箱</td> <td>
                            <?php
                            $str = $user[0]['speed'];
                            $f_check = $str=='自动'? 'checked':'';
                            $m_check = $str=='男=双离合'? 'checked':'';
                            ?>
                            <input type="radio" name="speed" id="speed1" value="自动" <?php echo $f_check?>><label for="speed1">自动</label>
                            <input type="radio" name="speed" id="speed2" value="双离合" <?php echo $m_check?>><label for="speed2">双离合</label>
                        </td>
                    </tr>
                    <tr> <td>车身</td> <td>
                            <select name="car">
                                <?php
                                foreach ($mycar as $k=>$v)
                                {
                                    if ( $v== $user[0]['car'])
                                    {
                                        echo "<option value='".$v."' selected >".$v."</option>" ;
                                    }
                                    else{
                                        echo "<option value='".$v."' >".$v."</option>" ;
                                    }
                                }
                                ?>
                            </select>
                        </td>
                    </tr>
                    <tr> <td>收藏</td> <td><input type="text" name="loveNum" value=<?php echo $user[0]['loveNum']?>></td> </tr>
                    <tr>
                        <td colspan="2" class="edit-sub" align="center">
                            <input type="submit" class="btn" value="提交" name="send">
                            <input type="reset" class="btn" value="重置" >
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</article>
<script src="../js/jquery-1.8.3.min.js" type="text/javascript"></script>
<script src="../components/materialize/dist/js/materialize.min.js" type="text/javascript"></script>
<script src="../js/index.js" type="text/javascript"></script>
</body>
</html>