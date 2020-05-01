
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
                let optionText = document.createTextNode(MONTHS[i]);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        })
    }
}

function startYearOptions() {
    let selectYearDomEl = Array.from(document.getElementsByClassName('start-year'));
    if (selectYearDomEl) {
        let date = new Date;
        selectYearDomEl.forEach((el) => {
            for (let i = 1900; i <= date.getFullYear(); i++) {
                let optionEl = document.createElement("OPTION");
                let optionText = document.createTextNode(i);
                optionEl.appendChild(optionText);
                el.appendChild(optionEl);
            }
        })
    }
}

function addJobs() {
    let jobDomEl = document.getElementById('jobs');
    if (jobDomEl) {
        let jobs = '';
        for (let i = 1; i < 6; i++) {
            let job = `
                <div class="col s12"><h2>Job ${i}</h2></div>
                <div class="input-field col s12">
                    <label for="jobTitle">Title</label>
                    <input type="text" id="jobTitle" name="jobTitle">
                </div>
                <div class="input-field col s12 m6">
                    <label for="company">Company</label>
                    <input type="text" id="company" name="company">
                </div>
                <div class="input-field col s12 m6">
                    <label for="companyAddress">Company Address</label>
                    <input type="text" id="companyAddress" name="companyAddress">
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-month">
                        <option value="null-month" selected>Start Month</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-year">
                        <option value="null-year" selected>Start Year</option>
                    </select>
                </div>
                <div class="col s12" style="margin-top: 16px; margin-bottom: 16px;">
                    <hr></hr>
                </div>
            `;
            jobs += job;
        }
        let div = document.createElement('DIV');
        div.innerHTML = jobs;
        jobDomEl.prepend(div);
        startMonthOptions();
        startYearOptions();
    }
}

setTimeout(() => {
    M.updateTextFields();
}, 100);

addJobs();
