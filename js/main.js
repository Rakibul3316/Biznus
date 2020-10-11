/* Owl-Carousel */

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 300,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  /* Mixit Up */
  var container = document.querySelector(".gallary");
  var mixer = mixitup(container, {
    selectors: {
      control: "[amar]",
    },
  });

  /* Add active class */

  $(".navbar-nav li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /* Scroll to top */

  $(window).scroll(function () {
    var ourWindow = $(this).scrollTop();

    if (ourWindow > 100) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }

    /* Fixed Menu */

    if (ourWindow > 100) {
      $("body").addClass("fixed");
    } else {
      $("body").removeClass("fixed");
    }
  });

  $(".scroll-up").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  /* Click and Go to Section */

  $('.navbar-nav a[href^="#"]').click(function (e) {
    e.preventDefault();

    var target = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
  });

  /* Wow Init */

  new WOW().init();
});
