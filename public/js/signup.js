let signupBtn = document.getElementsByClassName('signup-btn')[0];

signupBtn.addEventListener('click', () => {

    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    axios.post('/signup', {
        name: name,
        password: password
    }).then((res) => {
        console.log(res);
    }).catch((err) => console.log(err));
});

