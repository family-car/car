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
        switch (page) {
            case 'index':
                {
                    return (
                        $(".index").children(".weui-tabbar__label").css("color","#F12222")
                        //$(".index").children(".weui-tabbar__label").css("color","#F12222")
                    )
                }
            case 'apply':
                {
                    return data?<ReactMarkdown source={data.datas} escapeHtml={true}/>:'';
                }
            case 'manage':
                {
                    return data?<RankTable id={this.props.page.content.id}/>:'';
                }
            case 'mine':
                {
                    return data?<UploadFile id={this.props.page.content.id}/>:'';
                }
             default:
                {
                    return "";
             }
        };
    }
};
process.init();