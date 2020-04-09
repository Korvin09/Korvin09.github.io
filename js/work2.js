// Кнопка мобильного меню сворачивания

document.getElementById('button_mobile__menu').onclick = function () {
    document.getElementById('button_mobile__menu').classList.toggle('active');
    document.getElementById('block_mobile__menu').classList.toggle('active');
};


// Плавное появление линий

document.addEventListener("DOMContentLoaded", function line1() {
    setTimeout(() => document.querySelector('.line-1').classList.add('active'), 500);
});

document.addEventListener("DOMContentLoaded", function line2() {
    setTimeout(() => document.querySelector('.line-2').classList.add('active'), 750);
});

document.addEventListener("DOMContentLoaded", function line3() {
    setTimeout(() => document.querySelector('.line-3').classList.add('active'), 1000);
});

document.addEventListener("DOMContentLoaded", function line4() {
    setTimeout(() => document.querySelector('.line-4').classList.add('active'), 1250);
});

document.addEventListener("DOMContentLoaded", function line5() {
    setTimeout(() => document.querySelector('.line-5').classList.add('active'), 1500);
});


// Блок слайдер

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


