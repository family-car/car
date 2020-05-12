$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form .form_cell:gt(2)').addClass("hide");
            $(".more").on("toggle",function(){
                $('.userInfo_form .form_cell:gt(2)').removeClass("hide");
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
