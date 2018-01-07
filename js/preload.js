
	$(function(){
		var img = new Image();
		img.src="http://opvf95u4n.bkt.clouddn.com/bg1.jpg";
		img.onload = function(){
			$("#home").css('background-image', "url("+img.src+")");
			console.log("loaded");
		}	
	})
