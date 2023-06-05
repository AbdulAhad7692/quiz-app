
alert('username : user  \nPassword : 1234')

localStorage.setItem('username', 'user')
localStorage.setItem('pass', '1234')

let userName;
let userPassword;
let name = localStorage.getItem('username');
let password = localStorage.getItem('pass')


function login() {
    userName = document.getElementById('getUsername').value;
    userPassword = document.getElementById('getUserPass').value;

    if (userName == name && userPassword == password) {
        window.location.href = "home.html"
    } else {
        alert("Enter Coreect name and Password \nhint :\nusername : user  \nPassword : 1234 ")
    }
}
