$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form form_cell').each(function(index){
                console.log($(this))
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
