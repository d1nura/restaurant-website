console.log("pug...");

import { menu } from "./menu.js";

menu();

function scroll() {
  window.addEventListener("scroll", catchScroll);

  function catchScroll() {
    let menu = document.querySelector(".menu");
    let mainNav = document.querySelector("#mainNav");

    if (menu.getBoundingClientRect().top <= 0) {
      mainNav.style.background = "black";
    }
    if (menu.getBoundingClientRect().top > 0) {
      mainNav.style.background = "none";
    }
  }
}

function addPics() {
  let picArr = ["wall3.jpg", "wall4.jpg", "wall5.jpg"];

  let menuPic = document.querySelectorAll("#menuPic");
  for (let i = 0; i < menuPic.length; i++) {
    menuPic[i].style.background = `url("pics/${picArr[i]}")`;
    menuPic[i].style.backgroundSize = "cover";
    menuPic[i].style.backgroundPosition = "center";
  }
}

addPics();
scroll();
