
$(document).ready(function() {
    /* change section display */
    $('nav a').click(function(e) {
		var activeClass = $('section.sectionShow');
		var hideClass = $($(this).attr("href"));
		$(this).parents().find('.active').removeClass('active')
		activeClass.fadeOut();
		activeClass.addClass("sectionHide");
		activeClass.removeClass("sectionShow");
		$(this).parent().addClass('active');
		hideClass.removeClass("sectionHide");
		hideClass.addClass("sectionShow");
		hideClass.fadeIn();
		
    });
});