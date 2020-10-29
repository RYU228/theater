$(".movie").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

const infoHeart = document.getElementsByClassName("info_heart");

for (let i = 0; i < infoHeart.length; i++) {
  infoHeart[i].addEventListener("click", () => {
    infoHeart[i].classList.toggle("heart");
  });
}
