
$(document).ready(function() {
    /* change section display */
    $('nav a').click(function(e) {
        var activeClass = $('nav > ul > li.active').attr("href");
		console.log(activeClass);
        var hideClass = $($(this).attr("href"));
        $(activeClass).fadeOut();
        hideClass.fadeIn();
		e.preventDefault();
    });

});

