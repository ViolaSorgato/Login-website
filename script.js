//Here I just get all the elements from html
const menu = document.querySelector (".menu");
let userName = document.querySelector ("#username");
let password = document.querySelector ("#password");
const logInBtn = document.querySelector ("#loginbtn");
const content = document.querySelector (".content");
const wrongLogin = document.querySelector ("#wronglogin");
const logOutBtn = document.querySelector ("#logoutbtn");
const tryAgainBtn = document.querySelector ("#tryagainbtn");
const text = document.querySelector (".menu h1");

//This is my array of users

let userArray = [
    {
        userName: "fredrik",
        rightPassword: "12345"
    },
    {
        userName: "charlie",
        rightPassword: "potato"
    }
]

localStorage.setItem ("userArray", JSON.stringify(userArray));

//Here are the buttons. All respond to "click" and lead to different functions

logInBtn.addEventListener ("click", checkInfo);
logOutBtn.addEventListener ("click", logOut);
tryAgainBtn.addEventListener ("click", tryAgain);

//And here come the functions

function init() {
    if (localStorage.getItem ("rightUser")) {
        renderSuccessfulUI()
    }
}
init()

function checkInfo() {
    for (let user of userArray) {
        console.log (user.userName);
        console.log (userName.value);
        if (user.userName == userName.value && user.rightPassword == password.value) {
            localStorage.setItem("rightUser", userName.value)
            renderSuccessfulUI();
            return
        } 
    } 
       renderFailUI();
}

function renderSuccessfulUI() {
    let userkey = localStorage.getItem("rightUser", userName.value);
    text.innerText = "Welcome" + " " + userkey + "!";
    //menu.style.display = "none";
        //rightLogin.style.display = "block";
        logOutBtn.style.display = "block";
        logInBtn.style.display = "none";
        userName.style.display = "none";
        password.style.display = "none";
}

function renderFailUI() {
    menu.style.display = "none";
        wrongLogin.style.display = "block";
        tryAgainBtn.style.display = "block";
}

function logOut() {
    menu.style.display = "block";
    logOutBtn.style.display = "none";
    text.innerHTML = "Welcome to this website.";
    userName.style.display = "block";
    password.style.display = "block";
    userName.value = "";
    password.value = "";
    logInBtn.style.display = "block";
    localStorage.removeItem("rightUser");
}

function tryAgain() {
    menu.style.display = "block";
    logInBtn.style.display = "block";
    wrongLogin.style.display = "none";
    tryAgainBtn.style.display = "none";
    userName.value = "";
    password.value = "";
}