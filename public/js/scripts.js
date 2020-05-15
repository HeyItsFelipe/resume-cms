
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

function addOrganizations() {
    let orgDomEl = document.getElementById('organizations');
    if (orgDomEl) {
        let orgs = '';
        for (let i = 1; i < 4; i++) {
            let org = `
                <div class="col s12"><h2>Organization ${i}</h2></div>
                <div class="input-field col s12">
                    <input type="text" id="orgName-${i}" name="orgName-${i}">
                    <label for="orgName-${i}">Name</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="orgLink-${i}" name="orgLink-${i}">
                    <label for="orgLink-${i}">Link</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="orgAddress-${i}" name="orgAddress-${i}">
                    <label for="orgAddress-${i}">Address</label>
                </div>
                <div class="input-field col s12">
                    <input type="text" id="title-${i}" name="title-${i}">
                    <label for="title-${i}">Title</label>
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
                    <textarea id="org-responsibilities-${i}" class="materialize-textarea"></textarea>
                    <label for="org-responsibilities-${i}">Responsibilities</label>
                </div>
                <div class="col s12" style="margin-top: 16px; margin-bottom: 16px;">
                    <hr></hr>
                </div>
            `;
            orgs += org;
        }
        orgDomEl.innerHTML = orgs + orgDomEl.innerHTML;
        startMonthOptions();
        startYearOptions();
        endMonthOptions();
        endYearOptions();
    }
}

function addProjects() {
    let projDomEl = document.getElementById('projects');
    if (projDomEl) {
        let projs = '';
        for (let i = 1; i < 4; i++) {
            let proj = `
                <div class="col s12"><h2>Project ${i}</h2></div>
                <div class="input-field col s12">
                    <input type="text" id="projName-${i}" name="projName-${i}">
                    <label for="projName-${i}">Name</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="projLink-${i}" name="projLink-${i}">
                    <label for="projLink-${i}">Link</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="projGithub-${i}" name="projGithub-${i}">
                    <label for="projGithub-${i}">GitHub</label>
                </div>
                <div class="input-field col s12 m6">
                    <input type="text" id="projImgUrl-${i}" name="projImgUrl-${i}">
                    <label for="projImgUrl-${i}">Image Url</label>
                </div>
                <div class="input-field col s12">
                    <textarea id="description-${i}" class="materialize-textarea"></textarea>
                    <label for="description-${i}">Description</label>
                </div>
                <div class="col s12" style="margin-top: 16px; margin-bottom: 16px;">
                    <hr></hr>
                </div>
            `;
            projs += proj;
        }
        projDomEl.innerHTML = projs + projDomEl.innerHTML;
        startMonthOptions();
        startYearOptions();
        endMonthOptions();
        endYearOptions();
    }
}

setTimeout(() => {
    M.updateTextFields();
}, 100);

addEducation();
addOrganizations();
addProjects();