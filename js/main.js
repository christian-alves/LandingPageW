$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  adaptiveHeight: true,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// On setPosition

$('#cpf').mask('000.000.000-00', {reverse: true});
$('#tel').mask('(00) 00000-0000');
