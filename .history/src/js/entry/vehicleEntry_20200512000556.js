$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $(".more").on("click",function(){
                var CRT = 3; // 如果大于等于3
                $ (".userInfo_form .form_cell").filter (".form_cell:gt(" + (CRT - 1) + ")")
                                               .hide ()
                                               .filter (":last").show ().click (function (){
                                                  $ (this).siblings (".form_cell:gt(" + (CRT - 1) + ")").toggle ();
                                                });
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
