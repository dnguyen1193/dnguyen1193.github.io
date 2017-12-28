var onScroll = function() {
    var scrollPos = $(document).scrollTop() + $('.navbar').height();
    var navItems = $('.navbar-nav').find('a');

    navItems.each(function() {
        var currItem = $(this);
        var refElement = $(currItem.attr('href'));
        if (!refElement.length) { return; }
        if (refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.parent().height() > scrollPos) {
            $('.navbar-nav a').removeClass('active');
            currItem.addClass('active');
        }
    })



};

$(document).ready(function() {
    $(document).on('scroll', onScroll);
});