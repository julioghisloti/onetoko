//ONE toko - main.js
$(function (){
	$(".slider-content").jCarouselLite({
		btnNext: '.next',
		btnPrev: '.prev',
		circular: false
	});

	//Opcao swipe para mobile
	var slider = $('.slider-content');
	$('.slider-content').touchwipe({
		 wipeLeft: function() { $('.next').click(); },
		 wipeRight: function(){ $('.prev').click(); }
	});

	//Set Slider content width
	var widthTela = $(window).width();
	var slider = $('.slider-content');

	if(widthTela > 1440){
		slider.width("1340px");
	}

	if(widthTela < 900){
		$('.slider-content-in').width('100%');
	}

});