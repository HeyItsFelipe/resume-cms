
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
    console.log(selectYearDomEl);
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

function addJobs() {
    let jobDomEl = document.getElementById('jobs');
    if (jobDomEl) {
        let jobs = '';
        for (let i = 1; i < 6; i++) {
            let job = `
                <div class="col s12"><h2>Job ${i}</h2></div>
                <div class="input-field col s12">
                    <input type="text" id="jobTitle-${i}" name="jobTitle-${i}">
                    <label for="jobTitle-${i}">Title</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="company-${i}" name="company-${i}">
                    <label for="company-${i}">Company</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="companyAddress-${i}" name="companyAddress-${i}">
                    <label for="companyAddress-${i}">Company Address</label>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-month start-month-${i}">
                        <option value="null" selected>Start Month</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-year start-year-${i}">
                        <option value="null" selected>Start Year</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default end-month end-month-${i}">
                        <option value="null" selected>End Month</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default end-year end-year-${i}">
                        <option value="null" selected>End Year</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div class="input-field col s12">
                    <textarea id="job-responsibilities-${i}" class="materialize-textarea"></textarea>
                    <label for="job-responsibilties-${i}">Responsibilities</label>
                </div>
                <div class="col s12" style="margin-top: 16px; margin-bottom: 16px;">
                    <hr></hr>
                </div>
            `;
            jobs += job;
        }
        jobDomEl.innerHTML = jobs + jobDomEl.innerHTML;
        startMonthOptions();
        startYearOptions();
        endMonthOptions();
        endYearOptions();
    }
}

function addEducation() {
    let eduDomEl = document.getElementById('education');
    if (eduDomEl) {
        let educations = '';
        for (let i = 1; i < 4; i++) {
            let education = `
                <div class="col s12"><h2>School ${i}</h2></div>
                <div class="input-field col s12 m6">
                    <input type="text" id="school-${i}" name="school-${i}">
                    <label for="school-${i}">School</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="schoolAddress-${i}" name="schoolAddress-${i}">
                    <label for="schoolAddress-${i}">School Address</label>
                </div>
                <div class="input-field col s12">
                    <input type="text" id="cert-${i}" name="cert-${i}">
                    <label for="cert-${i}">Certificate</label>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-month start-month-${i}">
                        <option value="null" selected>Start Month</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default start-year start-year-${i}">
                        <option value="null" selected>Start Year</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default end-month end-month-${i}">
                        <option value="null" selected>End Month</option>
                    </select>
                </div>
                <div class="input-field col s12 m6">
                    <select class="browser-default end-year end-year-${i}">
                        <option value="null" selected>End Year</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div class="col s12" style="margin-top: 16px; margin-bottom: 16px;">
                    <hr></hr>
                </div>
            `;
            educations += education;
        }
        eduDomEl.innerHTML = educations + eduDomEl.innerHTML;
        startMonthOptions();
        startYearOptions();
        endMonthOptions();
        endYearOptions();
    }
}

setTimeout(() => {
    M.updateTextFields();
}, 100);

addJobs();
addEducation();
