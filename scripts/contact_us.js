$('.document').ready(() => {
    const date = new Date();

    $('#today-date').text(date.getFullYear());
    /* year copy end */
    
    /*  Top Scroll Detection */
    const mainNav = document.querySelector('.main-nav');
    const brandLogo = document.getElementById('brand-logo');
    let changingSection = document.getElementById('info-section');

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
})

