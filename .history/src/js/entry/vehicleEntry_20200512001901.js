$(function () {
    var  process={
        init:function(){
            this.folder();
        },
        folder:function(){
            $('.userInfo_form .form_cell').each((index,element)=>{
                console.log(index)
            })
            
        }
    };

    window.onload = function(){
        process.init();
    }


})
