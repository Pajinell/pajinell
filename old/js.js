function lightMode() {
  document.body.className = "light-mode";
}

function darkMode() {
  document.body.className = "dark-mode";
}

document.getElementById("year").innerHTML = new Date().getFullYear();
