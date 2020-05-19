
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

function startMonthOptions() {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let selectMonthDomEl = Array.from(document.getElementsByClassName('start-month'));
    if (selectMonthDomEl) {
        selectMonthDomEl.forEach((el) => {
            for (let i = 0; i < MONTHS.length; i++) {
                let optionEl = document.createElement("OPTION");
                optionEl.setAttribute("value", MONTHS[i]);
                let optionText = document.createTextNode(MONTHS[i]);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        });
    }
}

function endMonthOptions() {
    const MONTHS = ['Present', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let selectMonthDomEl = Array.from(document.getElementsByClassName('end-month'));
    if (selectMonthDomEl) {
        selectMonthDomEl.forEach((el) => {
            for (let i = 0; i < MONTHS.length; i++) {
                let optionEl = document.createElement("OPTION");
                optionEl.setAttribute("value", MONTHS[i]);
                let optionText = document.createTextNode(MONTHS[i]);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        });
    }
}

function startYearOptions() {
    let selectYearDomEl = Array.from(document.getElementsByClassName('start-year'));
    if (selectYearDomEl) {
        let date = new Date;
        selectYearDomEl.forEach((el) => {
            for (let i = 1900; i <= date.getFullYear(); i++) {
                let optionEl = document.createElement("OPTION");
                optionEl.setAttribute("value", i);
                let optionText = document.createTextNode(i);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        });
    }
}

function endYearOptions() {
    let selectYearDomEl = Array.from(document.getElementsByClassName('end-year'));
    if (selectYearDomEl) {
        let date = new Date;
        selectYearDomEl.forEach((el) => {
            for (let i = 1900; i <= date.getFullYear(); i++) {
                let optionEl = document.createElement("OPTION");
                optionEl.setAttribute("value", i);
                let optionText = document.createTextNode(i);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        });
    }
}


setTimeout(() => {
    M.updateTextFields();
}, 100);


