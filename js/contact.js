document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const form = main.querySelector('form');
    const inputs = main.querySelectorAll('input');
    const textarea = main.querySelector('textarea');

    form.addEventListener('submit', validateForm.bind(null, form));

    inputs.forEach(input => {
        input.addEventListener('focusout', styleElementLabel.bind(null, input));
    });

    textarea.addEventListener('keydown', resizeTextarea.bind(null, textarea));
    textarea.addEventListener('focusout', styleElementLabel.bind(null, textarea));
});

const validateForm = (form) => {
    this.event.preventDefault();

    if (form.checkValidity()) {
    } else {
        [...form.elements].forEach(element => console.dir(element.validity.valid));
    }
};

const resizeTextarea = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
};


const styleElementLabel = (element) => {
    if (element.value) {
        element.labels[0].classList.add('top-positioned');
    } else if (element.labels[0].classList.contains('top-positioned')) {
        element.labels[0].classList.remove('top-positioned');
    }

    if (element.validity.valid) {
        element.classList.add('valid');

        if (element.classList.contains('invalid')) {
            element.classList.remove('invalid');
        }
    } else {
        element.classList.add('invalid');

        if (element.classList.contains('valid')) {
            element.classList.remove('valid');
        }
    }
};