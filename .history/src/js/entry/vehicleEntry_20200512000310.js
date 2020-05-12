$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            var CRT = 3; // 如果大于等于3
            jQuery (function ($)
            {
                $ ("div.one li").filter ("li:gt(" + (CRT - 1) + ")").hide ().filter (":last").show ().click (function ()
                {
                e69da5e887aa7a6431333337383838    $ (this).siblings ("li:gt(" + (CRT - 1) + ")").toggle ();
                });
            });
        }
    };

    window.onload = function(){
        process.init();
    }


})
