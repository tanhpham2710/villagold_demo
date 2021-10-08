$(document).ready(function(){
  $('.lazy').lazy();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    $('#back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });


  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  // $('.lazy').slick({
  //   lazyLoad: 'ondemand',
  //   slidesToShow: 4,
  //   slidesToScroll: 2
  // });

  $('.multiple-items').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  new WOW().init();

  $('.responsive-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

