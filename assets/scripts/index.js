console.log("pug...");

import { menu } from "./menu.js";

menu();

function scroll() {
  window.addEventListener("scroll", catchScroll);

  function catchScroll() {
    let menu = document.querySelector(".menu");
    let mainNav = document.querySelector("#mainNav");
    let img = mainNav.querySelector("img");

    console.log(menu.getBoundingClientRect().top);

    if (menu.getBoundingClientRect().top <= 70) {
      mainNav.style.background = "black";
      img.style.transform = "scale(1)";
    }
    if (menu.getBoundingClientRect().top >= 70) {
      mainNav.style.background = "none";
      img.style.transform = "scale(0)";
    }
  }
}

function addPics() {
  let picArr = ["wall10.jpg", "wall4.jpg", "wall13.jpg"];

  let menuPic = document.querySelectorAll("#menuPic");
  for (let i = 0; i < menuPic.length; i++) {
    menuPic[i].style.background = `url("pics/${picArr[i]}")`;
    //menuPic[i].style.backgroundAttachment = "fixed";
    menuPic[i].style.backgroundSize = "cover";
    menuPic[i].style.backgroundRepeat = "no-repeat";
    menuPic[i].style.backgroundPosition = "center";
  }
}

addPics();
scroll();
