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
	$(".contact-btn").click(function (e) {
		
		//Get current scroll position
		var position = $(document).scrollTop();
		$('#contact-overlay').css( "top", position );

		//Show overlay
		e.preventDefault();
		$('body').css('padding-right', '17px');
		$('body').css('overflow', 'hidden');
		$('#contact-overlay').show();
		$('.overlay-social').fadeIn('5000');
	});

	//Hide overlay
	$('#contact-overlay').click(function() {
		$('#contact-overlay').hide();
		$('.overlay-social').hide();
		$('body').css('padding-right', '0');
		$('body').css('overflow', 'auto');
	});

});
