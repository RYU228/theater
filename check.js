const modalOk = document.querySelector(".modal_ok");
const summary = document.querySelector(".summary");
const summaryTitle = document.querySelector(".summary_title");
const summaryDate = document.querySelector(".summary_date");
const summaryLocation = document.querySelector(".summary_location");
const summarySeats = document.querySelector(".summary_seats");
const paymentBtn = document.querySelector(".payment_button");
const modalCheck = document.querySelector(".modal_check");
const checkManager = document.querySelector(".check_manager");
const checkMovie = document.querySelector(".check_movie");
const checkTime = document.querySelector(".check_time");
const checkSeat = document.querySelector(".check_seats");
const checkBtn = document.querySelector(".check_button");
const checkPrice = document.querySelector(".check_price");
const checkTotal = document.querySelector(".check_total");
const checkPayment = document.querySelector(".check_payment");
const checkHavePoint = document.querySelector(".check_havePoint");
const checkEvent = document.querySelector(".check_event");
const customerInfo = new Object();

function handleReserve(event) {
  const date = new Date();
  customerInfo.movie = infoMovie.innerText;
  customerInfo.bookedDate = selectedDate;
  customerInfo.curDate = `${date.getFullYear()}년${
    date.getMonth() + 1
  }월${date.getDate()}일`;
  customerInfo.location = bookedLocation;
  customerInfo.person = seatCount;
  customerInfo.seat = "";
  for (let i = 0; i < seatResult.length; i++) {
    customerInfo.seat = customerInfo.seat + seatResult[i] + " ";
  }
  close_modal();
  printSummary();
}

function printSummary() {
  summary.classList.remove("summaryHidden");
  summaryTitle.innerText = customerInfo.movie;
  summaryDate.innerText = `${customerInfo.bookedDate}일`;
  summaryLocation.innerText = customerInfo.location;
  summarySeats.innerText = `${customerInfo.person}명 ${customerInfo.seat}`;
}

function printCheck() {
  checkManager.innerText = customerInfo.curDate + "  류근률";

  checkMovie.innerText = customerInfo.movie;
  checkTime.innerText = customerInfo.bookedDate + "일 16:00 ~ 18:00";
  checkSeat.innerText = `${customerInfo.person}명 ${customerInfo.seat}`;

  const person = parseInt(customerInfo.person);
  checkTotal.innerText = `Total: ${10000 * person}원`;
  checkPayment.innerText = `카드 ${10000 * person}원`;
}

function showCheck() {
  modalCheck.classList.remove("modalCheckHidden");

  printCheck();
}

function init() {
  modalOk.addEventListener("click", handleReserve);
  paymentBtn.addEventListener("click", showCheck);
  checkBtn.addEventListener("click", () => {
    modalCheck.classList.add("modalCheckHidden");
  });
}

init();
