const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function showLogin() {
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
}

function showRegister() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
}

function signIn() {
    // Perform sign-in logic here (e.g., check credentials and navigate to main page)
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Perform validation and authentication logic here (using local storage as a simple example)
    // Note: In a real-world application, you should use secure methods like HTTPS and backend authentication.
    const savedUser = JSON.parse(localStorage.getItem(username));
    if (savedUser && savedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    // Perform registration logic here (e.g., store credentials)
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Perform validation and registration logic here (using local storage as a simple example)
    // Note: In a real-world application, you should use secure methods like HTTPS and a backend for registration.
    const user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration successful. You can now sign in.');
    showLogin();
}
