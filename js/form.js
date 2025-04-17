// const forms = document.querySelectorAll('form');
// forms.forEach((form)=> {
//     bindPostData(form);
// })
// const postData = async (url, data)=> {
//     const req = await fetch(url, {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: data,
//     });
//     if(!req == ok) {
//         throw  new Error(`error in ${url}`);
//     };
//     return await req.json();
// };

// const bindPostData = (form)=> {
//     form.addEventListener('submit', (e)=> {
//         e.preventDefault();
//         const formData = new FormData(form);
//         const object = {};
//         formData.forEach((value, key)=> {
//             object[key] = value;
//         });
//         postData('php/server.php', JSON.stringify(object))
//         .then(()=> {
//             console.log('Все ок')
//         }).catch(()=> {
//             console.log('Блядь, сука, е.мать')
//         }).finally(()=> {
//             form.reset();
//         });
//     });
// };
const email = document.querySelector('#email');

email.addEventListener('input', () => {
    validateEmail();
});

function validateEmail() {
    const emailError = document.querySelector('#email-error');
    console.log(emailError)
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue == '' || !emailRegex.test(emailValue)) {
        emailError.style.display = 'block'; 
        return false;
    } else {
        emailError.style.display = 'none'; // Скрываем сообщение об ошибке
    }
}

// const email = document.querySelector('#email');

// email.addEventListener('input', ()=> {
//     validateEmail();
// });


// function validateEmail() {
//     const emailError = document.querySelector('#email-error');
//     const emailValue = email.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(emailValue === '' || !emailRegex) {
//         emailError.style.display = 'block'; 
//         return false;
//     }
// };