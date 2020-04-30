
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
    let selectMonthDomEl = document.getElementsByClassName('start-month')[0];
    if (selectMonthDomEl) {
        for (let i = 0; i < MONTHS.length; i++) {
            let optionEl = document.createElement("OPTION");
            let optionText = document.createTextNode(MONTHS[i]);
            optionEl.appendChild(optionText);
            selectMonthDomEl.appendChild(optionEl);
        }
    }
}

function startYearOptions() {
    let selectYearDomEl = document.getElementsByClassName('start-year')[0];
    if (selectYearDomEl) {
        let date = new Date;
        for (let i = 1900; i <= date.getFullYear(); i++) {
            let optionEl = document.createElement("OPTION");
            let optionText = document.createTextNode(i);
            optionEl.appendChild(optionText);
            selectYearDomEl.appendChild(optionEl);
        }
    }
}

function addJobs() {
    let addJobBtn = document.getElementsByClassName('add-job')[0];
    let moreJobsDiv = document.getElementsByClassName('more-jobs')[0];
    if (addJobBtn && moreJobsDiv) {
        addJobBtn.addEventListener('click', () => {
            let iDiv = document.createElement('div');
            let jobToFill = `
                <div class="input-field col s12">
                    <label for="jobTitle">Title</label>
                    <input type="text" id="jobTitle" name="jobTitle">
                </div>
            `;
            iDiv.innerHTML = jobToFill;
            moreJobsDiv.appendChild(iDiv);
        });
    }
}

setTimeout(() => {
    M.updateTextFields();
}, 100);

startMonthOptions();
startYearOptions();
addJobs();
