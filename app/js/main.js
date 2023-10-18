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


   // --------- closing mobile-menu after click on catagory:
   const nav = document.querySelector('.mobile-nav');
   
   nav.addEventListener('click', (e) => {
      const targer = e.target;
   
      if (targer.classList.contains('nav__category') || targer.classList.contains('nav__category-name')) {
         mobileMenuIndex.classList.add('menu-hidden'); 
         bodyLock.classList.remove('lock');
      }
   })
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
const languages = document.querySelectorAll('.header__languages');
const languageBtns = document.querySelectorAll('.header__language-btn');

if (languages) {
   languages.forEach((item) => item.addEventListener('click', (e) => {
      if (e.target.classList.contains('header__language-btn')) {
         languageBtns.forEach((item) => item.classList.remove('active'));
         const lg = e.target.getAttribute('data-lg');
         const lgBtn = [...languageBtns].filter(item => item.getAttribute('data-lg') === lg);
         lgBtn.forEach(item => item.classList.add('active'));
      };
   }));
};


// Add class "active" to nav:
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__category');


if (navList) {
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
const lightVideo = document.querySelector(".video__box");
if (lightVideo) {
   lightGallery(lightVideo, {
      plugins: [lgPager, lgVideo],
      counter: false,
      getCaptionFromTitleOrAlt: false,
   });
}





// ====================================== catalog-page ========================== //

// -------- filter-top:
const filterTop = document.querySelector('.filter-top');

if (filterTop) {
   addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('js-result')) {
         target.classList.toggle('active');
         target.nextElementSibling.classList.toggle('hidden');

      } else if (target.classList.contains('js-parameter')) {
         const parameter = target.textContent;
         target.parentElement.previousElementSibling.textContent = parameter;
         target.parentElement.classList.toggle('hidden');
         target.parentElement.previousElementSibling.classList.toggle('active');
      }
   });
};



// ====================================== product-page ========================== //

// ------------slider product:

const product = document.querySelector(".product");
if (product) {
   const swiper = new Swiper('.swiper-product', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
   });    
}

// Light Gallery:
const lightBox = document.querySelector('.product__slider-items');

if (lightBox) {
   lightGallery(lightBox, {
      plugins: [lgPager], // Підключаемо плагін lgPager (підключали разом з lightGallery)
      speeed: 500, // швидкість
      addClass: 'product-light-box', // додаємо клас для додаткової стилізації (якщо потрібно)
      counter: false, // відключаемо каунтер
      download: false, // відключаємо "зберегти зображення"
      // closeOnTap: false, // можливість закрити при клікові на саме вікно
      getCaptionFromTitleOrAlt: false // підпис до галереї
   })
};

// static stars rating:
const staticStars = document.querySelectorAll('.static-stars'); // знаходимо всі блоки з класом static-stars

if (staticStars) {
   staticStars.forEach((itemStars, index) => {
      let stars = itemStars.dataset.stars; // шукаємо data атребут
      console.log(itemStars.dataset.stars)
      new Starry(itemStars, {
         name: `stars-${index}`, // ім'я кожного блока з статичним рейтингом
         readOnly: true, // тільки для демонстрації рейтингу (без можливості голосування)
         beginWith: 20 * stars, // задається у % (Всего 100%). Тобто 20% * на 4 зірки(залежно скільки в data-stars="4") = 80% -це 4 зірки відповідно
         icons: { // перестилізовуємо ісонки
            blank: './images/sprite.svg#icon-star-blank',
            hover: './images/sprite.svg#icon-star-fill',
            active: './images/sprite.svg#icon-star-fill'
         }
      });
   });
};


// button of quantity products:
const orderInner = document.querySelector('.filter-top__inner-order');
const orderInput = document.querySelector('.filter-top__input');

if (orderInput) {
   orderInner.addEventListener('click', (e) => {
      if (e.target.id === 'btn-less') {
         let targetValue = e.target.parentElement.nextElementSibling.firstElementChild.value;
   
         if (targetValue <= 1) {
            targetValue = 1;
         } else {
            e.target.parentElement.nextElementSibling.firstElementChild.value--
         }

      } else if (e.target.id === 'btn-more') {
         e.target.parentElement.previousElementSibling.firstElementChild.value++
      }
   });
};

// ---------------- swiper liked ----------------- //
if (orderInput) {
   const swiper = new Swiper('.recommend__swiper', {
      loop: true,
     // Navigation arrows
      navigation: {
         nextEl: '.liked__btn--prev',
         prevEl: '.liked__btn--next',
      },
      pagination: {
         el: ".liked__dots",
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true
      },
      breakpoints: {
         1200: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
         992: {
            slidesPerView: 4,
            spaceBetween: 25,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         576: {
            slidesPerView: 2,
            spaceBetween: 15,
         },
         325: {
            slidesPerView: 1,
            spaceBetween: 5,
         },
      },
   });    
};
