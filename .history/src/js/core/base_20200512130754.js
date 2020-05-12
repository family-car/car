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
        switch (this.urlHtml()) {
            case 'index':
                {
                    return (
                        $(".index").children(".weui-tabbar__label").css("color","#999")
                    )
                }
            case 'upload':
                {
                    return $(".apply").children(".weui-tabbar__label").css("color","#F12222")
                }
            case 'manage':
                {
                    return $(".apply").children(".weui-tabbar__label").css("color","#F12222")
                }
            case 'mine':
                {
                    return $(".apply").children(".weui-tabbar__label").css("color","#F12222")
                }
             default:
                {
                    return "";
             }
        };
    }
};
process.init();