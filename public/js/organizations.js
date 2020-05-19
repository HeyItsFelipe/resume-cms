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

addOrganizations();