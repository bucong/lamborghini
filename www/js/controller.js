app.run(['$rootScope', function ($rootScope) {
    $rootScope.alreadyLogin = true;
}]);
app.controller('homeCtrl', ['$scope', function ($scope) {
    $('.slider').slider();
    var i = 0;
    $('.home-lt').click(function () {
        i++;
        if (i > 4) {
            i = 1;
            $('.home-demo div').css({left: 0});
        }
        $('.home-demo div').animate({left: -300 * i}, 500);
    });
    $('.home-gt').click(function () {
        i--;
        if (i < 0) {
            i = 3;
            $('.home-demo div').css({left: -1200});
        }
        $('.home-demo div').animate({left: -300 * i}, 500);
    });
    $('.home-side li').click(function () {
        $('video').get(0).pause();
        //$('video').get(1).pause();
        $('.home-show li').eq($(this).index()).fadeIn(200).siblings().fadeOut(200);
    });
    $(document).scroll(function () {
        var y = $(window).scrollTop();
        if (y > 1400 && y < 2000) {
            $('.home-join div').eq(0).stop().animate({left: 0, opacity: 1}, 1000)
            $('.home-join div').eq(1).stop().animate({right: 0, opacity: 1}, 1000)
        }
        else {
            $('.home-join div').eq(0).stop().animate({left: -800, opacity: 0}, 1000)
            $('.home-join div').eq(1).stop().animate({right: -800, opacity: 0}, 1000)
        }
    });
}]).controller('modelsCtrl', ['$scope', '$location', function ($scope, $location) {
    $('.materialboxed').materialbox();
    $("img.lazy").lazyload({effect: "fadeIn"});
    $(".button-collapse").sideNav();
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left',
            stopPropagation: false
        }
    );
    var arr = [0, 1527, 3185, 3949, 4723, 5296];
    //$(document).scroll(function () {
    //    var y = $(window).scrollTop();
    //    $('#scorrll').html(y);
    //});
    $('.dropdown-content').click(function () {
        var i = $(this).index() / 2;
        $(window).scrollTop(arr[i - 1]);
    });
    var i = 2;
    var j = 2;
    var x = $('.box').offset().left;
    var y = $('.box').offset().top;
    var screenw = window.innerWidth;
    var screenh = window.innerHeight;
    var boxw = $('.box').width();
    var boxh = $('.box').height();
    var time = null;
    clearInterval(time);
    function move() {
        x += i;
        y += j;
        if (x >= screenw - boxw) {
            i = -2;
        }
        if (x <= 0) {
            i = 2;
        }
        if (y >= screenh - boxh) {
            j = -2;
        }
        if (y <= 64) {
            j = 2;
        }
        $('.box').css('left', x + 'px');
        $('.box').css('top', y + 'px');
    }

    time = setInterval(move, 50);
    $('.box').hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move, 50)
    });
    $scope.close = function () {
        $location.path('#/store');
    };
    $('.box').click(function () {
        $(this).remove();
    });


}]).controller('brandCtrl', ['$scope', function ($scope) {
    $('.parallax').parallax();
    new WOW().init();
}]).controller('ownerCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    var i = 0;
    var time = null;
    clearInterval(time);
    time = setInterval(function () {
        if (i >= 5) {
            i = 0;
        }
        $('.own-rotation img').eq(i).fadeIn(500).siblings().fadeOut(500);
        i++;
    }, 3000);
    var strdata = 'name=' + $rootScope.showname;
    $.ajax({
        type: "post",
        url: "api/owner.php",
        data: strdata,
        async: false,
        datatype: 'json',
        success: function (data) {
            var mydata = $.parseJSON(data);
            if (mydata) {
                $('.ownInfo li').eq(0).find('span').html(mydata.username);
                $('.ownInfo li').eq(1).find('span').html(mydata.acountNumber);
                $('.ownInfo li').eq(2).find('span').html(mydata.city);
                $('.ownInfo li').eq(3).find('span').html(mydata.id);
                $('.ownInfo li').eq(4).find('span').html(mydata.try);
                $('.ownInfo li').eq(5).find('span').html(mydata.isAccept);
            } else {
                $('.ownInfo ul').html('<li>您尚未登录，请登录...</li>');
            }
        },
        error: function () {
            console.log('服务器错误');
        }
    })
    $('.cancel-try').click(function () {
        var str = 'id3=' + $('.ownInfo li').eq(3).find('span').html();
        if ($('.ownInfo li').eq(5).find('span').html() == '是') {
            alert('对不起，您的试驾订单已经被商家接收，如果确定要取消试驾，请联系客服！');
        } else {
            $.ajax({
                type: "post",
                url: "api/owner.php",
                data: str,
                async: false,
                datatype: 'json',
                success: function (data) {
                    if (data == 1) {
                        alert('取消试驾成功！');
                        $('.ownInfo li').eq(3).find('span').html('');
                        $('.ownInfo li').eq(4).find('span').html('');
                    } else {
                        alert('取消试驾失败，请联系客服！');
                    }
                },
                error: function () {
                    console.log('服务器错误');
                }
            })
        }

    })

}]).controller('experienceCtrl', ['$scope', function ($scope) {
    $('.carousel').carousel();
    $('.collapsible').collapsible();
}]).controller('storeCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $("img.lazy").lazyload({effect: "fadeIn"});
    $('.close-storemeng').click(function () {
        $('.storemeng').hide();
    });
    $scope.orderTypeList = [
        {orderType: 'price', name: '价格'},
        {orderType: 'displacement', name: '排量'},
        {orderType: 'oil', name: '油耗'},
        {orderType: 'loveNum', name: '收藏人数'}
    ];
    $scope.isDesc = false;
    $http.post('./api/carData.php', $scope.user)
        .then(function (data) {
            $scope.carList = data.data;
        }, function (data) {
            alert('系统错误');
        });
}]).controller('loginCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
    //判断验证码
    var res = '';

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function randomColor(min, max) {
        var _r = randomNum(min, max);
        var _g = randomNum(min, max);
        var _b = randomNum(min, max);
        return "rgb(" + _r + "," + _g + "," + _b + ")";
    }

    document.getElementById("canvas").onclick = function (e) {
        e.preventDefault();
        drawPic();
    };
    function drawPic() {
        var $canvas = document.getElementById("canvas");
        var _str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var _picTxt = "";
        var _num = 6;
        var _width = $canvas.width;
        var _height = $canvas.height;
        var ctx = $canvas.getContext("2d");
        ctx.textBaseline = "bottom";
        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, _width, _height);
        for (var i = 0; i < _num; i++) {
            var x = (_width - 10) / _num * i + 10;
            var y = randomNum(_height / 2, _height);
            var deg = randomNum(-45, 45);
            var txt = _str[randomNum(0, _str.length)];
            _picTxt += txt;
            ctx.fillStyle = randomColor(10, 100);
            ctx.font = randomNum(16, 40) + "px SimHei";
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }
        res = _picTxt.toLowerCase();
        for (var i = 0; i < _num; i++) {
            ctx.strokeStyle = randomColor(90, 180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, _width), randomNum(0, _height));
            ctx.lineTo(randomNum(0, _width), randomNum(0, _height));
            ctx.stroke();
        }
        for (var i = 0; i < _num * 10; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(randomNum(0, _width), randomNum(0, _height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
        return _picTxt;
    }

    drawPic();
    //提交表单

    $scope.user = {
        username: "",
        userpass: "",
        authority: 'user'
    };
    if (!$rootScope.alreadyLogin) {
        $rootScope.alreadyLogin = !$rootScope.alreadyLogin;
    }
    $scope.loginForm = function () {
        if ($scope.user.username == '' || $scope.user.userpass == '') {
            alert('用户名或密码不能为空!');
            return false;
        }
        var check = $('#check').val().toLowerCase();
        console.log(check);
        console.log(res);
        if(check != res){
            alert('您填写的验证码不正确');
            return false;
        }
        if ($scope.user.authority == 'user') {
            $http.post('./api/login.php', $scope.user)
                .then(function (data) {
                    if (data.data == '1') {
                        alert('登录成功');
                        $rootScope.alreadyLogin = false;
                        $rootScope.showname = $scope.user.username;
                        $location.path('/home');
                    } else {
                        alert('用户名或密码不正确！');
                    }
                }, function (data) {
                    alert('系统错误');
                })
        } else {
            $http.post('./api/adminLogin.php', $scope.user)
                .then(function (data) {
                    if (data.data == '1') {
                        alert('登录成功');
                        window.location.href = "api/admin.php";
                    } else {
                        alert('用户名或密码不正确！');
                    }
                }, function (data) {
                    alert('系统错误');
                })
        }
    }
}]).controller('trySubCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
    if ($rootScope.alreadyLogin) {
        alert('您尚未登录，请登录！');
        $location.path('/login');
    }
    var url = window.location.href;
    var str = url.split('?')[1] + '&username=' + $rootScope.showname;
    $('.try-submit').click(function () {
        $.ajax({
            type: "post",
            url: "api/carTry.php",
            data: str,
            async: false,
            datatype: 'json',
            success: function (data) {
                if (data == 1) {
                    alert('请求试驾成功！');
                    $location.path('/store');
                } else {
                    alert('请求试驾失败，请联系客服！');
                    $location.path('/store');
                }
            },
            error: function () {
                console.log('服务器错误');
            }
        })
    })
}]).controller('registerCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.user = {
        username: "",
        userpass: "",
        acountNumber: "",
        pro: "",
        city: ""
    };
    //判断用户名是否已经存在
    $scope.isOk = false;
    $scope.checkName = function () {
        $http.post('./api/checkname.php', $scope.user)
            .then(function (data) {
                if (data.data == 1) {
                    $scope.isOk = true;
                } else {
                    $scope.isOk = false;
                }
            }, function (data) {
                alert('系统错误');
            });
    };
    $scope.registerForm = function () {
        if ($scope.isOk == true) {
            alert('用户名已经存在！');
            return false;
        }
        if ($scope.user.username == '' || $scope.user.userpass == '' || $scope.user.acountNumber == '') {
            alert('用户名或密码不能为空!');
            return false;
        }
        if ($scope.user.username.length < 2 || $scope.user.userpass.length < 6) {
            alert('用户名长度不得少于2位，密码长度不得少于6位!');
            return false;
        }
        if ($scope.user.againpass != $scope.user.userpass) {
            alert('两次输入的密码不一致!');
            return false;
        }
        if ($scope.user.acountNumber.length != 11) {
            alert('请输入正确的手机号!');
            return false;
        }
        $scope.user.pro = $._cityInfo[$('#pro').val()].n;
        $scope.user.city = $._cityInfo[$('#pro').val()].c[$('#city').val()];
        $http.post('./api/register.php', $scope.user)
            .then(function (data) {
                if (data.data == '1') {
                    alert('注册成功');
                    $location.path('/login');
                } else {
                    alert('注册失败！');
                }
            }, function (data) {
                alert('系统错误');
            })
    };
    $._cityInfo = [{"n": "北京市", "c": ["北京市"]},
        {"n": "天津市", "c": ["天津市"]},
        {"n": "上海市", "c": ["上海市"]},
        {"n": "重庆市", "c": ["重庆市"]},
        {"n": "河北省", "c": ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"]},
        {"n": "山西省", "c": ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"]},
        {
            "n": "台湾省",
            "c": ["台北市", "高雄市", "基隆市", "台中市", "台南市", "新竹市", "嘉义市", "台北县", "宜兰县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "澎湖县", "台东县", "花莲县"]
        },
        {
            "n": "辽宁省",
            "c": ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"]
        },
        {"n": "吉林省", "c": ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"]},
        {
            "n": "黑龙江省",
            "c": ["哈尔滨市", "齐齐哈尔市", "鹤岗市", "双鸭山市", "鸡西市", "大庆市", "伊春市", "牡丹江市", "佳木斯市", "七台河市", "黑河市", "绥化市", "大兴安岭地区"]
        },
        {"n": "江苏省", "c": ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"]},
        {"n": "浙江省", "c": ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"]},
        {
            "n": "安徽省",
            "c": ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "巢湖市", "六安市", "亳州市", "池州市", "宣城市"]
        },
        {"n": "福建省", "c": ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"]},
        {"n": "江西省", "c": ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"]},
        {
            "n": "山东省",
            "c": ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "莱芜市", "临沂市", "德州市", "聊城市", "滨州市", "荷泽市"]
        },
        {
            "n": "河南省",
            "c": ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市"]
        },
        {
            "n": "湖北省",
            "c": ["武汉市", "黄石市", "十堰市", "宜昌市", "襄樊市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施土家族苗族自治州", "仙桃市", "潜江市", "天门市", "神农架林区"]
        },
        {
            "n": "湖南省",
            "c": ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西土家族苗族自治州"]
        },
        {
            "n": "广东省",
            "c": ["广州市", "深圳市", "珠海市", "汕头市", "韶关市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"]
        },
        {
            "n": "甘肃省",
            "c": ["兰州市", "金昌市", "白银市", "天水市", "嘉峪关市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州"]
        },
        {
            "n": "四川省",
            "c": ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"]
        },
        {"n": "贵州省", "c": ["贵阳市", "六盘水市", "遵义市", "安顺市", "铜仁地区", "毕节地区", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "黔南布依族苗族自治州"]},
        {
            "n": "海南省",
            "c": ["海口市", "三亚市", "五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "澄迈县", "定安县", "屯昌县", "临高县", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县"]
        },
        {
            "n": "云南省",
            "c": ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "思茅市", "临沧市", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "大理白族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"]
        },
        {"n": "青海省", "c": ["西宁市", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"]},
        {"n": "陕西省", "c": ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"]},
        {
            "n": "广西壮族自治区",
            "c": ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"]
        },
        {"n": "西藏自治区", "c": ["拉萨市", "昌都地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区", "林芝地区"]},
        {"n": "宁夏回族自治区", "c": ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"]}];

    $.initProv = function (prov, city, defaultProv, defaultCity) {
        var provEl = $(prov);
        var cityEl = $(city);
        var hasDefaultProv = (typeof(defaultCity) != 'undefined');

        var provHtml = '';

        provHtml += '<option value="-1">请选择</option>';
        for (var i = 0; i < $._cityInfo.length; i++) {
            provHtml += '<option value="' + i + '"' + ((hasDefaultProv && $._cityInfo[i].n == defaultProv) ? ' selected="selected"' : '') + '>' + $._cityInfo[i].n + '</option>';
        }
        provEl.html(provHtml);
        $.initCities(provEl, cityEl, defaultCity);
        provEl.change(function () {
            $.initCities(provEl, cityEl);
        });
    };
    $.initCities = function (provEl, cityEl, defaultCity) {
        var hasDefaultCity = (typeof(defaultCity) != 'undefined');
        if (provEl.val() != '' && parseInt(provEl.val()) >= 0) {
            var cities = $._cityInfo[parseInt(provEl.val())].c;
            var cityHtml = '';
            cityHtml += '<option value="-1">请选择</option>';
            for (var i = 0; i < cities.length; i++) {
                cityHtml += '<option value="' + i + '"' + ((hasDefaultCity && cities[i] == defaultCity) ? ' selected="selected"' : '') + '>' + cities[i] + '</option>';
            }
            cityEl.html(cityHtml);
        } else {
            cityEl.html('<option value="-1">请先选择</option>');
        }
    };
    $.initProv("#pro", "#city", "江苏省", "淮安市");
}]).controller('detailCtrl', ['$scope', '$http', function ($scope, $http) {
    //车辆数据展示
    var arrCol=[],arrRow=['2012年','2013年','2014年','2015年','2016年'];
    var arrcol=[];
    $http.post('./api/carData.php', $scope.user)
        .then(function (data) {
            $scope.carList = data.data;
            for(var i=0;i<$scope.carList.length;i++){
                var arr=[];
                arr.push($scope.carList[i].v2012);
                arr.push($scope.carList[i].v2013);
                arr.push($scope.carList[i].v2014);
                arr.push($scope.carList[i].v2015);
                arr.push($scope.carList[i].v2016);
                arrcol.push(arr);
            }
            chart();
        }, function (data) {
            alert('系统错误');
        });
    $('#selectChart').change(function(){
        chart();
    });
    //二维图
    function chart() {
        var j=$('#selectChart').val();
        arrCol=arrcol[j];
        var myChart = echarts.init(document.getElementById('main'));
        var colors = [ '#5793f3', '#d14a61', '#675bba' ];
        option = {
            color : colors,
            title: {
                text: '兰博基尼销售量信息图',
                subtext: '数据来自兰博基尼销售网',
                x: 'center'
            },
            tooltip : {
                trigger : 'none',
                axisPointer : {
                    type : 'cross'
                }
            },
            legend: {
                data:['销售量','/辆'],
                x: 'left'
            },
            grid : {
                top : 70,
                bottom : 50
            },
            xAxis : [ {
                type : 'category',
                axisTick : {
                    alignWithLabel : true
                },
                axisLine : {
                    onZero : false,
                    lineStyle : {
                        color : colors[1]
                    }
                },
                axisPointer : {
                    label : {
                        formatter : function(params) {
                            return '销售量  ' + params.value + '：'
                                + params.seriesData[0].data;
                        }
                    }
                },
                data : arrRow
            } ],
            yAxis : [ {
                name : '销售量(辆/年)',
                type : 'value'
            } ],
            series : [ {
                name : '车辆销售量',
                type : 'line',
                smooth : true,
                data : arrCol
            } ]
        };
        myChart.setOption(option);
    }
}]);