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

addEducation();
