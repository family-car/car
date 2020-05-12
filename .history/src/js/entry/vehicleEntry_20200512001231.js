$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            var $li = $('.userInfo_form').find('.form_cell');
            var $more = $('.userInfo_form').find('.more');
            for( var i=0; i<$li.length; i++ ){
                i < 3 ? $li.eq(i).show() : $li.eq(i).hide();
            }
            $li.length > 3 ? $more.show() : $more.hide();
            $more.on('click', function(){
                $li.show();
                $more.hide();
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
