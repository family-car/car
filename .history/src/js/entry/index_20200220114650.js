$(document).ready(function(){
    shake()
    loading()
    
})
function shake(){
    $(".share").on("click",function(){
        $(this).addClass("shake");
        setTimeout('removeShake()',1000);
    })
}
function removeShake(){
    $(".share").removeClass("shake");
}
function loading(){
    var loading = '<div id="loading"><div class="loader-01"></div></div>';
    $('body').append($(loading));
    setTimeout(function () {
        $('#loading').remove();
    }, 1000);
}
