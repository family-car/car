$(function () {
    var  process={
        init:function(){
            this.folder();
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
            $("")
        }
    };

    window.onload = function(){
        process.init();
    }


})