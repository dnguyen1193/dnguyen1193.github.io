var onScroll = function() {
    var navbarHeight = $('.navbar').height();
    var scrollPosTop = $(document).scrollTop() + navbarHeight;
    var scrollPosMid = scrollPosTop + window.innerHeight * 0.5;
    var navItems = $('.navbar-nav').find('a');

    navItems.each(function() {
        var currItem = $(this);
        var refElement = $(currItem.attr('href'));

        if (!refElement.length) { return; }

        var refElementPosTop = refElement.position().top;

        if (scrollPosTop > navbarHeight && scrollPosTop <= refElementPosTop
            && refElementPosTop <= scrollPosMid) {
            $('.navbar-nav a').removeClass('active');
            currItem.addClass('active');
        } else {
            currItem.removeClass('active');
        }
    });
};

$(document).ready(function() {
    $(document).on('scroll', onScroll);
    var navItems = $('.navbar-nav').find('a');
    navItems.on('click', function(e) {
        var href = $(this).attr('href');
        console.log(href);
    });
});
