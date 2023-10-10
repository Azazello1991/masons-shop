// ========================== index.html ============================== //
// --------------- burger-menu:
document.addEventListener('DOMContentLoaded', () => {
   const burgerOpenIndex = document.querySelector('.burger-index--open'); 
   const burgerCloseindex = document.querySelector('.burger-index--close'); 
   const mobileMenuIndex = document.querySelector('.mobile-menu-index'); 
   const bodyLock = document.querySelector('body');

   burgerOpenIndex.addEventListener('click', () => {
      mobileMenuIndex.classList.remove('menu-hidden');
      bodyLock.classList.add('lock');
   });

   burgerCloseindex.addEventListener('click', () => {
      mobileMenuIndex.classList.add('menu-hidden'); 
      bodyLock.classList.remove('lock');
   });
});


// ------- swiper example:
const example = document.querySelector('.example');
if (example) {
   const swiper = new Swiper('.example__slider', {
      loop: true,
      pagination: {
         el: '.example__dots',
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
     // Navigation arrows
      navigation: {
         nextEl: '.example__arrow--next',
         prevEl: '.example__arrow--prev',
      },
      breakpoints: {
         1200: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         576: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         325: {
            slidesPerView: 1,
         },
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
      pagination: {
         el: '.sale__dots',
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true,
      },
      
   });
}


// Add class "active" to gallery:
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

// Add class "active" to language:
const languages = document.querySelector('.header__languages');
const languageBtns = document.querySelectorAll('.header__language-btn');

if (languages) {
   languages.addEventListener('click', (e) => {
      if (e.target.classList.contains('header__language-btn')) {
         for (let i = 0; i < languageBtns.length; i++) {
            languageBtns[i].classList.remove('active');
         };
         e.target.classList.add('active')
      };
   });
}

// Add class "active" to nav:
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__category');

if (gallery) {
   navList.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav__category')) {
         console.log('true')
         for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active')
         };

         e.target.classList.add('active');

      } else if (e.target.classList.contains('nav__category-name')) {
         for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active')
         };

         e.target.parentElement.classList.add('active');
      }
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
      if ($(window).scrollTop() >= 1) {
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

      pagination: {
         el: '.comments__dots',
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true,
      },
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