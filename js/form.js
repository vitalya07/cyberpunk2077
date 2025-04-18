const forms = document.querySelectorAll('form');
const email = document.querySelector('#email');
const nam = document.querySelector('#name');
const fileInput = document.querySelector('#file');
forms.forEach((form)=> {
    bindPostData(form);
});
const popup = document.querySelector('.popup');
const postData = async (url, data)=> {
    const req = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: data,
    });
    if (!req.ok) {
        throw new Error(`error in ${url}`);
    };
    return await req.json();
};

function bindPostData(form) {
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValide = validateEmail();
        const isFileValidate = valideFile();

        if(!isNameValid || !isEmailValide || !isFileValidate) {
            return
        }

        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key)=> {
            object[key] = value;
        });
        postData('php/server.php', JSON.stringify(object))
        .then(()=> {
            popup.style.display = 'block';
            popup.innerHTML = `
                <div class="popup__dialog">
                    <div class="popup__content">
                        <div class="popup__content-head">
                            <h2 class="popup__content-title">Спасибо, мы свяжемся с вами!</h2>
                            <div class="popup__content-close"></div>
                        </div>
                    </div>
                </div>
            `;
            setTimeout(()=> {
                popup.style.display = 'none'
            }, 2000)
        }).catch(()=> {
            popup.style.display = 'block';
            popup.innerHTML = `
            <div class="popup__dialog">
                <div class="popup__content">
                    <div class="popup__content-head">
                        <h2 class="popup__content-title">Произошла ошибка!</h2>
                        <div class="popup__content-close"></div>
                    </div>
                </div>
            </div>
        `;;
            setTimeout(()=> {
                popup.style.display = 'none'
            }, 2000)
        }).finally(()=> {
            form.reset();
        });
    });
};

function validateEmail() {
    const emailError = document.querySelector('#email-error');
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue == '' || !emailRegex.test(emailValue)) {
        emailError.style.display = 'block'; 
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}
function validateName() {
    const nameError = document.querySelector('#name-error');
    const nameValue = nam.value;

    if (nameValue === '' || nameValue.length < 2 || /\d/.test(nameValue)) {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}
function valideFile() {
    const fileError = document.querySelector('#file-error');
    const file = fileInput.files[0];
    if(!file) {
        fileError.textContent = 'Пожалуйста, прикрепите файл'
        fileError.style.display = 'block';
        return false;
    }

    const validExtensions = ['.png', '.jpg', '.jpeg', '.pdf'];
    const fileExtension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
    if (!validExtensions.includes('.' + fileExtension)) {
        fileError.textContent = 'Неверный формат файла. Пожалуйста, выберите файл в формате .png, .jpg или .pdf.';
        fileError.style.display = 'block';
        return false;
    }
    return true;
}