var onScroll = function() {
    var navbarHeight = $('.navbar').height();
    var scrollPosTop = $(document).scrollTop() + navbarHeight;
    var scrollPosMid = scrollPosTop + window.innerHeight * 0.5;
    var navItems = $('.nav-item');

    navItems.each(function() {
        var currItem = $(this);
        var refElement = $(currItem.attr('href'));

        if (!refElement.length) { return; }

        var refElementPosTop = refElement.position().top;

        if (scrollPosTop > navbarHeight && scrollPosTop <= refElementPosTop
            && refElementPosTop <= scrollPosMid) {
            $('.nav-item').removeClass('active');
            currItem.addClass('active');
        } else {
            currItem.removeClass('active');
        }
    });
};

$(document).ready(function() {
    $(document).on('scroll', onScroll);
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
