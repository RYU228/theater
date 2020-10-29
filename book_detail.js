const dateUl = document.querySelector(".date_ul");
const theaterInfo = document.querySelector(".theater_info");
let choosenDate;
/* theater_area */
const seoul = [];
const gyunggi = [];
const chung = [];
const jeon = [];
const deagu = [];
const busan = [];
const gang = [];
const jeju = [];
const areaLi = document.getElementsByClassName("area_li");
const locationUl = document.querySelector(".location_ul");
let selectedDate;
let bookedLocation;
let choosenArea;
let choosenLocation;

function initLocation(location, text, n) {
  const loop = location.length + n;
  for (let i = location.length; i < loop; i++) {
    location[i] = text + (i + 1);
  }
}

function handleDateClick(event) {
  const li = event.target;

  li.classList.toggle("dateChoice");

  if (choosenDate != null) {
    choosenDate.classList.remove("dateChoice");
  }

  choosenDate = li;

  selectedDate = li.innerText;
}

function loadDate() {
  const day = new Date();
  for (let i = 0; i < 9; i++) {
    const li = document.createElement("li");
    const liClass = `date_li${i + 1}`;
    li.classList.add(liClass);
    li.innerText = day.getDate() + i;
    li.addEventListener("click", handleDateClick);
    dateUl.appendChild(li);
  }
}

function handleArea(event) {
  event.target.classList.toggle("area_click");
  if (choosenArea != null) {
    choosenArea.classList.remove("area_click");
  }
  choosenArea = event.target;

  theaterInfo.style.backgroundColor = "#c7c7c7";

  switch (event.target.getAttribute("value")) {
    case "seoul":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < seoul.length; i++) {
        const li = document.createElement("li");
        li.innerText = seoul[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }

      break;
    case "gyunggi":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < gyunggi.length; i++) {
        const li = document.createElement("li");
        li.innerText = gyunggi[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "chung":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < chung.length; i++) {
        const li = document.createElement("li");
        li.innerText = chung[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "jeon":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < jeon.length; i++) {
        const li = document.createElement("li");
        li.innerText = jeon[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "deagu":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < deagu.length; i++) {
        const li = document.createElement("li");
        li.innerText = deagu[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "busan":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < busan.length; i++) {
        const li = document.createElement("li");
        li.innerText = busan[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "gang":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < gang.length; i++) {
        const li = document.createElement("li");
        li.innerText = gang[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    case "jeju":
      while (locationUl.firstChild) {
        locationUl.removeChild(locationUl.firstChild);
      }
      for (let i = 0; i < jeju.length; i++) {
        const li = document.createElement("li");
        li.innerText = jeju[i];
        li.classList.add("location_li");
        li.addEventListener("click", clickLocation);
        locationUl.appendChild(li);
      }
      break;
    default:
      break;
  }
}

function clickLocation(event) {
  bookedLocation = event.target.innerText;
  event.target.classList.toggle("location_click");
  if (choosenLocation != null) {
    choosenLocation.classList.remove("location_click");
  }
  choosenLocation = event.target;
}

function init() {
  loadDate();
  initLocation(seoul, "서울", 10);
  initLocation(gyunggi, "경기", 5);
  initLocation(gyunggi, "인천", 5);
  initLocation(chung, "충청", 5);
  initLocation(chung, "대전", 5);
  initLocation(jeon, "전라", 5);
  initLocation(jeon, "광주", 5);
  initLocation(deagu, "경북", 5);
  initLocation(deagu, "대구", 5);
  initLocation(busan, "경남", 3);
  initLocation(busan, "부산", 4);
  initLocation(busan, "울산", 3);
  initLocation(gang, "강원", 10);
  initLocation(jeju, "제주", 5);

  for (let i = 0; i < areaLi.length; i++) {
    areaLi[i].addEventListener("click", handleArea);
  }
}

init();
