// let abrirMenu1 = document.querySelector(".menu1");
// let abrirMenu2 = document.querySelector(".menu2");
// let menu1 = document.querySelector(".links1");
// let menu2 = document.querySelector(".links2");
// let estado = "close";

// abrirMenu1.addEventListener("click", function () {
//   if (estado == "close") {
//     menu1.style.display = "block";
//     estado = "open";
//   } else {
//     menu1.style.display = "none";
//     estado = "close";
//   }

// });
// abrirMenu2.addEventListener("click", function () {
//   if (estado == "close") {
//     menu2.style.display = "block";
//     estado = "open";
//   } else {
//     menu2.style.display = "none";
//     estado = "close";
//   }
// });
let abrirMenuMovil = document.querySelectorAll(".cabeza_menu_movil");
let links = document.querySelector(".cabeza_menu");
let efectoBefore = document.body;
let estado2 = false;

for (let p = 0; p < abrirMenuMovil.length; p++) {
  abrirMenuMovil[p].addEventListener("click", function () {
    if (estado2 == false) {
      links.classList.add("efecto_menu_mobile");
      efectoBefore.classList.add("efecto_body");
      estado2 = true;
    } else {
      links.classList.remove("efecto_menu_mobile");
      efectoBefore.classList.remove("efecto_body");
      estado2 = false;
    }
  });
}

function toggleMenu(menu, flecha) {
  if (menu.style.display !== "flex") {
    menu.style.display = "flex";
    flecha.classList.add("efectoFlecha");
  } else {
    menu.style.display = "none";
    flecha.classList.remove("efectoFlecha");
  }
}
function closeOtherMenus(currentMenu, currentFlecha) {
  const menus = document.querySelectorAll(".links");
  const flechas = document.querySelectorAll(".flechas");
  for (let i = 0; i < menus.length; i++) {
    if (menus[i] !== currentMenu && menus[i].style.display == "flex") {
      menus[i].style.display = "none";
      flechas[i].classList.remove("efectoFlecha", flechas[i] == this);
    }
  }
}
// menus.forEach((menu) => {
//   if (menu !== currentMenu && menu.style.display == "block") {
//     menu.style.display = "none";
//   }
// });

let menus = document.querySelectorAll(".menu");
let flecha = document.querySelectorAll(".flechas");

let estado = "close";

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function () {
    if (estado == "close") {
      closeOtherMenus(menus[i].nextElementSibling);
      toggleMenu(menus[i].nextElementSibling, flecha[i]);
    }
  });
}
