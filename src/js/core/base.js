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
                        $(".index").children(".weui-tabbar__label").css("color","#F12222"),
                        $(".index").children(".weui-tabbar__icon").find("img").attr("src","src/image/active_index.png")
                    )
                }
            case 'apply':
                {
                    return (
                        $(".apply").children(".weui-tabbar__label").css("color","#F12222"),
                        $(".apply").children(".weui-tabbar__icon").find("img").attr("src","src/image/active_index.png")
                    )
                }
            case 'manage':
                {
                    return (
                        $(".manage").children(".weui-tabbar__label").css("color","#F12222"),
                        $(".manage").children(".weui-tabbar__icon").find("img").attr("src","src/image/active_index.png")
                    )
                }
            case 'mine':
                {
                    return (
                        $(".mine").children(".weui-tabbar__label").css("color","#F12222"),
                        $(".mine").children(".weui-tabbar__icon").find("img").attr("src","src/image/active_index.png")
                    )
                }
             default:
                {
                    return "";
             }
        };
    }
};
process.init();