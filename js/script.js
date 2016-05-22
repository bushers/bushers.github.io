$(document).ready(function(){
	
	//Nav bar transition effect
	var offsetTop = $(".topnav").offset().top;

	$(document).scroll(function(){
	    if($(this).scrollTop() > offsetTop)
	    {   
	       $('.topnav').css({"background":"rgba(25,25,25,0.5)"});
	    } else {
	       $('.topnav').css({"background":"transparent"});
	    }
	});


	//Smooth scrolling effect for #links
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    	}, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


	//Click event for overlay
	function showOverlay(element, overlayEl) {

		$(element).click(function (e) {
			
			//Get current scroll position
			var position = $(document).scrollTop();
			$('#overlay').css( "top", position );

			//Show overlay
			e.preventDefault();
			$('body').css('padding-right', '17px');
			$('body').css('overflow', 'hidden');
			$('#overlay').show();
			$('#overlay').append(overlayEl);
			$(overlayEl).fadeIn('slow');
		});
	}
	showOverlay($('.contact-btn'), $('.overlay-social'));
	showOverlay($('#portfolio-images-shade-luma'), $('#overlay-shade-luma'));
	showOverlay($('#portfolio-images-kt-dance'), $('#overlay-kt-dance'));
	showOverlay($('#portfolio-images-pasma'), $('#overlay-pasma'));
	showOverlay($('#portfolio-images-omm'), $('#overlay-omm'));


	//Hide overlay
	$('#overlay').click(function() {
		$('#overlay').hide();
		$('#overlay>div').hide();
		$('body').css('padding-right', '0');
		$('body').css('overflow', 'auto');
	});

});
