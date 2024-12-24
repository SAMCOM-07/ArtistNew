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
