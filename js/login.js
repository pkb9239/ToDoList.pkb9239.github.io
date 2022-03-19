const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting");

const Hidden_ClassName = "hidden";
const USERNAMEKEY = "username";

function login(event) {
    event.preventDefault();
    loginForm.classList.add(Hidden_ClassName);
    const name = loginInput.value;
    localStorage.setItem(USERNAMEKEY, name);
    paintGreeting(name);
}

function paintGreeting(name) {
    greeting.innerText = `사용자: ${name}님`;
    greeting.classList.remove(Hidden_ClassName);
}

const savedUserName = localStorage.getItem(USERNAMEKEY);

if (savedUserName === null) {
    loginForm.classList.remove(Hidden_ClassName);
    loginForm.addEventListener("submit", login);
} else {
    paintGreeting(savedUserName);
}
