/**  默认加载  **/
$(function () {
    var  process={
        iconList:[{name:"接车进店",image:"src/image/join3x.png"},
            {name:"维保开单",image:"src/image/repair.png"},
            {name:"快速洗车",image:"src/image/wash.png"},
            {name:"车辆检测",image:"src/image/check.png"},
            {name:"待施工",image:"src/image/construct3x.png"},
            {name:"待完工",image:"src/image/complete.png"},
            {name:"完工质检",image:"src/image/quality.png"},
            {name:"待结算",image:"src/image/account.png"},
            {name:"客户查询",image:"src/image/inquiry.png"},
            {name:"预约订单",image:"src/image/bill3x.png"},
            {name:"测试数据",image:"src/image/join3x.png"},
        ],
        activeSrc:[{
            url:"src/image/active_index.png",
            url:"src/image/active_index.png",
            url:"src/image/active_index.png",
            url:"src/image/active_index.png",
        }],
        init:function(){
            this.swiper();
            this.footerTab();
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
            $(".swiper-container").swiper({
                loop: true,
                autoplayDisableOnInteraction: false,
                autoplay: 3000,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
        footerTab:function(){
            $(".weui-tabbar .weui-tabbar__item").on("click",function(){
                const listIndex = $(this).index()
                console.log(listIndex)
                this.activeSrc.forEach((item,index)=>{
                    if(index==listIndex){
                        $(this).children().find("img").src(item.url)
                    }
                })
            })
        }
    };

    window.onload = function(){
        process.init();
    }


})


