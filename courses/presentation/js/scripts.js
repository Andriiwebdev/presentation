/*==================================
=            object-fit            =
==================================*/

	if ($('.objectfit-box').length > 0 && !Modernizr.objectfit) {
		$('.objectfit-box').each(function () {
			var src = $(this).find('> img').attr('src');
			$(this).css('background-image','url(' + src + ')');
		})
	}

/*=====  End of object-fit  ======*/



/*===================================
=            validate js            =
===================================*/

	if($('#contactForm').length>0){
		$('#contactForm').validate({
			errorClass:'error-input',
			validClass:'success-input',
			highlight: function (element, errorClass, validClass) { 
				$(element).addClass(errorClass).removeClass(validClass); 
			},
			unhighlight: function (element, errorClass, validClass) { 
				$(element).removeClass(errorClass).addClass(validClass); 
			},
			rules: {
				"Client[firstName]": {
					required: true
				},
				
				"Client[lastName]": {
					required: true
				},
				
				"Client[phone]": {
					required: true
				},
				"Client[email]": {
					required: true,
					email: true
				},
				
				text: {
					required: true
				}
				
			}
		});
	}

	if($('#registrationForm').length>0){
		$('#registrationForm').validate({
			errorClass:'error-input',
			validClass:'success-input',
			highlight: function (element, errorClass, validClass) { 
				$(element).addClass(errorClass).removeClass(validClass); 
			},
			unhighlight: function (element, errorClass, validClass) { 
				$(element).removeClass(errorClass).addClass(validClass); 
			},
			rules: {
				"Client[firstName]": {
					required: true
				},
				"Client[lastName]": {
					required: true
				},
				"Client[phone]": {
					required: true
				},
				"Client[email]": {
					required: true,
					email: true
				},
				"Client[occupation]": {
					required: true
				},
				 
			}
		});
	}

/*=====  End of validate js  ======*/



/*=========================================
=            textarea autosize            =
=========================================*/

	if( $('.textarea').length>0 ){
		autosize($('.textarea'));
	}

/*=====  End of textarea autosize  ======*/



/*====================================
=            preloader js            =
====================================*/

	function loadPageFunction (){
		var loader = $('.page-preloader');
		loader.addClass('load');
		setTimeout(function() {
			loader.remove();
		}, 500);
	}

/*=====  End of preloader js  ======*/



/*==========================================
=            inputs placeholder            =
==========================================*/

	$(".input-group-field input").on('keyup', function() {
		var th = $(this);
		var fl = th.closest('.input-group').find('.input-group-placeholder');
		if(th.val().length == '') {
			fl.removeClass('no-active');
		}
	});

	$(".input-group-field input").focusout(function() {
		var th = $(this);
		var fl = th.closest('.input-group').find('.input-group-placeholder');
		if(th.val().length == '') {
			fl.removeClass('no-active');
		}
	});

	$('.input-group-placeholder').on('click', function() {
		var th = $(this);
		th.addClass('no-active');
		th.closest('.input-group').find('input').focus();
	});

	var readyInputs = function(){
		var th = $(".input-group-field input");
		var fl = th.closest('.input-group').find('.input-group-placeholder');
		if(th.val().length != '') {
			fl.addClass('no-active');
		}
	}

/*=====  End of inputs placeholder  ======*/




$(window).on('load', function () {
	loadPageFunction();
});

$(document).on('ready', function(){
	$('.aminate-element').viewportChecker({
		classToAdd: 'zoomIn',
		offset: ['1%'],
		scrollHorizontal: false
	});
	readyInputs();
});

$(window).on('scroll', function(){
});

$(window).on('resize', function(){
});