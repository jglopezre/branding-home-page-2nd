$(document).ready(() => {
    /* year copy */
    const date = new Date();

    $('#today-date').text(date.getFullYear());
    /* year copy end */
    
    /*  Top Scroll Detection */
    const mainNav = document.querySelector('.main-nav');
    const brandLogo = document.getElementById('brand-logo');
    let changingSection = document.getElementById('best-sellers');

    window.onscroll = function() {
        if(window.pageYOffset >= changingSection.offsetTop) {
            mainNav.style.backgroundColor = "var(--color-05)";
            mainNav.style.boxShadow = "0 5px 3px var(--shadow-color-02)"
            mainNav.style.height = "64px"
            brandLogo.style.transform = 'scale(0.4)'
        } else {
            mainNav.style.backgroundColor = "transparent";
            mainNav.style.boxShadow = "none"
            brandLogo.style.transform = 'scale(1)';
            mainNav.style.height = "180px"

        }
    }
    /*  Top Scroll Detection  End*/
    const testimonialText01 = "The products in this store are the best on the market with tremendous quality that help me feel fresh every time I play sports, I don't have to worry about the material or anything else, they are 100% original products and made of the best materials, I recommend them";
    const testimonialText02 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis tempore numquam cum saepe sapiente rerum accusantium deserunt incidunt in dignissimos esse ducimus voluptatem adipisci quia cupiditate, quas laudantium, alias aspernatur amet iste quidem facilis. Amet, vitae veritatis? Reprehenderit maiores explicabo eos, ipsam amet repellendus perspiciatis debitis quam ex nihil sequi?";
    const testimonialText03 = "Quidem explicabo omnis, autem doloribus, excepturi ratione non beatae culpa similique perferendis provident, aperiam hic assumenda? Vero temporibus dolores, velit illum ipsum est quam soluta tenetur exercitationem saepe ex, laborum aperiam magnam dolorem quo accusantium minima reiciendis placeat itaque in ratione totam dolorum. Quam similique neque voluptatibus animi eaque omnis, aliquid doloribus eveniet fugiat laboriosam hic!";

    const changeText = (event) => {
        console.log(event.item.index);
        switch (event.item.index) {
            case 2: 
                $('.testimonial-text').text(testimonialText01);
                break;

            case 3:
                $('.testimonial-text').text(testimonialText02);
                break;

            case 4:
                $('.testimonial-text').text(testimonialText03);
                break;
        }
    }


    $('.best-seller-carousel').owlCarousel({
        loop:true,
        center: true,
        nav: false,
        dots: false,
        margin:40,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:2,
            },
            1200:{
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
        onTranslate: changeText,
        onInitialized: changeText,
        navText:['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>']
    })

    
})

