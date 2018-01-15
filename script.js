$(document).ready(function() {
    $('body').scrollspy();
    var navItems = $('.nav-item').add($('.navbar-brand'));
    navItems.on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href')).parent();
        if (target.length) {
            $('html, body').animate({
                scrollTop:target.offset().top - $('.navbar').outerHeight()
            });
            target.attr('tabindex', -1);
            target.focus();
        }
    });

    if (window.location.hash) {
        $('[href="' + location.hash + '"]').click();
    }
});
