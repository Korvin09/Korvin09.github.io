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


// Появление кнопки наверх при  скроле на 262 пикселя

window.addEventListener('scroll', function () {
    if (pageYOffset > 262) {
        document.querySelector('.to__top').style.opacity = "1";
    } else {
        document.querySelector('.to__top').style.opacity = "";
    }
});

document.querySelector(".to__top").addEventListener("click", function () {
    scrollTo(0,0);
});


// Функция валидации

function validate() {
    let userName = document.getElementById("in_name");
    let userMail = document.getElementById("in_email");

    if (!userName.value) {
        userName.style.borderBottom = "1px solid red";
        document.getElementById("in_name_error").style.display = "block";
        return false;
    } else {
        userName.style.borderBottom = "1px solid green";
        document.getElementById("in_name_error").style.display = "none";
    }

    if (!userMail.value) {
        userMail.style.borderBottom = "1px solid red";
        document.getElementById("in_email_error").style.display = "block";
        return false;
    } else {
        userMail.style.borderBottom = "1px solid green";
        document.getElementById("in_email_error").style.display = "none";
        window.location.href = 'success.html';
    }
    return false;
};


// Добавление куки с сроком хранения

document.cookie = "name=1; max-age=60; path=/";


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
            items:2
        },
        1000:{
            items:3
        }
    }
})


