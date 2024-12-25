const hamOpen = document.getElementById("hamburger_open");
const hamClose = document.getElementById("hamburger_close");
const hamMenu = document.getElementById("hamburger_menu");

// hamOpen.addEventListener("click", event => {
//   hamMenu.style.display = "flex";
// })

// hamClose.addEventListener("click", event => {
//   hamMenu.style.display = "none";
// })

function openHam () {
  hamMenu.style.display = "flex";
}

function closeHam() {
  hamMenu.style.display = "none";
}


document.addEventListener("click", event => {
  if (!hamMenu.contains(event.target) && event.target !== hamOpen) {
    hamMenu.style.display = "none";
  }
})


const logClose = document.querySelector('.login_close_icon');
const realLogin = document.querySelector('.real-login');
const realSignup = document.querySelector('.real-signup');
const hamLogin = document.querySelector('.ham-login');
const hamSignup = document.querySelector('.ham-signup');
const formLogin = document.querySelector('.signup-login');
const formSignup = document.querySelector('.login-signup');
const loginPage = document.querySelector('.log');
const loginBody = document.querySelector('.login_main');
const signupBody = document.querySelector('.signup_main');


logClose.onclick = function () {
  loginPage.style.display = 'none';
}

realLogin.onclick = function () {
  loginPage.style.display = 'flex';
}

realSignup.onclick = function () {
  if(loginPage.style.display = 'flex'){
    loginBody.style.display = 'none';
    signupBody.style.display = 'flex';
  }
}

hamLogin.onclick = function () {
  loginPage.style.display = 'flex';
}

hamSignup.onclick = function () {
  if(loginPage.style.display = 'flex'){
    loginBody.style.display = 'none';
    signupBody.style.display = 'flex';
  }
}

formSignup.onclick = function () {
  if(loginPage.style.display = 'flex'){
    loginBody.style.display = 'none';
    signupBody.style.display = 'flex';
  }
  else{
    loginBody.style.display = 'none';
  }
}

formLogin.onclick = function () {
  if(loginPage.style.display = 'flex'){
    loginBody.style.display = 'flex';
    signupBody.style.display = 'none';
  }
  else{
    signupBody.style.display = 'none';
  }
}

