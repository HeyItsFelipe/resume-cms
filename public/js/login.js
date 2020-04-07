let loginBtn = document.getElementsByClassName('login-btn')[0];

loginBtn.addEventListener('click', () => {

    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (validateSubmit(name, password)) {
        axios.post('/login', {
            name: name,
            password: password
        }).then((res) => {
            console.log(res);
        }).catch((err) => console.log(err));
    }

});