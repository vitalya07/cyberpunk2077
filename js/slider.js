document.addEventListener('DOMContentLoaded', ()=> {
    const swiper = new Swiper('.main__swiper', {
        direction: 'horizontal',
        loop: true,    
        autoplay: {
            delay: 10000,
        },
        speed: 3000,
    });
})