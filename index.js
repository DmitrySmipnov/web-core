let sizeWiewport = window.matchMedia('(max-width: 767px)');

if (sizeWiewport.matches){
    new Swiper('.swiper',{
        width: 240,

        // spaceBetween: 16,

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

buttonExpandSwiperBrend.onclick = function(){
    buttonExpandSwiperBrend.classList.toggle('.button-expand_open');
    buttonExpandClick = buttonExpandSwiperBrend.classList.contains('.button-expand_open');
    // console.log(buttonExpandClick);
    if(buttonExpandClick){
        swiperWrapper.style.height = 'auto';
        buttonExpandSwiperBrend.textContent = 'Скрыть';
    }
    else{
        swiperWrapper.style.height = '160px';
        buttonExpandSwiperBrend.textContent = 'Показать все';
    }
};

