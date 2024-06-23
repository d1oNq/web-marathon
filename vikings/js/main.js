$(function(){

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    }
  });
  
  $('.characters__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.characters__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  
  $('.characters__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.characters__slider-img',
    arrows: false,
  });

});