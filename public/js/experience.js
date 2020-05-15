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

addJobs();