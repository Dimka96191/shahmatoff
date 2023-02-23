$(function () {


  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    speed: 1800,

    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },
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



// Аккардион 

function akkardion() {
  let table = document.getElementsByClassName('page-cost__table-top');
  for (let i = 0; i < table.length; i++) {
    table[i].addEventListener('click', function () {
      this.parentElement.classList.toggle('page-cost__table--active');

    })
  }
}
akkardion();

// import "../css/style.min.css";

// parallax
// window.addEventListener("scroll", () => {
//   document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
// });





// Постер на видео

// $(function() {
//   var videos  = $(".section-welcome__content");
//       videos.on("click", function(){
//           var elm = $(this),
//               conts   = elm.contents(),
//               le      = conts.length,
//               ifr     = null;
//           for(var i = 0; i<le; i++){
//             if(conts[i].nodeType == 8) ifr = conts[i].textContent;
//           }
//           elm.addClass("player").html(ifr);
//           elm.off("click");
//       });
// });