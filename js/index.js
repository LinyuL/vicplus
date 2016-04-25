$(function(){
    /*导航栏响应*/
    var $btnclose=$(".btn-close");
    var $navr=$(".head-navr");
    $btnclose.click(function(){
        $navr.slideToggle();
    })
    /*轮播图*/
    /*var $imgs=$(".banner li");
    console.log($imgs);
    var $imgw=$imgs.width();
    var $lis=$(".btn-list li");
    $imgs.eq(0).css({left:0});
    var now=0;
    var next=0;
    var flag=true;
    var t=setInterval(wheel,3000);
    function wheel(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==$imgs.length){
            next=0;
        }
        $imgs.eq(next).css({left:$imgw});
        $imgs.eq(now).animate({left:-$imgw},1000);
        $imgs.eq(next).animate({left:0},1000,function(){
            flag=true;
        });
        $lis.removeClass("hot").eq(next).addClass("hot");
        now=next;
    }*/
    /*鼠标移上事件*/
   /* var $banner=$(".banner-box");
    $banner.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(wheel,3000);
    })*/
    /*轮播选项卡*/
    //$lis.click(function(){
    //    var indexLis=$(this).index();
    //    if(now==indexLis||!flag){
    //        return;
    //    }
    //    flag=false;
    //    if(now>indexLis){
    //        $imgs.eq(indexLis).css({left:-$imgw});
    //        $imgs.eq(now).animate({left:$imgw},1000);
    //    }
    //    if(now<indexLis){
    //        $imgs.eq(indexLis).css({left:$imgw});
    //        $imgs.eq(now).animate({left:-$imgw},1000);
    //    }
    //    $imgs.eq(indexLis).animate({left:0},1000,function(){
    //        flag=true;
    //    });
    //    $lis.removeClass("hot").eq(indexLis).addClass("hot");
    //    now=next=indexLis;
    //})
    /*左右键*/
    /*var $rbtn=$(".btn-right");
    var $lbtn=$(".btn-left");
    $rbtn.click(function(){
        wheel();
    })
    $lbtn.click(function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=$imgs.length-1;
        }
        $imgs.eq(next).css({left:-$imgw});
        $imgs.eq(now).animate({left:$imgw},1000);
        $imgs.eq(next).animate({left:0},1000,function(){
            flag=true;
        });
        $lis.removeClass("hot").eq(next).addClass("hot");
        now=next;
    })*/











})