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
