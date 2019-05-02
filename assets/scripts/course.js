export let c = document.querySelectorAll(".c");

export function course() {
  console.log("course..");
  let btnSet = document.querySelector("#btnSet");
  if (btnSet) {
    btnSet.children[0].style.background = "#dce4e7";

    function trans(val, e) {
      for (let i = 0; i < btnSet.children.length; i++) {
        c[i].style.transform = `translateX(-${val}%)`;
        btnSet.children[i].style.background = "#d4ddda";
      }
      e.target.closest("button").style.background = "#dce4e7";
    }

    btnSet.children[0].onclick = e => trans(0, e);
    btnSet.children[1].onclick = e => trans(100, e);
    btnSet.children[2].onclick = e => trans(200, e);
  }
}
