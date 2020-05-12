$(function () {
    var  process={
        init:function(){
            this.uploaBtn();
        },
        folder:function(){
            $(".weui-uploader__input-box").on("click",function(){
                $(this).css("borderWidth","2px")
            })
        }
    };

    window.onload = function(){
        process.init();
    }


})
