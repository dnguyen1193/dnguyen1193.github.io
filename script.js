var onScroll = function() {
    var scrollPos = $(document).scrollTop() + $('.navbar').height();
    var navItems = $('.navbar-nav').find('a');

    navItems.each(function() {
        var currItem = $(this);
        var refElement = $(currItem.attr('href'));

        if (!refElement.length) { return; }
        if ((scrollPos <= refElement.position().top) &&
            (refElement.position().top + refElement.parent().height() <= scrollPos + window.innerHeight)) {
            // removing everything ensure you'll never have two menu items with active state, only one
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