new WOW().init();
const actionImg = document.querySelector('.action__top-img');

const imgAmimation = actionImg.animate([
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(360deg)'},
], {
    duration: 8000,
    iterations: Infinity
});