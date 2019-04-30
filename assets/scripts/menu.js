export function menu() {
  console.log("menu...");

  let hamMenu = document.querySelector(".hamMenu");
  let hiddenMenu = document.querySelector(".hiddenMenu");
  let ulList = document.querySelector("#ulList");
  let hiddenResBtn = document.querySelector("#hiddenRes");
  let hiddenRes = document.querySelector(".hiddenReservation");
  let closeBtn = document.querySelector("#closeBtn");

  hamMenu.addEventListener("click", expandMenu);

  function expandMenu() {
    hiddenMenu.classList.toggle("toggleMenu");
    hamMenu.classList.toggle("toggleHam");
  }

  ulList.addEventListener("mouseover", reduceOpacity);

  console.log(hiddenMenu.children[0]);

  function reduceOpacity(e) {
    let li = ulList.children[0].querySelectorAll("a");

    for (let i = 0; i < li.length; i++) {
      li[i].style.opacity = 0.2;
    }
    e.target.style.opacity = 1;

    ulList.onmouseout = () => {
      for (let i = 0; i < li.length; i++) {
        li[i].style.opacity = 1;
      }
    };
  }

  hiddenResBtn.onclick = () => {
    hiddenRes.classList.add("resToggle");
  };
  closeBtn.onclick = () => {
    hiddenRes.classList.remove("resToggle");
  };
}
