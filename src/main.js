// main.js или любой другой .js файл
import $ from 'jquery';
import "slick-carousel";

// burger menu

const header = document.querySelector('.header')
const burgerBtn = document.querySelector(".header-wrapper__burger");
const burgerTxt = document.querySelector(".header-wrapper__text");
const logo = document.querySelector('.header-wrapper__logo');
const navContent = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector('.mobile-menu__list');
const menuItem = mobileMenu.querySelectorAll('.mobile-menu__item');
const body = document.body;

burgerBtn.addEventListener("click", () => {
    header.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    burgerTxt.classList.toggle('active')
    navContent.classList.toggle('active');
    logo.classList.toggle('active');
    body.classList.toggle('lock');
});

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        header.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        navContent.classList.toggle('active');
        body.classList.toggle('lock');
    });
})

// carousel
$('.hero-section__carousel').slick({
    slidesToShow: 1,
    arrows: true,    
    dots: false,      
    infinite: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: 'unslick',
        },
    ],
});