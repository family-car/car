$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form .form_cell').each(function(index){
                if ( index > 1 ){
                   $(this).hide()
                }
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
