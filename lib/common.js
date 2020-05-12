
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
document.write('<meta name="viewport" content="width=750,target-densitydpi=device-dpi, initial-scale='+_phoneScale+', minimum-scale='+_phoneScale+', maximum-scale='+_phoneScale+', user-scalable=no">');

function getQueryString(name) {//用url来判断横屏
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}