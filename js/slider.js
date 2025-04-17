document.addEventListener('DOMContentLoaded', ()=> {
    const swiper = new Swiper('.main__swiper', {
        direction: 'horizontal',
        loop: true,    
        autoplay: {
            delay: 3000,
        },
        speed: 2000,
    });
})