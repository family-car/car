$(function () {
    var  process={
        activeSrc=[{
          url:"src/image/active_index.png",
          url:"src/image/active_index.png",
          url:"src/image/active_index.png",
          url:"src/image/active_index.png",
        }],
        init:function(){
            this.folder();
            this.footerTab();
        },
        folder:function(){
            let isOff = true
            $('.userInfo_form .user_cell:gt(3)').addClass("hide");
            $(".more").on("click",function(){
                if(isOff){
                    $('.userInfo_form .user_cell:gt(3)').removeClass("hide");
                    isOff = false
                }else{
                    $('.userInfo_form .user_cell:gt(3)').addClass("hide");
                    isOff = true
                }
                
            })
            
        },
        footerTab:function(){
            $(".weui-tabbar .weui-tabbar__item").on("click",function(){
                const listIndex = $(this).index()
                console.log(listIndex)
                activeSrc.forEach((item,index)=>{
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
