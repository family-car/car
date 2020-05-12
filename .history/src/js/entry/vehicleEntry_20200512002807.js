$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            let isOff = true
            $('.userInfo_form .form_cell:gt(2)').addClass("hide");
            $(".more").on("click",function(){
                if(isOff){
                    $('.userInfo_form .form_cell:gt(2)').removeClass("hide");
                    isOff = false
                }else{
                    $('.userInfo_form .form_cell:gt(2)').addClass("hide");
                    isOff = true
                }
                
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
