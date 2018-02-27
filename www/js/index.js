$(function(){
    $(document).scroll(function(){
        var y=$(window).scrollTop();
        if(y>400){
            $('.toTop').fadeIn(200);
        }
        else{
            $('.toTop').fadeOut(200);
        }
    });
    $('.toTop').click(function(){
        $(window).scrollTop(0);
    });
    $('.fa-navicon').toggle(function(){
        $('.admin-left').stop().animate({'width':0},500);
    },function(){
        $('.admin-left').stop().animate({'width':200},500);
    });
});

