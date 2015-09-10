
$(document).ready(function() {
    /* change section display */
    $('nav a').click(function(e) {
        var activeClass = $('section.sectionShow');
        var hideClass = $($(this).attr("href"));
		$(this).removeClass("active");
        activeClass.fadeOut();
		activeClass.addClass("sectionHide");
        activeClass.removeClass("sectionShow");
        
        hideClass.fadeIn();
        hideClass.removeClass("sectionHide");
        hideClass.addClass("sectionShow");
    });

});

