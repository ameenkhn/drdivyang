;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
function initHeaderSticky() {
  if ($("header.homepage4-body .vl-header-area").length) {
    $("header.homepage4-body .vl-header-area").addClass("header-sticky");
    return;
  }
  var windowOn = $(window);
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $(".vl-header-area").removeClass("header-sticky");
    } else {
      $(".vl-header-area").addClass("header-sticky");
    }
  });
}
initHeaderSticky();
//========== HEADER ACTIVE ENDS ============= //

//========== MOBILE MENU STARTS ============= //
function initOffcanvasMenu() {
  var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
  var vlSideMenu = $('.vl-offcanvas-menu nav');
  var offcanvas = $('.vl-offcanvas');
  var offcanvasOverlay = $('.vl-offcanvas-overlay');
  var offcanvasLogo = $('.vl-offcanvas-logo');
  var offcanvasClose = $('.vl-offcanvas-close-toggle');
  var headerLogo = $('.vl-logo a').first().clone();
  var bookUrl = 'https://drdivyangpatelmd.exlyapp.com/cb578edf-0916-4bcf-a2c8-b572f93a51ea';

  vlSideMenu.empty().append(vlMenuWrap);

  if (headerLogo.length) {
    offcanvasLogo.each(function () {
      var logoSlot = $(this);

      if (!logoSlot.children().length) {
        logoSlot.append(headerLogo.clone());
      }
    });
  }

  offcanvasClose.each(function () {
    $(this)
      .attr({
        type: 'button',
        'aria-label': 'Close mobile menu'
      })
      .empty()
      .append('<i class="fa-solid fa-xmark"></i>');
  });

  // Add toggle button ONLY if submenu exists
  vlSideMenu.find('li').each(function () {
    if ($(this).children('.sub-menu, .vl-mega-menu').length > 0) {
      $(this).append('<button class="vl-menu-close" type="button" aria-label="Toggle submenu" aria-expanded="false"><i class="fas fa-chevron-right"></i></button>');
    }
  });

  vlSideMenu.find('a[href="#"]').addClass('dr-mobile-menu-parent');

  if (!$('.dr-mobile-menu-actions').length) {
    $('<div class="dr-mobile-menu-actions">' +
        '<a href="' + bookUrl + '" class="vl-btn4">Book Consultation</a>' +
        '<a href="tel:+919099268424" class="phone">Call Now</a>' +
      '</div>').insertAfter('.vl-offcanvas-menu');
  }

  // Toggle submenu ONLY via button
  $('.vl-offcanvas-menu')
    .off('click.drOffcanvasToggle', 'button.vl-menu-close')
    .on('click.drOffcanvasToggle', 'button.vl-menu-close', function (e) {
    e.preventDefault();
    var parentLi = $(this).parent();
    var toggleButton = $(this);

    if (!parentLi.hasClass('active')) {
      parentLi.addClass('active');
      parentLi.children('.sub-menu, .vl-mega-menu').slideDown();
      toggleButton.attr('aria-expanded', 'true');
    } else {
      parentLi.removeClass('active');
      parentLi.children('.sub-menu, .vl-mega-menu').slideUp();
      toggleButton.attr('aria-expanded', 'false');
    }
  });

  $('.vl-offcanvas-menu')
    .off('click.drOffcanvasParent', 'a.dr-mobile-menu-parent')
    .on('click.drOffcanvasParent', 'a.dr-mobile-menu-parent', function (e) {
      e.preventDefault();
      $(this).siblings('button.vl-menu-close').trigger('click');
    });

  $('.vl-offcanvas-menu')
    .off('click.drOffcanvasLink', 'a')
    .on('click.drOffcanvasLink', 'a', function () {
      var href = $(this).attr('href') || '';

      if (href && href !== '#' && !$(this).hasClass('dr-mobile-menu-parent')) {
        closeOffcanvasMenu();
      }
    });

  function openOffcanvasMenu() {
    offcanvas.addClass("vl-offcanvas-open");
    offcanvasOverlay.addClass("vl-offcanvas-overlay-open");
    $('body').addClass('dr-menu-open');
  }

  function closeOffcanvasMenu() {
    offcanvas.removeClass("vl-offcanvas-open");
    offcanvasOverlay.removeClass("vl-offcanvas-overlay-open");
    $('body').removeClass('dr-menu-open');
  }

  // Open offcanvas
  $(".vl-offcanvas-toggle").off('click.drOffcanvasOpen').on('click.drOffcanvasOpen', function () {
    openOffcanvasMenu();
  });

  // Close offcanvas
  $(".vl-offcanvas-close-toggle, .vl-offcanvas-overlay")
    .off('click.drOffcanvasClose')
    .on('click.drOffcanvasClose', function () {
    closeOffcanvasMenu();
  });

  $(document).off('keydown.drOffcanvas').on('keydown.drOffcanvas', function (e) {
    if (e.key === 'Escape') {
      closeOffcanvasMenu();
    }
  });
}

