$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form form_cell').each(function(index){
                
                if ( index > 2 ){
                   $(this).hide()
                }
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
