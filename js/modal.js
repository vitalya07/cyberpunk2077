const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('[data-modal]');

function openModal() {
    modal.classList.remove('hiden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
};
function exitModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
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
})
