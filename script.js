var navItemClickCallback = function(e) {
    e.preventDefault();
    var target = $($(this).attr('href')).parent();
    if (target.length) {
        $('html, body').animate({
            scrollTop:target.offset().top - $('.navbar').outerHeight()
        });
        target.attr('tabindex', -1);
        target.focus();
    }
};

$(document).ready(function() {
    $('body').scrollspy({ target: '.navbar' });
    var navItems = $('.nav-item').add($('.navbar-brand'));
    navItems.on('click', navItemClickCallback);

    if (window.location.hash) {
        $('[href="' + location.hash + '"]').click();
    }
});
