$(function () {
    var  process={
        init:function(){
            this.tabbar();
        },
        tabbar:function(){
            $(".taskTabbar li").on("click",function(){
                $(this).addClass("active").siblings().removeClass("active")
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})