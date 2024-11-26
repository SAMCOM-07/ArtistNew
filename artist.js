const hamOpen = document.getElementById("hamburger_open");
const hamClose = document.getElementById("hamburger_close");
const hamMenu = document.getElementById("hamburger_menu");

// hamOpen.addEventListener("click", event => {
//   hamMenu.style.display = "flex";
// })

function openHam () {
  hamMenu.style.display = "flex";
}

function closeHam() {
  hamMenu.style.display = "none";
}