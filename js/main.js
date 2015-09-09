
$('document').ready(function() {
    var navItems = $('nav').find('a');
    var sectionList = document.getElementById('content').children;

    /* change section display */
    $('nav a').click(function(e) {
        var activeClass = $('section.active');
        var hideClass = $($(this).attr("href"));
        activeClass.fadeOut();
        activeClass.removeClass("active");
        activeClass.addClass("sectionHide");
        hideClass.fadeIn();
        hideClass.removeClass("sectionHide");
        hideClass.addClass("active");
    });

});

