const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('[data-modal]');
let isModalOpen = false;

function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
};
function exitModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
};

function checkScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    if(scrollPosition >= documentHeight) {
        openModal();   
        if (openModal()) {
            window.removeEventListener('scroll', checkScroll);
        }    
    }  
};


modalBtn.forEach(btn=> {
    btn.addEventListener('click', openModal);
});
modal.addEventListener('click', (e)=> {
    if(e.target == modal || e.target.classList.contains('modal__close')) {
        exitModal();
    }
});
window.addEventListener('keydown', (e)=> {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
        exitModal();
    }
});
window.addEventListener('scroll', ()=> {
    checkScroll()     
})

