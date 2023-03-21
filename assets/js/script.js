$(document).ready(function(){
    // slider active
    $('.slider-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows:false,
        autoplay:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 767,
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    // counter up js
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // testimonial active
    $('.testimonial-active').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


  $('.brand-active').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:2,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


})




// navbar function
let hamburgerIcon = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.close');
let menuItem = document.querySelector('.menu-item');

hamburgerIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);

function showMenu() {
  menuItem.style.right = "35px";
  menuItem.style.transition = "all .35s linear 0s";
  menuItem.style.opacity = "1";
  menuItem.style.visibility = "visible";
  closeIcon.style.display = "block";
  hamburgerIcon.style.display = "none";
}

function hideMenu() {
  menuItem.style.right = "-100%";
  menuItem.style.transition = "all .35s linear 0s";
  menuItem.style.opacity = "0";
  menuItem.style.visibility = "hidden";
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "block";
}