$('.best-seller-carousel').owlCarousel({
    loop:true,
    center: true,
    nav: false,
    dots: false,
    margin:40,
    responsiveClass:true,
    responsiveBaseElement: '.best-seller-carousel-wrapper',

    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('.testimonial-carousel').owlCarousel({
    loop: true,
    center: true,
    nav: true,
    dots: false,
    margin: 50,
    items: 1,
    navText:['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>']
})