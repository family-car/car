$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form .form_cell:gt(2)').addClass("hide");
            $(".more").on("click",function(){
                $('.userInfo_form .form_cell:gt(2)').toggle();
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