initOffcanvasMenu();
//========== MOBILE MENU ENDS ============= //

//========== DR DIVYANG SHARED FOOTER STARTS ============= //
function initDrFooterTemplate() {
  var footerSection = document.querySelector('.vl-footer4-section-area');
  var footerContainer = footerSection ? footerSection.querySelector('.container') : null;

  if (!footerSection || !footerContainer || footerContainer.querySelector('.dr-footer-main')) return;

  footerSection.classList.add('dr-footer-theme');
  footerContainer.innerHTML = `
    <div class="dr-footer-main">
      <div class="row align-items-start g-4">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="dr-footer-brand">
            <a href="index.html" class="dr-footer-logo" aria-label="Dr. Divyang Patel home">
              <span class="dr-footer-logo-badge">
                <img src="assets/drdivyangpatel/logo_transparent.png" alt="Dr. Divyang Patel logo">
              </span>
            </a>
            <p>Internal medicine and intensive care for adults, delivered with evidence-based decisions, compassionate communication, and reliable follow-up.</p>
            <div class="dr-footer-social">
              <a href="https://www.instagram.com/dr_divyangpatel_md?igsh=MXVoZnNqd2wxZHJ1Zg%3D%3D&utm_source=qr" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="tel:+919099268424" aria-label="Call Dr. Divyang Patel">
                <i class="fa-solid fa-phone"></i>
              </a>
              <a href="https://www.google.com/maps?q=Gupta+Hospital+Station+Road+Bilimora+Navsari+Gujarat" aria-label="Open location">
                <i class="fa-solid fa-location-dot"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-xl-2 col-lg-3 col-md-6">
          <div class="dr-footer-column">
            <h3>Quick links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="doctor-divyang-patel.html">Our Doctor</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="testimonial.html">Testimonials</a></li>
              <li><a href="Gallery.html">Gallery</a></li>
              <li><a href="https://drdivyangpatelmd.exlyapp.com/blog">Blogs</a></li>
              <li><a href="faq.html">FAQs</a></li>
              <li><a href="contact.html">Appointments & Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-2 col-lg-3 col-md-6">
          <div class="dr-footer-column">
            <h3>Highlighted services</h3>
            <ul>
              <li><span>Lifestyle disease management</span></li>
              <li><span>Fever and infection care</span></li>
              <li><span>Respiratory and CNS care</span></li>
              <li><span>Critical and poisoning cases</span></li>
              <li><span>Kidney and abdomen care</span></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="dr-footer-column dr-footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+919099268424">
                  <i class="fa-solid fa-phone"></i>
                  <span>+91 90992 68424</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dr_divyangpatel_md?igsh=MXVoZnNqd2wxZHJ1Zg%3D%3D&utm_source=qr">
                  <i class="fa-brands fa-instagram"></i>
                  <span>@dr_divyangpatel_md</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps?q=Gupta+Hospital+Station+Road+Bilimora+Navsari+Gujarat">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Gupta Hospital, Station Road, Bilimora, Dist-Navsari, Gujarat</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>Schedule consultation</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-2 col-lg-4 col-md-6">
          <div class="dr-footer-subscribe">
            <h3>Stay Updated</h3>
            <p>Follow consultation updates, schedule a visit, and stay connected with physician guidance from Dr. Divyang Patel.</p>
            <a href="https://drdivyangpatelmd.exlyapp.com/cb578edf-0916-4bcf-a2c8-b572f93a51ea" class="dr-footer-subscribe-btn">Book Video Consultation</a>
          </div>
        </div>
      </div>

      <div class="dr-footer-bottom">
        <p>© Copyright 2026 Dr. Divyang Patel. All rights reserved.</p>
      </div>
    </div>
  `;
}
initDrFooterTemplate();
//========== DR DIVYANG SHARED FOOTER ENDS ============= //

