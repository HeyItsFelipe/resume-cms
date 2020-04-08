
function validateInput(inputId, page) {
    let input = document.getElementById(inputId);
    if (input.value.length < 6 && input.value !== "") {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
    enableButton(page);
}

function enableButton(page) {
    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let submitBtn = document.getElementsByClassName(page + '-btn')[0];
    if (validateSubmit(name, password)) {
        submitBtn.classList.remove('disabled');
    } else {
        submitBtn.classList.add('disabled');
    }
}

function validateSubmit(name, password) {
    return name.length > 5 && password.length > 5;
}

setTimeout(() => {
    M.updateTextFields();
}, 100);