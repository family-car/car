/**  默认加载  **/
$(function () {
    var  process={
        init:function(){
            this.urlHtml();
        },
        urlHtml:function(){
            $(".weui-uploader__input-box").on("click",function(){
                $(this).css("borderWidth","2px")
            })
        }
    };

    window.onload = function(){
        process.init();
    }


})