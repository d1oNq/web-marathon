const swiperTop = new Swiper(".top-slider", {
  effect: "fade",
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".accordion__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordion__item--active");
  });
});


// if you embed video in html 
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video__item");
  const button = document.querySelector(".video__btn");

  button.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      button.style.display = "none";
    } else {
      video.pause();
      button.style.display = "block";
    }
  });

  video.addEventListener("click", function () {
    if (!video.paused) {
      video.pause();
      button.style.display = "block";
    }
  });

  video.addEventListener("ended", function () {
    button.style.display = "block";
  });
});
