$(document).ready(function () {

    // Main slider Active // 

    $(".sliders").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true,
    });

    // Testimonial Active // 

    $(".testimonials").owlCarousel({
        'items': 3,
        'loop': true,
        'autoplay': true,
        'margin': 30,
        'center': true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            668: {
                items: 2,
                nav: false,
                center: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
                center: false
            }
        }
    });

    // Counterup active // 

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // init Isotope
    var $grid = $('.portfolio-items').isotope();
    // filter items on menu click
    $('.porfolio-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // filter menu active
    $('.porfolio-menu').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});

// Sticky navbar active // 

$(window).load(function () {
    $(this).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.header-area').addClass('sticky');
        }
        else {
            $('.header-area').removeClass('sticky');
        }
    })
})


