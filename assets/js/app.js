var swiper = new Swiper(".vote-slider", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
        mousewheelControl: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        snapOnRelease: true
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-130%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["130%", 0, -500],
      },
    },

    mousewheel: {
        releaseOnEdges: true,
      },
    
});

var swiper = new Swiper(".done-slides", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".done-arrows .swiper-button-next",
    prevEl: ".done-arrows .swiper-button-prev",
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-130%", 0, -500],
    },
    next: {
      shadow: false,
      translate: ["130%", 0, -500],
    },
  },
});

/* Color Change */
const target = document.querySelector(".change");
const callback = (entries) => {
  if (entries[0].isIntersecting) {
    siyah();
  } else {
    beyaz();
  }
  console.log(entries[0]);
};
const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(target);

const siyah = () => {
  document.querySelector("body").classList.add("changed-body");
};
const beyaz = () => {
  document.querySelector("body").classList.remove("changed-body");
};
var btn = $('.up-btn');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

$(function() {
  $('.scroll-btn').click (function() {
    $('html, body').animate({scrollTop: $('section.features').offset().top }, 'slow');
    return false;
  });
});