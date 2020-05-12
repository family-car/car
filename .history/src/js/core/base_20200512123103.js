/**  默认加载  **/
$(function () {
    var  process={
        init:function(){
            this.urlHtml();
        },
        urlHtml:function(){
            var str = window.location.href;
            str = str.substring(str.lastIndexOf("/") + 1);
            str = str.substring(0, str.lastIndexOf("."));
            return str;
        },
        footerLink:function(){
            
        }
    };

    window.onload = function(){
        process.init();
    }


})