$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arow slider__arow-left" src="images/arrow-left.svg" alt="arow-left">',
        nextArrow: '<img class="slider__arow slider__arow-right" src="images/arrow-right.svg" alt="arow-right">',
        responsive: [
          {
            breakpoint: 481,
            settings: {
              arrows: false
            }
          }
        ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});
