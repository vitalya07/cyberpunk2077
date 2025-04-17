const header = document.querySelector('.header');
const main = document.querySelector('.main');
let mainOfsetPX = main.offsetHeight;
window.addEventListener('scroll', ()=> {
    if(window.scrollY > mainOfsetPX) {
        header.style.backgroundColor = 'rgba(248,242,0,.4)';
    } if(window.scrollY < mainOfsetPX) {
        header.style.backgroundColor = 'rgba(0,0,0,0)';       
    }
})
