let sizeWiewport = window.matchMedia('(max-width: 767px)');

if (sizeWiewport.matches){
    new Swiper('.swiper',{
        width: 240,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        slidesPerView: 'auto',
    });
};

let buttonExpandSwiperBrend = document.querySelector('.button-expand-swiper-brend');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let buttonExpandClick;
let buttonExpandText = document.querySelector('.button-expand-swiper-brend .button-expand__text');
let buttonExpandImg = document.querySelector('.button-expand-swiper-brend .button-expand__img');

buttonExpandSwiperBrend.onclick = function(){
    buttonExpandSwiperBrend.classList.toggle('.button-expand_open');
    buttonExpandClick = buttonExpandSwiperBrend.classList.contains('.button-expand_open');
    if(buttonExpandClick){
        swiperWrapper.style.height = 'auto';
        buttonExpandText.textContent = 'Скрыть';
        buttonExpandImg.style.animationName = 'button-expand-rotate';
    }
    else{
        swiperWrapper.style.height = '160px';
        buttonExpandText.textContent = 'Показать все';
        buttonExpandImg.style.animationName = 'none';
    }
};

