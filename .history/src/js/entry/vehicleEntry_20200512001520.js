$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            var $li = $('.userInfo_form').find('.form_cell');
            var $more = $('.userInfo_form').find('.more');
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
