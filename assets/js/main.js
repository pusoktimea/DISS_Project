/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');
					button 	= t.find('.welc_image');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});

		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});

			$(document).ready(function() {
				//Text1
				var audioElementT1 = document.createElement('audio');
				audioElementT1.setAttribute('src', 'audioText/t1.mp3');

				$('#playT1').click(function() {
					audioElementT1.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT1').click(function() {
					audioElementT1.pause();
					$("#status").text("Status: Paused");
				});

				//Text2
				var audioElementT2 = document.createElement('audio');
				audioElementT2.setAttribute('src', 'audioText/t2.mp3');

				$('#playT2').click(function() {
					audioElementT2.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT2').click(function() {
					audioElementT2.pause();
					$("#status").text("Status: Paused");
				});

				//Text3
				var audioElementT3 = document.createElement('audio');
				audioElementT3.setAttribute('src', 'audioText/t3.mp3');

				$('#playT3').click(function() {
					audioElementT3.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT3').click(function() {
					audioElementT3.pause();
					$("#status").text("Status: Paused");
				});

				//Text4
				var audioElementT4 = document.createElement('audio');
				audioElementT4.setAttribute('src', 'audioText/t4.mp3');

				$('#playT4').click(function() {
					audioElementT4.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT4').click(function() {
					audioElementT4.pause();
					$("#status").text("Status: Paused");
				});

				//Text5
				var audioElementT5 = document.createElement('audio');
				audioElementT5.setAttribute('src', 'audioText/t5.mp3');

				$('#playT5').click(function() {
					audioElementT5.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT5').click(function() {
					audioElementT5.pause();
					$("#status").text("Status: Paused");
				});

				//Text6
				var audioElementT6 = document.createElement('audio');
				audioElementT6.setAttribute('src', 'audioText/t6.mp3');

				$('#playT6').click(function() {
					audioElementT6.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT6').click(function() {
					audioElementT6.pause();
					$("#status").text("Status: Paused");
				});

				//Text7
				var audioElementT7 = document.createElement('audio');
				audioElementT7.setAttribute('src', 'audioText/t7.mp3');

				$('#playT7').click(function() {
					audioElementT7.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT7').click(function() {
					audioElementT7.pause();
					$("#status").text("Status: Paused");
				});

				//Text8
				var audioElementT8 = document.createElement('audio');
				audioElementT8.setAttribute('src', 'audioText/t8.mp3');

				$('#playT8').click(function() {
					audioElementT8.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT8').click(function() {
					audioElementT8.pause();
					$("#status").text("Status: Paused");
				});

				//Text9
				var audioElementT9 = document.createElement('audio');
				audioElementT9.setAttribute('src', 'audioText/t9.mp3');

				$('#playT9').click(function() {
					audioElementT9.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT9').click(function() {
					audioElementT9.pause();
					$("#status").text("Status: Paused");
				});

				//Text10
				var audioElementT10 = document.createElement('audio');
				audioElementT10.setAttribute('src', 'audioText/t10.mp3');

				$('#playT10').click(function() {
					audioElementT10.play();
					$("#status").text("Status: Playing");
				});

				$('#pauseT10').click(function() {
					audioElementT10.pause();
					$("#status").text("Status: Paused");
				});

				//---------------------------------------------------

				//Dog
				var audioElement1 = document.createElement('audio');
				audioElement1.setAttribute('src', 'answers/dog.mp3');

				$('#play1').click(function() {
					audioElement1.play();
					$("#status").text("Status: Playing");
				});

				$('#pause1').click(function() {
					audioElement1.pause();
					$("#status").text("Status: Paused");
				});

				//Crow
				var audioElement4 = document.createElement('audio');
				audioElement4.setAttribute('src', 'answers/crow.mp3');

				$('#play4').click(function() {
					audioElement4.play();
					$("#status").text("Status: Playing");
				});

				$('#pause4').click(function() {
					audioElement4.pause();
					$("#status").text("Status: Paused");
				});

				//Cat
				var audioElement6 = document.createElement('audio');
				audioElement6.setAttribute('src', 'answers/cat.mp3');

				$('#play6').click(function() {
					audioElement6.play();
					$("#status").text("Status: Playing");
				});

				$('#pause6').click(function() {
					audioElement6.pause();
					$("#status").text("Status: Paused");
				});

				//Bee
				var audioElement7 = document.createElement('audio');
				audioElement7.setAttribute('src', 'answers/bee.mp3');

				$('#play7').click(function() {
					audioElement7.play();
					$("#status").text("Status: Playing");
				});

				$('#pause7').click(function() {
					audioElement7.pause();
					$("#status").text("Status: Paused");
				});


				//Cry
				var audioElement9 = document.createElement('audio');
				audioElement9.setAttribute('src', 'answers/cry.mp3');

				$('#play9').click(function() {
					audioElement9.play();
					$("#status").text("Status: Playing");
				});

				$('#pause9').click(function() {
					audioElement9.pause();
					$("#status").text("Status: Paused");
				});

				// --------

				//Answer checker
				var audioElementCheck1 = document.createElement('audio');
				audioElementCheck1.setAttribute('src', 'audioText/correctAnswer.mp3');

				$('#checker_correct').click(function() {
					audioElementCheck1.play();
					$("#status").text("Status: Playing");
				});

				var audioElementCheck2 = document.createElement('audio');
				audioElementCheck2.setAttribute('src', 'audioText/wrongAnswer.mp3');

				$('#checker_wrong1').click(function() {
					audioElementCheck2.play();
					$("#status").text("Status: Playing");
				});

				var audioElementCheck3 = document.createElement('audio');
				audioElementCheck3.setAttribute('src', 'audioText/wrongAnswer.mp3');

				$('#checker_wrong2').click(function() {
					audioElementCheck3.play();
					$("#status").text("Status: Playing");
				});


			});

	});

})(jQuery);
