"use strict";
$(document).ready(function () {


    /*------------ Start site menu  ------------*/

    // Start sticky header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $('#sticky-header').addClass('sticky-menu');
        } else {
            $('#sticky-header').removeClass('sticky-menu');
        }
    });

    // slicknav
    $('ul#menu').slicknav({
        prependTo: ".responsive-menu"
    });

    $('.counter').counterUp();

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
    })


});