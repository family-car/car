/**  默认加载  **/
$(function () {
    var  process={
        iconList:[{name:"接车进店",image:"src/image/join3x.png"},
            {name:"维保开单",image:"src/image/handel.png"},
            {name:"快速洗车",image:"src/image/wash.png"},
            {name:"车辆检测",image:"src/image/join3x.png"},
            {name:"待施工",image:"src/image/join3x.png"},
            {name:"待完工",image:"src/image/join3x.png"},
            {name:"完工质检",image:"src/image/join3x.png"},
            {name:"待结算",image:"src/image/join3x.png"},
            {name:"客户查询",image:"src/image/join3x.png"},
            {name:"预约订单",image:"src/image/join3x.png"},
            {name:"测试数据",image:"src/image/join3x.png"},
        ],
        init:function(){
            this.swiper();
        },
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
              const page = Math.floor(index / 10)
              if (!pages[page]) {
                pages[page] = []
              }
              pages[page].push(item)
            })
            return pages
        },
        swiper:function () {
            /*加载轮播列表*/
            let swpier = []
            let temp = []
            $.each(this.pages(),function(n,item){
                temp.push(`<div class="swiper-slide">`);
                $.each(item,function(n,v){
                    temp.push(`<div class="iconList">`);
                    temp.push(`<img class="icon-img-content" src="${v.image}" alt="" />`);
                    temp.push(`<p class="icon-desc">${v.name}</p>`);
                    temp.push(`</div>`);
                })
                temp.push(`</div>`);
            })
            $(".swiper-wrapper").html(temp.join(''))
            /*  轮播效果加载   */
            var t=$(".swiper-wrapper .swiper-slide").length;
            if(t<2){
            }else {
                $(".swiper-container").swiper({
                    loop: true,
                    autoplayDisableOnInteraction: false,
                    paginationClickable: true,
                    autoplay: 3000
                });
            }
        },
    };

    window.onload = function(){
        process.init();
    }


})


