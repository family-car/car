/**  默认加载  **/
$(function () {
    var  process={
        iconList:[{name:"接车进店",image:""},
            {name:"维保开单",image:""},
            {name:"快速洗车",image:""},
            {name:"车辆检测",image:""},
            {name:"待施工",image:""},
            {name:"待完工",image:""},
            {name:"完工质检",image:""},
            {name:"待结算",image:""},
            {name:"客户查询",image:""},
            {name:"预约订单",image:""},
        ],
        init:function(){
            this.swiper();
        },
        swiper:function () {
            /*加载轮播列表*/
            let temp = []
            $.each(this.iconList,function(n,v){
                temp.push(`<div class="swiper-slide"></div>`);
                temp.push(`<div class="cons-img">`);
                temp.push(`<img class="icon-img-content" src="${v.imgUrl}" alt="" />`);
                temp.push(`</div>`);
                temp.push(`<p class="icon-desc">${v.name}</p>`);
                temp.push(`</div>`);
            })
            $(".swiper-wrapper").html(temp.join(''))
            /*  轮播效果加载   */
            var t=$(".swiper-wrapper .swiper-slide").length;
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


