var  process={
    init:function(){
        this.footerLink();
    },
    urlHtml:function(){
        var str = window.location.href;
        str = str.substring(str.lastIndexOf("/") + 1);
        str = str.substring(0, str.lastIndexOf("."));
        return str;
    },
    footerLink:function(){
        console.log(this.urlHtml())
    }
};
process.init();