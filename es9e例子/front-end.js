    //微信分享
    // var ua = navigator.userAgent.toLowerCase();
    // if (ua.match(/MicroMessenger/i) != "micromessenger") return;

    imgUrl = typeof (thumb) != 'undefined' && thumb.length ? thumb : "https://www.es9e.com/res/day2018/images/es9e_wxlogo.jpg";
    imgUrl = (imgUrl.substr(0,7).toLowerCase() == "http://" || imgUrl.substr(0,8).toLowerCase() == "https://") ? imgUrl : "https://www.es9e.com"+imgUrl;
    // console.log(imgUrl)

    var artDesc = ''
    var meta = document.getElementsByTagName('meta');
    for(i in meta){
         if(typeof meta[i].name!="undefined"&&meta[i].name.toLowerCase()=="description"){
            artDesc = meta[i].getAttribute("content");
         }
    }

	window.share_config = {
		"share": {
		   "imgUrl": imgUrl,
		   "desc" : artDesc,
		   "title" : document.title,
		   "link": document.location.href.split('#')[0],
		   "success":function(){

		   },
		   'cancel': function () {

		   }
	   }
   }; 

    $.getScript("https://res.wx.qq.com/open/js/jweixin-1.6.0.js", function(){
        $.getJSON("https://www.es9e.com/wechat/back.php?url="+encodeURIComponent(document.location.href.split('#')[0]), function (data) {
            wx.config({
                debug: false,
                appId: data.appid,
                timestamp: data.timestamp,
                nonceStr: data.noncestr,
                signature: data.signature,
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
            });
            wx.ready(function () {
                wx.updateAppMessageShareData(share_config.share);
                wx.updateTimelineShareData(share_config.share);
            });
        });
    });