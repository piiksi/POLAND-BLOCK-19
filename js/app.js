$(document).ready(function () {
	$('.see-comments').on('click', function (event) {
		event.stopPropagation();
		event.preventDefault();
		$(this).closest('.hotel').find('.comments').slideToggle();
	});
});

$('.hotel').on('keyup', '.quantity', function (event) {
	var quantity = +$(this).val();
	var price = +$(this).closest('.hotel').data('price');
	$(this).closest('.hotel').find('.total').text(quantity * price);
});
