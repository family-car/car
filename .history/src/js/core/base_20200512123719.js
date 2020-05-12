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
        //if(this.urlHtml()=="index")
        switch (page) {
            case 'index':
                {
                    return data?<ReactMarkdown source={data.rule} escapeHtml={true}/>:'';
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