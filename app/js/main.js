// ========================== index.html ============================== //
// ------- swiper example:
const example = document.querySelector('.example');
if (example) {
   const swiper = new Swiper('.example__slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
     // Navigation arrows
      navigation: {
         nextEl: '.example__arrow--next',
         prevEl: '.example__arrow--prev',
      },
      
   });
}


// ------- swiper sale:
const sale = document.querySelector('.example');
if (example) {
   const swiper = new Swiper('.sale__slider', {
      loop: true,
     // Navigation arrows
      navigation: {
         nextEl: '.sale__arrow--next',
         prevEl: '.sale__arrow--prev',
      },
      
   });
}


// Add class "active" to gallery
const gallery = document.querySelector('.gallery');
const menuItems = document.querySelectorAll('.gallery__btn');

if (gallery) {
   gallery.addEventListener('click', (e) => {
      if (e.target.classList.contains('gallery__btn')) {
         for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active')
         };
         e.target.classList.add('active')
      };
   });
}


// ----------- Conect mixitup:
if (document.querySelector('.gallery__items')) {
   $(function () {
      const mixer = mixitup(".gallery__items");
   });
};


// ---------- header sticky:
const header = document.querySelector('.header');
if (header) {
   $(window).scroll(function () {
      if ($(window).scrollTop() >= 10) {
         $('.header').addClass('header--sticky');
   
      } else {
         $('.header').removeClass('header--sticky');
      }
   });
}


// ------- swiper comment:
const comments = document.querySelector('.comments__slider');
if (example) {
   const swiper = new Swiper('.comments__slider', {
      loop: true,
     // Navigation arrows
      navigation: {
         nextEl: '.comments__arrow--next',
         prevEl: '.comments__arrow--prev',
      }
      
   });
}

// -------------- lightgallery-vide:
const lightBox = document.querySelector(".video__box");
if (lightBox) {
   lightGallery(lightBox, {
      plugins: [lgPager, lgVideo],
      counter: false,
      getCaptionFromTitleOrAlt: false,
   });
}

// 