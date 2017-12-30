var onScroll = function() {
    var navbarHeight = $('.navbar').height();
    var scrollPosTop = $(document).scrollTop() + navbarHeight;
    var scrollPosEnd = scrollPosTop + window.innerHeight;
    var navItems = $('.navbar-nav').find('a');

    navItems.each(function() {
        var currItem = $(this);
        var refElement = $(currItem.attr('href'));

        if (!refElement.length) { return; }

        var refElementPosTop = refElement.position().top;
        var refElementHeight = refElement.parent().height();
        var refElementPosBottom = refElementPosTop + refElementHeight;
        // minimum amount of the section that needs to be displayed for a
        // navbar to be considered "active"
        var refElementMin = refElementPosTop + refElementHeight * 0.75;

        if ((scrollPosTop > navbarHeight && scrollPosTop <= refElementPosTop
             && refElementMin <= scrollPosEnd) ||
            (refElementPosTop <= scrollPosTop
                && refElementPosBottom <= scrollPosEnd)) {
            $('.navbar-nav a').removeClass('active');
            currItem.addClass('active');
        } else {
            currItem.removeClass('active');
        }
    });
};

$(document).ready(function() {
    $(document).on('scroll', onScroll);
});