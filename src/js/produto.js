$(function (){

	//Imagem do Produto
	$('.prod-img-content').jCarouselLite({
		btnNext: '.next',
		btnPrev: '.prev',
		circular: false 
	});

	//Label select
	$('.section-title').on('click', function() {
		$(this).parent().children().addClass('disabled');
		$(this).removeClass('disabled');
	});
	
});