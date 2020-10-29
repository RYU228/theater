const logo = document.querySelector(".header_logo");
const home = document.querySelector("header");
const navBook = document.querySelector(".nav_bar_book");
const book = document.querySelector(".book");

logo.addEventListener("click", () => {
  home.scrollIntoView();
});

navBook.addEventListener("click", () => {
  book.scrollIntoView();
});
