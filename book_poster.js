const posterLBtn = document.querySelector(".poster_LBtn");
const posterRBtn = document.querySelector(".poster_RBtn");
const posterLDiv = document.querySelector(".LBtn_div");
const posterRDiv = document.querySelector(".RBtn_div");
const posterTitle = document.querySelector(".poster_title");
let x = document.getElementsByClassName("book_slide");
const infoMovie = document.querySelector(".info_movie");
const bookBtn = document.getElementsByClassName("movie_book");

let posterSlideIndex = 1;

function posterBtnClick(event) {
  if (event.target === posterLBtn) {
    posterPlusDivs(-1);
  } else {
    posterPlusDivs(1);
  }
  posterTitle.innerText = x[posterSlideIndex - 1].getAttribute("value");
  infoMovie.innerText = x[posterSlideIndex - 1].getAttribute("value");
}

posterLBtn.addEventListener("click", posterBtnClick);
posterRBtn.addEventListener("click", posterBtnClick);
posterLDiv.addEventListener("click", () => {
  posterLBtn.click();
});
posterRDiv.addEventListener("click", () => {
  posterRBtn.click();
});

function posterPlusDivs(n) {
  posterShowDivs((posterSlideIndex += n));
}

function posterShowDivs(n) {
  let i;

  if (n > x.length) {
    posterSlideIndex = 1;
  }
  if (n < 1) {
    posterSlideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[posterSlideIndex - 1].style.display = "block";
}

function handleBookBtn(event) {
  posterSlideIndex = event.target.getAttribute("value");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[posterSlideIndex - 1].style.display = "block";
  posterTitle.innerText = x[posterSlideIndex - 1].getAttribute("value");
  infoMovie.innerText = x[posterSlideIndex - 1].getAttribute("value");
  book.scrollIntoView();
}

posterShowDivs(posterSlideIndex);
posterTitle.innerText = x[posterSlideIndex - 1].getAttribute("value");
infoMovie.innerText = x[posterSlideIndex - 1].getAttribute("value");

for (let i = 0; i < bookBtn.length; i++) {
  bookBtn[i].addEventListener("click", handleBookBtn);
}
