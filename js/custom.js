// Banner Part slick slider
$('.banner-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  arrows:false,
  nextArrow:(".next"),
  prevArrow:(".prev"),
  
});

// Service part slick slider
$('.center').slick({
  vertical:true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:(".prev"),
  nextArrow:(".next"),
  autoplay: false,
  autoplaySpeed: 1000,
  
});

// Message part slick slider
$('.person-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.person-photo',
  vertical:true,
  autoplay: false,
  arrows: true,
  prevArrow:(".pr"),
  nextArrow:(".ne"),

});

$('.person-photo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.person-text',
  dots: false,
  centerMode: true,
  centerPadding: '0px', 
  vertical:true,
  arrows: true,
  prevArrow:(".pr"),
  nextArrow:(".ne"),

 
});




