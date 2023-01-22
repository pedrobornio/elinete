const menuBar = document.getElementById("MenuIcon");
const maskMenu = document.getElementById("maskMenuId");
const menuBoxLeft = document.getElementById("menuBoxLeftId");
const favoritoBoxLeadId = document.getElementById("favoritoBoxLeadId");

menuBar.addEventListener("click", function () {
  maskMenu.style.visibility = "visible";
  menuBoxLeft.style.visibility = "visible";
  maskMenu.classList.add("maskMenuBg");
  menuBoxLeft.classList.add("menuBoxLeftDisplay");
});

function hideMask() {
  maskMenu.style.visibility = "hidden";
  menuBoxLeft.style.visibility = "hidden";
  favoritoBoxLeadId.style.visibility = "hidden";
  maskMenu.classList.remove("maskMenuBg");
  menuBoxLeft.classList.remove("menuBoxLeftDisplay");
}