//========== DR HERO STATIC CTA STARTS ============= //
function initDrHeroStaticCta() {
  $(".dr-hero-actions").removeAttr("data-aos").removeAttr("data-aos-duration");
}
initDrHeroStaticCta();
//========== DR HERO STATIC CTA ENDS ============= //

//========== SIDEBAR/SEARCH AREA ============= //
function initHeaderSearchPopup() {
  $(".header-search-btn").on("click", function (e) {
    e.preventDefault();
    $(".header-search-form-wrapper").addClass("open");
    $('.header-search-form-wrapper input[type="search"]').focus();
    $('.body-overlay').addClass('active');
  });

  $(".tx-search-close").on("click", function (e) {
    e.preventDefault();
    $(".header-search-form-wrapper").removeClass("open");
    $("body").removeClass("active");
    $('.body-overlay').removeClass('active');
  });
}
initHeaderSearchPopup();
//========== SIDEBAR/SEARCH AREA ============= //

//========== PAGE PROGRESS STARTS ============= // 
function initScrollProgress() {
  var progressPath = document.querySelector(".progress-wrap path");
  if (!progressPath) return;
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).on('scroll', updateProgress);
  var offset = 50;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
}
initScrollProgress();
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
function initYoutubePopup() {
  var youtubePopup = $(".popup-youtube");
  if (youtubePopup.length > 0) {
    youtubePopup.magnificPopup({
      type: "iframe",
    });
  }
}
initYoutubePopup();
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

//========== CASE IMAGE ============= //
function initHoverActive() {
  $('.cs_hover_active').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
}
initHoverActive();

});
//========== COUNTER UP============= //
function initCounterUp() {
  const ucounter = $('.counter');
  if (ucounter.length > 0) {
    ucounter.countUp();
  }
}
initCounterUp();
//========== TESTIMONIAL AREA ============= //

// SLIDER //
$(".testimonial-single-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".testimonial-prev-arrow"),
  nextArrow: $(".testimonial-next-arrow"),
  loop: true,
  autoplay:true,
  autoplayTimeout:500,
});

// SLIDER //
$(".testimonial-single-slider3").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".prev-arrow"),
  nextArrow: $(".next-arrow"),
  loop: true,
  autoplay:true,
  autoplayTimeout:500,
});

// SLIDER //
$('.team-single-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// SLIDER //
$('.team-single-slider2').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// SLIDER //
$('.service-single-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// SLIDER //
$('.testimonial-single-slider2').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});

// SLIDER //
$(".hero-main-slider").slick({
  autoplay:true,
  autoplaySpeed:2000,
  speed:1500,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:false,
  arrows:true,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
  prevArrow: $(".testimonial-prev-arrow"),
  nextArrow: $(".testimonial-next-arrow"), 
}); 


// SLIDER //
$('.team-box-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:true,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});

// SLIDER //
$('.team4-slider-area').owlCarousel({
  loop:false,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:false,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});

// SLIDER //
$('.service4-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});

// SLIDER //
$('.testimonial4-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// SLIDER //
$('.shop-single-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});

// SLIDER //
$('.blog-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// SLIDER //
$('.testimonial7-slider-boxarea').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  fade:true,
  items:10,
  autoplay:true,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

// SLIDER //
$('.team-slide-widget').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  fade:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});

// SLIDER //
$(".testimonial8-imges").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  loop: true,
  focusOnSelect: true,
  vertical:false,
  asNavFor: ".testimonial-content-slider",
  infinite: true,
  fade:true,
});

$(".testimonial-content-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testimonial8-imges",
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $(".testimonial-prev-arrow"),
  nextArrow: $(".testimonial-next-arrow"), 
});

// SLIDER //
$('.hero8-images-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  fade:true,
  items:10,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

// SLIDER //
$('.team6-slider-widget').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
  fade:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});

// SLIDER //
$('.testimonial8-widgetarea ').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
  fade:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

// SLIDER //
$('.case-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
  fade:true,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});
//========== PRELOADER ============= //
function initPreloader() {
  $(window).on("load", function () {
    setTimeout(function () {
      $(".cs_preloader").fadeToggle();
    }, 200);
  });
}
initPreloader();


})(jQuery);


