$(function(){$(".slider-content").jCarouselLite({btnNext:".next",btnPrev:".prev",circular:!1});var t=$(".slider-content");$(".slider-content").touchwipe({wipeLeft:function(){$(".next").click()},wipeRight:function(){$(".prev").click()}});var e=$(window).width(),t=$(".slider-content");e>1440&&t.width("1340px"),900>e&&$(".slider-content-in").width("100%")});