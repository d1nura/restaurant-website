export function calender() {
  console.log("calender..");

  let date = document.querySelectorAll("#date");
  let monthName = document.querySelector("#month1");
  let year = document.querySelector("#year");

  let d = new Date();
  console.log(d.getFullYear());

  function selectMonth(getMonth) {
    let monthArr = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOMBER",
      "NOVEMBER",
      "DECEMBER"
    ];
    monthName.innerText = monthArr[getMonth];
  }
  selectMonth(d.getMonth());

  year.innerText = d.getFullYear();

  d.setDate(d.getDate() - (d.getDate() - 1));
  console.log(d.getDay());

  let oDate = new Date(d.getFullYear(), d.getMonth() + 1, 0);

  let n = oDate.getDate();
  console.log(n);

  function selectDay(getDay) {
    if (getDay == 0) return 6;
    if (getDay == 1) return 0;
    if (getDay == 2) return 1;
    if (getDay == 3) return 2;
    if (getDay == 4) return 3;
    if (getDay == 5) return 4;
    if (getDay == 6) return 5;
  }

  console.log(selectDay(d.getDay()));

  let selectedDay = selectDay(d.getDay());

  //console.log(selectedDay.parentElement);
  let j = selectedDay;

  //function genCal(noOfDays) {
  for (let i = 1; i < n + 1; i++) {
    date[j].children[0].innerText = i;
    j++;
    date[j - 1].classList.add("dateHover");
    removeBorder();
  }
  //}
  //genCal(j);
  function removeBorder() {
    for (let l = 0; l < date.length; l++) {
      if (date[l].children[0].innerText == "") {
        date[l].style.opacity = 0;
      } else {
        date[l].style.opacity = 1;
      }
    }
  }

  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");

  prev.addEventListener("click", prevMonth);
  next.addEventListener("click", nextMonth);

  let x = 0;
  let no = 1;

  function genMonth(p) {
    let oDate1 = new Date(d.getFullYear(), d.getMonth() + p + 1, 0);
    let wDay = new Date(d.getFullYear(), d.getMonth() + p, 0).getDay();
    console.log(wDay);

    for (let l = 0; l < date.length; l++) {
      date[l].children[0].innerText = " ";
    }
    for (let i = 1; i < oDate1.getDate() + 1; i++) {
      date[wDay].children[0].innerText = i;
      wDay++;
      date[wDay - 1].classList.add("dateHover");
    }
    removeBorder();
  }

  function prevMonth() {
    if (no > 0) {
      x--;
      genMonth(x);

      no = d.getMonth() + x;
      selectMonth(no);
    }
  }

  function nextMonth() {
    console.log("next..");
    if (no < 11) {
      x++;
      no = d.getMonth() + x;
      selectMonth(no);
      genMonth(x);
    }
  }
}