//========== GSAP AREA ============= //
function initTextAnimation() {
  if ($('.text-anime-style-1').length) {
    let staggerAmount = 0.05,
        translateXValue = 0,
        delayValue = 0.5,
        animatedTextElements = document.querySelectorAll('.text-anime-style-1');

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.words, {
        duration: 1,
        delay: delayValue,
        x: 20,
        autoAlpha: 0,
        stagger: staggerAmount,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }
}
initTextAnimation();

function initTextAnimationStyle2() {
  if ($('.text-anime-style-2').length) {
    let staggerAmount = 0.05,
        translateXValue = 20,
        delayValue = 0.5,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll('.text-anime-style-2');

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }
}

initTextAnimationStyle2();

function initTextAnimationStyle3() {
  if ($('.text-anime-style-3').length) {
    let animatedTextElements = document.querySelectorAll('.text-anime-style-3');

    animatedTextElements.forEach((element) => {
      if (element.animation) {
        element.animation.progress(1).kill();
        element.split.revert();
      }
      element.split = new SplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      gsap.set(element, { perspective: 400 });
      gsap.set(element.split.chars, { opacity: 0, x: "50" });
      element.animation = gsap.to(element.split.chars, {
        scrollTrigger: { trigger: element, start: "top 90%" },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: 0.02,
      });
    });
  }
}
initTextAnimationStyle3();


function initRevealAnimation() {
  if ($('.reveal').length) {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        }
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
      tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
    });
  }
}

initRevealAnimation();



//========== FILTER IMAGE ============= //
jQuery(document).ready(function($){
  var dragging = false,
      scrolling = false,
      resizing = false;
  
  var imageComparisonContainers = $('.cd-image-container');

  checkPosition(imageComparisonContainers);

  $(window).on('scroll', function(){
      if( !scrolling) {
          scrolling = true;
          requestAnimationFrame(function(){ checkPosition(imageComparisonContainers); });
      }
  });

  imageComparisonContainers.each(function(){
      var container = $(this);
      drags(container.find('.cd-handle'), container.find('.cd-resize-img'), container, 
           container.find('.cd-image-label[data-type="original"]'), 
           container.find('.cd-image-label[data-type="modified"]'));
  });

  $(window).on('resize', function(){
      if( !resizing) {
          resizing = true;
          requestAnimationFrame(function(){ checkLabel(imageComparisonContainers); });
      }
  });

  function checkPosition(container) {
      container.each(function(){
          var actualContainer = $(this);
          if( $(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
              actualContainer.addClass('is-visible');
          }
      });
      scrolling = false;
  }

  function checkLabel(container) {
      container.each(function(){
          var actual = $(this);
          updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
          updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
      });
      resizing = false;
  }

  function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
      dragElement.on("mousedown vmousedown", function(e) {
          dragElement.addClass('draggable1');
          resizeElement.addClass('resizable1');

          var dragWidth = dragElement.outerWidth(),
              xPosition = dragElement.offset().left + dragWidth - e.pageX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth(),
              minLeft = containerOffset + 10,
              maxLeft = containerOffset + containerWidth - dragWidth - 10;
          dragElement.parents().on("mousemove vmousemove", function(e) {
              if( !dragging) {
                  dragging = true;
                  requestAnimationFrame(function(){ animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement); });
              }
          }).on("mouseup vmouseup", function(e){
              dragElement.removeClass('draggable1');
              resizeElement.removeClass('resizable1');
          });
          e.preventDefault();
      }).on("mouseup vmouseup", function(e) {
          dragElement.removeClass('draggable1');
          resizeElement.removeClass('resizable1');
      });
  }

  function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
      var leftValue = e.pageX + xPosition - dragWidth;   
      leftValue = Math.max(minLeft, Math.min(leftValue, maxLeft));

      var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
      $('.draggable1').css('left', widthValue);
      $('.resizable1').css('width', widthValue);
      updateLabel(labelResizeElement, resizeElement, 'left');
      updateLabel(labelContainer, resizeElement, 'right');

      dragging = false;
  }

  function updateLabel(label, resizeElement, position) {
      if(position === 'left') {
          (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
      } else {
          (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
      }
  }
});
