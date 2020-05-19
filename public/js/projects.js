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

addProjects();