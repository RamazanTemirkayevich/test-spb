// main.js или любой другой .js файл
import $ from 'jquery';
import "slick-carousel";

$('.hero-section__carousel').slick({
    slidesToShow: 1,
    arrows: true,    
    dots: false,      
    infinite: true,
});