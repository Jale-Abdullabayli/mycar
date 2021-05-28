$('.language').hover(function () {
    $(this).toggleClass('open');
})


$('.bell').hover(function () {
    $(this).addClass('showNotification');
})




$(window).scroll(function (event) {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    var car = $('.callToAction').offset().top;
    var start = car - windowHeight;
    var carHeight = $('.callToAction').height();
    if (scroll >= start + carHeight) {
        var carLeft = -60;
        var carBottom = -40;
        var rotate = 350;
        var step = (scroll - start - carHeight) * 0.4;
        carLeft += step;
        carBottom += step;
        rotate -= step * 0.13;
        if (carLeft < 108) {
            $('.car1').css("left", `${carLeft}px`).css("bottom", `${carBottom}px`);
            $('.car1').css('transform', `rotateZ(${rotate}deg)`);
        }

    }
});