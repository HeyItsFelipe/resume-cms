function addContact() {
    let contactDomEl = document.getElementById('contact');
    if (contactDomEl) {
        let contact = `
            <div class="input-field col s12">
                <input type="text" id="resumeName" name="resumeName">
                <label for="resumeName">Resume Name</label>
            </div>
            <div class="input-field col s12 m6">
                <input type="text" id="firstName" name="firstName">
                <label for="firstName">First Name</label>
            </div>
            <div class="input-field col s12 m6">
                <input type="text" id="lastName" name="lastName">
                <label for="lastName">Last Name</label>
            </div>
            <div class="input-field col s12 m6">
                <input type="email" id="email" name="email">
                <label for="email">Email</label>
            </div>
            <div class="input-field col s12 m6">
                <input type="tel" id="phone" name="phone">
                <label for="phone">Phone</label>
            </div>
            <div class="input-field col s12">
        `;
        contactDomEl.innerHTML = contact + contactDomEl.innerHTML;
    }
}

addContact();