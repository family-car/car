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
            case '排行榜':
                {
                    return data?<RankTable id={this.props.page.content.id}/>:'';
                }
            case '提交结果':
                {
                    return data?<UploadFile id={this.props.page.content.id}/>:'';
                }
            case '常见问题':
                {
                    return data?<ReactMarkdown source={data.question} escapeHtml={true}/>:'';
                }
             default:
                {
                    return "暂无内容";
             }
        };
    }
};
process.init();