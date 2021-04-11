let layoutWidth = $(window).width();

$(document).ready(function() {

    var wedDay = new Date(); 
	wedDay = new Date(2021, 4-1, 24); 
	$('#defaultCountdown').countdown({until: wedDay, timezone: -240}); 


// Отправка заявки 

	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$('body').css('overflow-y', 'hidden')
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
	
// Закрыть попап «спасибо»
	$('.js-close-thank-you').click(function() { // по клику на крестик
		$('.js-overlay-thank-you').fadeOut();
		$('body').css('overflow-y', '')
	});

	$(document).mouseup(function (e) { // по клику вне попапа
		var popup = $('.popup');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-thank-you').fadeOut();
			$('body').css('overflow-y', '')
		}
	});

	if(layoutWidth <= 767) {
		$('#hexagon2').click(function() { 
			console.log(1);
			$('#hexagon1').css('display','flex');
			$('#hexagon5').css('display','flex')
		});
		$('#hexagon3').click(function() { 
			console.log(1);
			$('#hexagon4').css('display','flex');
			$('#hexagon7').css('display','flex')
		});

	}

	$('button.day-btn.day1').click(function(){
		if ($('button.day-btn.day1').hasClass('inactive')){
			$('button.day-btn.day1').removeClass('inactive');
			$('button.day-btn.day2').addClass('inactive');
			$('#day1.day-content').removeClass('hidden');
			$('#day2.day-content').addClass('hidden');
			$('.program h5.subtitle').html('24 апреля');
		}
	});
	$('button.day-btn.day2').click(function(){
		if ($('button.day-btn.day2').hasClass('inactive')){
			$('button.day-btn.day2').removeClass('inactive');
			$('button.day-btn.day1').addClass('inactive');
			$('#day2.day-content').removeClass('hidden');
			$('#day1.day-content').addClass('hidden');
			$('.program h5.subtitle').html('25 апреля');
		}
	});

	$(document).click(function (e) { 
		var popup = $('.popup');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-thank-you').fadeOut();
			$('body').css('overflow-y', '')
		}
	});

});