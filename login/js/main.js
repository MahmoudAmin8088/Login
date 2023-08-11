var emailLogin = document.getElementById('emailLogin');
var emailSignUp = document.getElementById('emailSignUp');
var Name = document.getElementById('name');
var passwordLogin = document.getElementById('passwordLogin');
var passwordSignUp = document.getElementById('passwordSignUp');
var error = document.getElementById('error');
var loginBtn = document.getElementById('loginBtn');
var regBtn = document.getElementById('regBtn');
var logOutBtn = document.getElementById('logOutBtn');
var welcome = document.getElementById('welcome');
var signInLink = document.getElementById('signInLink');
var signUpLink = document.getElementById('signUpLink');


var users = [];


(function () {
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'));
    }

})();



if (window.location.href.endsWith("/")) {
    loginBtn.addEventListener('click', function () {
        for (var i = 0; i < users.length; i++) {
            console.log('click');
            if ((emailLogin.value).toLowerCase() == users[i].email && passwordLogin.value == users[i].password) {
                localStorage.setItem('weluser' , users[i].name);
                location.href =('/home.html')
            }
            else {
                error.innerHTML = 'email or password is not correct.';
            }
        }
        
    });
}


if (window.location.href.endsWith("/home.html")){
    var welcomeUser = localStorage.getItem('weluser');
    welcome.innerHTML="Welcome "+ welcomeUser;
}


if (window.location.href.endsWith("/")) {

    signUpLink.addEventListener('click', function () {
        console.log('click');
        window.location.href = ('/signUp.html');

    });

}
if (window.location.href.endsWith("/signUp.html")) {

    signInLink.addEventListener('click', function () {


        window.location.href = ( '/' );

    });
}


if (window.location.href.endsWith("/signUp.html")) {
    regBtn.addEventListener('click', function () {

        if (validateName() == true && validateEmail() == true && validatePassword() == true) {
            if (checkEmail()) {
                error.innerHTML = 'Email is Already Exists.'
            }
            else {
                var user =
                {
                    name: Name.value,
                    email: (emailSignUp.value).toLowerCase(),
                    password: passwordSignUp.value
                }

                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                console.log(users);
                error.innerHTML = ''
                window.location.href = ('/');
            }

        }
        else {
            
            error.innerHTML = 'Name or Email or Password Not Valid';
        }




    });
}

if (window.location.href.endsWith('/home.html')) {
    logOutBtn.addEventListener('click', function () {
        localStorage.removeItem('weluser');
        window.location.href= ( '/');
    });
}

function checkEmail() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == (emailSignUp.value).toLowerCase()) {
            return true

        }

    }
    return false
}

function validateName() {
    var regex = /^[\w]{3,} ?[\w]{3,}?$/;
    return regex.test(Name.value);

}
function validateEmail() {
    var regex = /^[\w]{3,}\@[\w]{4,}\.(com)$/;
    return regex.test(emailSignUp.value)

}
function validatePassword() {
    var regex = /^[\w]{3,}$/;
    return regex.test(passwordSignUp.value)

}

