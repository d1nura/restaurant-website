console.log("pug...");

import { menu } from "./menu.js";
import { calender } from "./calender.js";

menu();
calender();

function scroll() {
  window.addEventListener("scroll", catchScroll);

  function catchScroll() {
    let menu = document.querySelector(".menu");
    let mainNav = document.querySelector("#mainNav");
    let img = mainNav.querySelector("img");

    //console.log(menu.getBoundingClientRect().top);

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

  let imgArr = [
    "wall2.jpg",
    "wall3.jpg",
    "wall5.jpg",
    "wall9.jpg",
    "wall10.jpg"
  ];

  let story = document.querySelectorAll(".story");

  for (let i = 0; i < story.length; i++) {
    story[i].style.background = `url("pics/${imgArr[i]}")`;
    //story[i].style.backgroundAttachment = "fixed";
    story[i].style.backgroundSize = "cover";
    story[i].style.backgroundRepeat = "no-repeat";
    story[i].style.backgroundPosition = "center";
  }
}

addPics();
scroll();
