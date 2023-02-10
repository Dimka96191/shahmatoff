$(function () {


  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 10000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    speed: 1400,
  });



  $('.slider-carousel').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],

  });



})

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // брейкпоинт для навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// import "../css/style.min.css";

// parallax
// window.addEventListener("scroll", () => {
//   document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
// });






