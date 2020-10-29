const modalOpenBtn = document.querySelector(".modalOpenBtn");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal_overlay");
const modalCloseBtn = document.querySelector(".modal_closeBtn");
const modalCancel = document.querySelector(".modal_cancel");
const modalContent = document.querySelector(".modal_content");
const infoPerson = document.querySelector(".info_person");
const infoSeat = document.querySelector(".info_seat");
let seatCount = 0;
const seats = [];
const seatResult = [];

function createSeats() {
  for (let j = 0; j < 4; j++) {
    let text = "";
    switch (j) {
      case 0:
        text = "A";
        break;
      case 1:
        text = "B";
        break;
      case 2:
        text = "C";
        break;
      case 3:
        text = "D";
        break;
      default:
        break;
    }
    const div = document.createElement("div");
    div.classList.add("seatsDiv");

    for (let i = j * 14; i < (j + 1) * 14; i++) {
      seats[i] = document.createElement("button");
      seats[i].innerText = text + (i - j * 14 + 1);
      seats[i].classList.add("seatBtn");
      div.appendChild(seats[i]);
    }
    modalContent.appendChild(div);
  }
}

function close_modal() {
  modal.classList.add("modalHidden");
}

function open_modal() {
  modal.classList.remove("modalHidden");
}

function handleSeatClick(event) {
  if (event.target.style.color !== "white") {
    seatCount = seatCount + 1;
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    seatResult.push(event.target.innerText);
  } else {
    seatCount = seatCount - 1;
    event.target.style.backgroundColor = "#EFEFEF";
    event.target.style.color = "gray";
    const findIndex = seatResult.findIndex((element, index) => {
      return element === event.target.innerText;
    });
    seatResult.splice(findIndex, 1);
  }
  infoPerson.innerText = `인원 : ${seatCount}`;
  infoSeat.innerText = `좌석 : ${seatResult}`;
}

function seatsClick() {
  const seatBtns = document.getElementsByClassName("seatBtn");

  for (let i = 0; i < seatBtns.length; i++) {
    seatBtns[i].addEventListener("click", handleSeatClick);
  }
}

function init() {
  modalOpenBtn.addEventListener("click", () => {
    open_modal();
    seatsClick();
  });
  modalCloseBtn.addEventListener("click", close_modal);
  modalCancel.addEventListener("click", close_modal);
  modalOverlay.addEventListener("click", close_modal);
  createSeats();
}

init();
