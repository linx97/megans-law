$(document).ready(function(){
	$('#continue').click(function(){
		$('#modal-1').fadeOut(400, function() {
            $(this).removeClass("in");
            $('body').removeClass("modal-open");
        })
	})
	$('.terms').click(function(){
		$('#modal-2').fadeIn(400, function() {
            $(this).removeClass("hidden");
            $('body').addClass("modal-open");
        })
	})
	$('.close-2').click(function(){
		$('#modal-2').fadeOut(400, function() {
            $(this).addClass("hidden");
            $('body').removeClass("modal-open");
        })
	})

	$(".go-to-search").click(function(event) {
	    event.preventDefault();

	    $("body, html").animate({
	        scrollTop: $('.search-box').offset().top
	    }, 800);
	});	


    var frmvalidator = new Validator("search");
    frmvalidator.addValidation("zip", "req", "Please enter your 5 digit postal code.");
    frmvalidator.addValidation("zip", "numeric", "Please enter a 5 digit zip code.");
    frmvalidator.addValidation("zip", "maxlen=5");
    frmvalidator.addValidation("zip", "minlen=5");
})
