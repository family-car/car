//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
	_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容 //left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px;
//var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;z-index:999;height:' + _PageHeight + 'px;top:0;background: #fff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%); cursor1: wait;  height: 80px;width: 80px; color:#fff;background: url(../../images/loading.gif) no-repeat center/cover;"></div></div>';
//呈现loading效果
//document.write(_LoadingHtml);
document.documentElement.addEventListener('touchmove', bodyScroll, false);
$('body').css({'position':'fixed',"width":"100%"});

//监听加载状态改变
document.onreadystatechange = completeLoading;

function getQueryString(name) {//用url来判断横屏
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
function rem(){
	var _phoneWidth = parseInt(window.screen.width);
	var _phoneHeight = parseInt(window.screen.height);
	var _phoneScale = Math.floor(_phoneWidth/750*100)/100;
	var Terminal = {
	            platform : function(){
	                var u = navigator.userAgent, app = navigator.appVersion;
	                return {
	                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
	                    iPhone: u.indexOf('iPhone') > -1 ,
	                    iPad: u.indexOf('iPad') > -1
	                };
	            }(),
	            language : (navigator.browserLanguage || navigator.language).toLowerCase()
	        }
	if((Terminal.platform.iPhone||Terminal.platform.iPad)&&getQueryString("isReverse")=="yes"){
			      	  alert(getQueryString("isReverse"));
			    	  _phoneScale = _phoneHeight/750;
	}		
	var ua = navigator.userAgent;
	$("#viewport").attr('content','width=750,target-densitydpi=device-dpi, initial-scale='+_phoneScale+', minimum-scale='+_phoneScale+', maximum-scale='+_phoneScale+', user-scalable=no');

}
rem()
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == 'complete') {
    	rem();
    	window.addEventListener("resize", rem, false);
    	
        //var loadingMask = document.getElementById('loadingDiv');
        //loadingMask.parentNode.removeChild(loadingMask);
        //document.body.removeEventListener('touchmove',bodyScroll,false);
        $("body").css({"position":"initial","height":"auto"});
        $(".invite_box").removeClass("hideDiv");
        //$(".loading").removeClass("hideDiv");
    }
}

function bodyScroll(event){
    event.preventDefault();
}
