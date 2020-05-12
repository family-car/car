$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $(".more").on("click",function(){
                var a= $(".userInfo_form .form_cell");
                for(var i in a){
                    if(i < 3){
                       a[i].show();
                    }
                }
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
