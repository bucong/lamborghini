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
            <a href="add.php" class="a-active">添加车辆信息</a>
            <a href="try.php">查看试驾订单</a>
        </div>
        <div class="admin-right col s10">
<?php
    require_once "db.php";
   // var_dump($_POST);
    if (isset($_POST['send']))
    {
        $name = $_POST['name'];
        $price = $_POST['price'];
        $displacement = $_POST['displacement'];
        $oil = $_POST['oil'];
        $speed = $_POST['speed'];
        $car = $_POST['car'];
        $loveNum = $_POST['loveNum'];

        //执行sql语句
        $sql = "insert into car(name,price,displacement,oil,speed,car,loveNum,distance,weight,maxspeed,cylinder,structure) values('$name','$price','$displacement','$oil','$speed','$car','$loveNum','$distance','$weight','$maxspeed','$cylinder','$structure')";
        $res = mysql_query($sql) or die("添加失败");
//        if ($res){
//            echo "添加成功";
//        }
    }

?>
    <form action="add.php" method="post">
        <table class="highlight center edit-tab center-align">
            <caption><h4>添加车辆信息</h4></caption>
            <tr>
                <td> 名称：</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td> 报价：</td>
                <td><input type="text" name="price"></td>
            </tr>
            <tr>
                <td> 排量：</td>
                <td><input type="text" name="displacement"></td>
            </tr>
            <tr>
                <td> 油耗：</td>
                <td><input type="text" name="oil"></td>
            </tr>
            <tr>
                <td> 变速箱：</td>
                <td>
                    <input type="radio" class="with-gap" name="speed" id="speed1" value="自动" checked><label for="speed1">自动</label>
                    <input type="radio" class="with-gap" name="speed" id="speed2" value="双离合"><label for="speed2">双离合</label>
                </td>
            </tr>
            <tr>
                <td> 车身：</td>
                <td>
                    <select name="car">
                        <option value="单厢">单厢</option>
                        <option value="双厢">双厢</option>
                        <option value="三厢">三厢</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td> 收藏：</td>
                <td><input type="text" name="loveNum"></td>
            </tr>
            <tr>
                <td> 轴距：</td>
                <td><input type="text" name="distance"></td>
            </tr>
            <tr>
                <td> 质量：</td>
                <td><input type="text" name="weight"></td>
            </tr>
            <tr>
                <td> 最大速度：</td>
                <td><input type="text" name="maxspeed"></td>
            </tr>
            <tr>
                <td> 气缸数：</td>
                <td><input type="text" name="cylinder"></td>
            </tr>
            <tr>
                <td> 结构：</td>
                <td>
                    <select name="structure">
                        <option value="2门2座">2门2座</option>
                        <option value="2门3座">2门3座</option>
                        <option value="4门4座">4门4座</option>
                    </select>
                </td>
            </tr>
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