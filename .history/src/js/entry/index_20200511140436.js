/**  默认加载  **/
$(function () {
    var  process={
        json:[{name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        {name:"接车进店",image:""},
        ],
        init:function(){
            this.swiper();
        },
        swiper:function () {
            /*  轮播效果加载   */
            var t=$(".swiper-wrapper img").length;
            if(t<2){
            }else {
                //首页加载
                $(".swiper-container").swiper({
                    loop: true,
                    autoplayDisableOnInteraction: false,
                    autoplay: 3000
                });
            }
        },
    };

    window.onload = function(){
        process.init();
    }


})


