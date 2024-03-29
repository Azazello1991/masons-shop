// ========================== index.html ============================== //
// Create arrProduct in localStorage:
if (!localStorage.arrProduct) {
   const arrProduct = [];
   localStorage.setItem('arrProduct', JSON.stringify(arrProduct));
}


// --------------- burger-menu:
const burgerOpenIndex = document.querySelector('.burger-index--open');
const burgerCloseindex = document.querySelector('.burger-index--close');
const mobileMenuIndex = document.querySelector('.mobile-menu-index');
const bodyLock = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {

   burgerOpenIndex.addEventListener('click', () => {
      mobileMenuIndex.classList.remove('menu-hidden');
      bodyLock.classList.add('lock');
      addQuantityInMobCart();
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


// add quantity products in mobile cart:
function addQuantityInMobCart() {
   if (localStorage.arrProduct) {
      const quantityBox = mobileMenuIndex.querySelector('.header__quantity');
      const quantity = JSON.parse(localStorage['arrProduct']).length;
      quantityBox.textContent = quantity;
   }
}


// ------- swiper example:
const example = document.querySelector('.example');
if (example) {
   const swiper = new Swiper('.example__slider', {
      autoplay: {
         delay: 3000,
      },

      mousewheel: {
         sensitivity: 1,
      },
      loop: true,

      pagination: {
         el: '.example__dots',
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true,
      },

      dynamicBullets: true,

      slidesPerView: 3,
      spaceBetween: 30,

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

// --------- catalog swiper: 
const catalog = document.querySelector('.catalog');
const catalogSlider = document.querySelector('.catalog__swiper');

window.addEventListener("resize", (e) => {
   if (window.matchMedia("(max-width: 768px)").matches) {

      const catalogSwiper = new Swiper('.catalog__swiper', {
         loop: true,
         slidesPerGroup: 1,
         centeredSlides: true,
         centeredSlidesBounds: true,
         spaceBetween: 20,
         autoplay: {
            delay: 4000,
         },

         pagination: {
            el: '.catalog__dots',
            bulletClass: 'swiper-dot',
            bulletActiveClass: 'swiper-dot--active',
            clickable: true,
         },

         breakpoints: {

            768: {
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

   } else if (window.matchMedia("(min-width: 768px)").matches) {
      location.reload()
   }
});


// swiper sale:
const sale = document.querySelector('.example');
if (example) {
   const swiper = new Swiper('.sale__slider', {
      loop: true,
      pagination: {
         el: '.sale__dots',
         bulletClass: 'swiper-dot',
         bulletActiveClass: 'swiper-dot--active',
         clickable: true,
      },
      autoplay: {
         delay: 3000,
      },

   });
}

// ---------- Adding class "active" to gallery:
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

// ============================ Language ========================= //

const languages = document.querySelectorAll('.header__languages');
const languageBtns = document.querySelectorAll('.header__language-btn');

languages.forEach((item) => item.addEventListener('click', (e) => {
   const target = e.target;

   if (target.classList.contains('header__language-btn')) {
      addActiveLg(target);
      addlenguageInStorage();
   };
}));


// add class "active" by language btn`s:
function addActiveLg(target) {
   languageBtns.forEach((item) => item.classList.remove('active'));
   const lg = target.getAttribute('data-lg');
   const lgBtn = [...languageBtns].filter(item => item.getAttribute('data-lg') === lg);
   lgBtn.forEach(item => item.classList.add('active'));
};


// Adding language data in Local Storage:
function addlenguageInStorage() {
   const lenguage = document.querySelector('.header__language-btn.active');
   const languageData = lenguage.dataset.lg;
   localStorage.setItem('lenguage', `${languageData}`);
};


// Checking language in storage:
function checkLgInStorage() {
   if (localStorage.lenguage) {
      const storageLg = localStorage.lenguage;
      languageBtns.forEach((item) => item.classList.remove('active'));
      const lgBtn = [...languageBtns].filter(item => item.getAttribute('data-lg') === storageLg);
      lgBtn.forEach(item => item.classList.add('active'));
   }
}
checkLgInStorage();

// ====================================================================== //





// Adding class "active" to navigation:
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
};

// ++++++++++++++++ jquery +++++++++++++ // !!!! Перекласти на ванільний

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
// +++++++++++++++ end jquery +++++++++++++++++ //


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



// -------------- lightgallery-video:
const lightVideo = document.querySelector(".video__box");
if (lightVideo) {
   lightGallery(lightVideo, {
      plugins: [lgPager, lgVideo],
      counter: false,
      getCaptionFromTitleOrAlt: false,
   });
}



// ====================================== catalog-page ========================== //

// -------- filter:
const filterTop = document.querySelector('.filter');

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

      } else if (!target.classList.contains('js-parameter')) {
         const resultBoxes = document.querySelectorAll('.js-result');
         const paramrtersBoxes = document.querySelectorAll('.filter__parameters');

         [...resultBoxes].forEach((item) => {
            if (item.classList.contains('active')) {
               item.classList.remove('active');
               [...paramrtersBoxes].forEach((item) => {
                  item.classList.add('hidden')
               })
            }
         })
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



// ------- Light Gallery:
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



// ---------- rating stars:
const starsRating = document.querySelectorAll('.product__form-stars'); // знаходимо всі блоки з класом static-stars

if (starsRating) {
   starsRating.forEach((itemStars) => {
      new Starry(itemStars, {
         readOnly: false, // з можливістю голосування
         icons: { // перестилізовуємо ісонки
            blank: './images/sprite.svg#icon-star-blank',
            hover: './images/sprite.svg#icon-star-fill',
            active: './images/sprite.svg#icon-star-fill'
         }
      });
   });
};

// ---------- static stars:
const staticStars = document.querySelectorAll('.static-stars'); // знаходимо всі блоки з класом static-stars

if (staticStars) {
   staticStars.forEach((itemStars, index) => {
      let stars = itemStars.dataset.stars; // шукаємо data атребут
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

// event buttons-coments:
const commentForm = document.querySelector('.product__form');

document.addEventListener('click', (e) => {
   const target = e.target;

   if (target.classList.contains('product__btn-add')) {
      commentForm.classList.toggle('hidden');

   } else if (target.classList.contains('product__form-btn--cansel')) {
      commentForm.classList.add('hidden');
   }
   
})


// ----------- filter button of quantity products:
const orderInner = document.querySelectorAll('.filter__inner-order');
const orderInput = document.querySelector('.filter__input');

if (orderInput) {
   orderInner.forEach((item) => item.addEventListener('click', (e) => {
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
   })
   )
};



// ---------------- swiper liked:
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



// ------ adding event by buy-button:
const buyBox = document.querySelector('.product__buy-wrapper');

if (buyBox) {
   buyBox.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('product__btn-buy')) {
         collectingData();
         checkQuantityProducts();
      }
   })
}



// --------- collecting product data and adding to local storage:
function collectingData() {
   const objProducts = {};
   const arrProduct = []

   const way = document.querySelector('.product__photo').getAttribute('src');
   const title = document.querySelector('.product__title').textContent;
   const subtitle = document.querySelector('.product__subtitle').textContent;
   const quantity = document.querySelector('.filter__input').value;
   const size = document.getElementById('size').textContent;
   const color = document.getElementById('color').textContent;
   const price = document.querySelector('.product__price').textContent;
   const currency = document.querySelector('.product__currency').textContent;
   const id = Math.ceil(Math.random() * 1000);
   objProducts.way = way;
   objProducts.title = title;
   objProducts.subtitle = subtitle;
   objProducts.quantity = quantity;
   objProducts.size = size;
   objProducts.color = color;
   objProducts.price = price;
   objProducts.currency = currency;
   objProducts.id = id;

   if (localStorage.arrProduct) {
      const arrProduct = JSON.parse(localStorage['arrProduct']);
      arrProduct.push(objProducts);
      localStorage.setItem('arrProduct', JSON.stringify(arrProduct));

   } else {
      arrProduct.push(objProducts);
      localStorage.setItem('arrProduct', JSON.stringify(arrProduct));
   }
}



// ===================================== Cart =========================================== //

// adding event on delete buttons:
const productsList = document.querySelector('.cart__products-list');
const blockMessage = document.querySelector('.cart__message-text');
const orderBtn = document.querySelector('.order__btn');
const order = document.querySelector('.order');

// add event click to order block:
if (order) {
   order.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('order__redio')) {
         checkDelivery();
         culcOrderPrice();
      }
   });
};


if (productsList) {
   productsList.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('cart__delete')) {
         deleteProduct(target);
         checkQuantityProducts();
         culcOrderPrice();
      }
   })
}



// checking product in Local Storage to build a shopping list:
if (productsList) {
   if (localStorage.arrProduct) {
      addProductInCart(JSON.parse(localStorage['arrProduct']));
      culcOrderPrice();
   }
}



// checking quantity products in shopping list:
function checkQuantityProducts() {
   const quatityBox = document.querySelector('.header__quantity');

   if (localStorage.arrProduct) {
      const listLength = JSON.parse(localStorage['arrProduct']).length;
      quatityBox.textContent = listLength;
   } else {
      quatityBox.textContent = '0';
   }

   if (productsList) {
      showHiddenMessCart();
      culcOrderPrice();
   }
};

checkQuantityProducts();




// show and hidden message cart:
function showHiddenMessCart() {
   const listLength = productsList.childElementCount;

   if (listLength < 2) {
      blockMessage.classList.remove('hidden');
      orderBtn.setAttribute('disabled', '');
      orderBtn.textContent = "Кошик порожній"
   } else {
      blockMessage.classList.add('hidden');
      orderBtn.removeAttribute('disabled');
      orderBtn.textContent = "Оформити замовлення";
   }
};





// function for delet item in shopping list:
function deleteProduct(e) {
   const productId = +(e.closest('.cart__product').id);
   e.closest('.cart__product').remove();
   const arrParce = JSON.parse(localStorage['arrProduct']);
   const arrProduct = [...arrParce].filter(item => item.id !== productId);
   localStorage.setItem('arrProduct', JSON.stringify(arrProduct));
}



// function for adding products in shopping cart:
function addProductInCart(arrProduct) {
   const productsList = document.querySelector('.cart__products-list');

   for (let i = 0; i < arrProduct.length; i++) {
      productsList.insertAdjacentHTML(`afterBegin`,
         `<li class="cart__product" id="${arrProduct[i].id}">
               <div class="cart__flex">
                  <div class="cart__photo">
                     <img class="cart__img" src=${arrProduct[i].way} width="160" height="165" alt="фото продукта">
                  </div>
   
                  <div class="cart__text">
                     <a class="cart__subtitle" href="#">${arrProduct[i].title}</a>
                     <span class="cart__group">${arrProduct[i].subtitle}</span>
                  </div>
               </div>
   
               <div class="cart__filter-wrapper">
                  <ul class="filter product__filter">
                     <li class="filter__item product__item">
                        <span class="filter__subtitle product__filter-subtitle">Количество:</span>
                        
                        <div class="filter__inner-order">
                           <div class="filter__order-item">
                              <button class="filter__btn btn--lass" type="button" id="btn-less">-</button>
                              <span class="sr-only">Кнопка "минус одна едининица товара"</span>
                           </div>
   
                           <div class="filter__order-item">
                              <input class="filter__input" type="text" id="quantity" value="${arrProduct[i].quantity}">
                              <label class="sr-only" for="quantity">Количество продукта</label>
                           </div>
   
                           <div class="filter__order-item">
                              <button class="filter__btn btn--more" type="button" id="btn-more">+</button>
                              <span class="sr-only">Кнопка "плюс одна едининица товара"</span>
                           </div>
                        </div>
                     </li>
   
                     <li class="filter__item product__item">
                        <span class="filter__subtitle product__filter-subtitle">Размер:</span>
                        <div class="filter__inner">
                           <h3 class="sr-only">Сортировать по размеру</h3>
                           <button class="filter__result js-result" type="button">${arrProduct[i].size}</button>
                           <ul class="filter__parameters hidden">
                              <li class="filter__parameter js-parameter">XXL</li>
                              <li class="filter__parameter js-parameter">XL</li>
                              <li class="filter__parameter js-parameter">L</li>
                              <li class="filter__parameter js-parameter">M</li>
                           </ul>
                        </div>
                     </li>
                     
                     <li class="filter__item product__item">
                        <span class="filter__subtitle product__filter-subtitle">Цвет:</span>
                        <div class="filter__inner">
                           <h3 class="sr-only">Сортировать по цвету</h3>
                           <button class="filter__result js-result" type="button">${arrProduct[i].color}</button>
                           <ul class="filter__parameters hidden">
                              <li class="filter__parameter js-parameter" id="white">Белый</li>
                              <li class="filter__parameter js-parameter" id="black">Черный</li>
                              <li class="filter__parameter js-parameter" id="red">Красный</li>
                              <li class="filter__parameter js-parameter" id="yellow">Желтый</li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
   
               <div class="cart__price-wrapper">
                  <span class="cart__price">${arrProduct[i].price}<span class="cart__currency">${arrProduct[i].currency}</span></span>
                  <button class="cart__delete" type="button"></button>
               </div>
            </li>`);
   }
}



// =========================== Validation cart form ======================== //
const patterns = {
   namePattern: /^[а-яА-ЯҐґЄєІіЇї'-]{2,}$/,
   emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
   phonePattern: /^0\d{9}$/,
   passwordPattern: /^(?!.*\s).{8,}$/
};

const formCart = document.querySelector('.order__form');
const filds = document.querySelectorAll('.order__fild');

// adding event input:
if (filds.length > 1) {
   formCart.addEventListener('input', e => {
      const target = e.target;

      if (target.classList.contains('order__fild') && target.name === 'name') {
         validationData(patterns.namePattern, target);

      } else if (target.classList.contains('order__fild') && target.name === 'email') {
         validationData(patterns.emailPattern, target);

      } else if (target.classList.contains('order__fild') && target.name === 'tel') {
         validationData(patterns.phonePattern, target);

      } else if (target.classList.contains('order__fild') && target.name === 'city') {
         validationData(patterns.namePattern, target);

      } else if (target.classList.contains('order__fild') && target.name === 'postOffice') {

         if (target.value.length < 1) {
            target.classList.remove('success');
            target.classList.add('error');
         } else {
            target.classList.remove('error');
            target.classList.add('success');
         }
      }
   });
};


// adding event click:
if (orderBtn) {
   orderBtn.addEventListener('click', (e) => {
      const filterFilds = [...filds].filter(item => !(item.classList.contains('success')));
      filterFilds.forEach(item => {
         item.classList.add('error');
         setTimeout(() => item.classList.remove('error'), 300);
         setTimeout(() => item.classList.add('error'), 600);
      });
   });
};


// adding event blur:
if (orderBtn) {
   filds.forEach(item => item.addEventListener('blur', (e) => {
      const target = e.target;

      if (target.value.length < 1) {
         target.classList.add('error');
      }
   }));
};

// Validationing form data:
function validationData(pattern, target) {

   if (!(pattern.test(target.value))) {
      target.classList.remove('success');
      target.classList.add('error');

   } else if (pattern.test(target.value)) {
      target.classList.remove('error');
      target.classList.add('success');
   }
};

// ============================ Validation page form =========================== //
const formPage = document.querySelector('.form-page');
const pageFilds = document.querySelectorAll('.form__fild');
const formBtn = document.querySelector('.form__btn');

if (formPage) {
   formPage.addEventListener('input', e => {
      const target = e.target;

      if (target.classList.contains('form__fild') && target.id === 'formName') {
         validationData(patterns.namePattern, target);

      } else if (target.classList.contains('form__fild') && target.id === 'formMail') {
         validationData(patterns.emailPattern, target);

      } else if (target.classList.contains('form__fild') && target.id === 'formTel') {
         validationData(patterns.phonePattern, target);
      }
   });
};


// adding event blur:
if (formPage) {
   pageFilds.forEach(item => item.addEventListener('blur', (e) => {
      const target = e.target;

      if (target.value.length < 1 && !(target.name === 'comment')) {
         target.classList.add('error');
      }
   }));
};


// adding event click by :
if (formBtn) {
   formBtn.addEventListener('click', (e) => {
      const filterFilds = [...pageFilds].filter(item => !(item.classList.contains('success')) && !(item.name === 'comment'));
      filterFilds.forEach(item => {
         item.classList.add('error');
         setTimeout(() => item.classList.remove('error'), 300);
         setTimeout(() => item.classList.add('error'), 600);
      });
   });
};


// ============================ Validation footer form =========================== //
const formFooter = document.querySelector('.email__registr');

// add event input by form footer:
formFooter.addEventListener('input', e => {
   const target = e.target;

   if (target.classList.contains('email__fild')) {
      validationData(patterns.emailPattern, target);
   }
   if (target.value.length < 1) {
      target.classList.remove('error');
   }
});


// ============================ Validation mobile form =========================== //
const mobileForm = mobileMenuIndex.querySelector('.mobile-form');
const mobileInputs = mobileForm.querySelectorAll('.form__fild');
const mobileFormBtn = mobileForm.querySelector('.form__btn-ph');

// add event inpute by mobile form:
if (mobileForm) {
   mobileForm.addEventListener('input', e => {
      const target = e.target;

      if (target.classList.contains('form__fild') && target.id === 'name-ph') {
         validationData(patterns.namePattern, target);

      } else if (target.classList.contains('form__fild') && target.id === 'email-ph') {
         validationData(patterns.emailPattern, target);

      } else if (target.classList.contains('form__fild') && target.id === 'tel-ph') {
         validationData(patterns.phonePattern, target);
      }
   });
};

// adding event blur:
if (mobileForm) {
   mobileInputs.forEach(item => item.addEventListener('blur', (e) => {
      const target = e.target;

      if (target.value.length < 1 && !(target.name === 'comment')) {
         target.classList.add('error');
      }
   }));
};

// adding event click by mobile form btn:
if (mobileForm) {
   mobileFormBtn.addEventListener('click', (e) => {
      const filterFilds = [...mobileInputs].filter(item => !(item.classList.contains('success')) && !(item.name === 'comment'));
      filterFilds.forEach(item => {
         item.classList.add('error');
         setTimeout(() => item.classList.remove('error'), 300);
         setTimeout(() => item.classList.add('error'), 600);
      });
   });
};


// ============================= counter cart ========================== //
// checking delivery:
function checkDelivery() {
   const checkBoxPickup = document.querySelector('#pickup');
   const deliveryPrice = document.querySelector('.order__result--delivery');

   if (checkBoxPickup.checked) {
      deliveryPrice.textContent = '0';
   } else {
      deliveryPrice.textContent = '50';
   }
};



// calc price orders:
function culcOrderPrice() {
   const arrProduct = JSON.parse(localStorage['arrProduct']);
   const deliveryPrice = document.querySelector('.order__result--delivery').textContent;
   const orderSum = document.querySelector('.order__result--order');
   const resultPay = document.querySelector('.order__result--pay');
   let sum = 0;

   arrProduct.forEach(item => {
      sum = sum + (+item.price);
   });

   orderSum.textContent = sum;
   const pay = sum + (+deliveryPrice);
   resultPay.textContent = pay;
};





// ============================================ log-in page =============================== //

const logBtn = document.querySelectorAll('.header__log-in');
const logBlock = document.querySelector('.log-in');
const logForm = document.querySelector('.log-in__form');
const logFormBtn = document.querySelector('.form-log__btn');
const fildsLog = document.querySelectorAll('.form-log__fild');
const passwordBlock = document.querySelector('.form-log__fild--password');
const registration = document.querySelector('.registration');
// console.log(logBtn)

if (logForm) {

   // show/hidden page:
   logBtn.forEach(item => {
      item.addEventListener('click', (e) => {
         logBlock.classList.remove('hidden');
      })
   });

   logBlock.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('log-in__container')) {
         logBlock.classList.add('hidden')
      }
   });


   // Validation log-in:
   logForm.addEventListener('input', (e) => {
      const target = e.target;

      if (target.classList.contains('form-log__fild') && target.id === 'logMail') {
         validationData(patterns.emailPattern, target);

      } else if (target.classList.contains('form-log__fild') && target.id === 'logPassword') {
         validationData(patterns.passwordPattern, target);
      }
   });


   // adding event blur by form-log fild's:
   fildsLog.forEach(item => item.addEventListener('blur', (e) => {
      const target = e.target;
      console.log(item)

      if (target.value.length < 1) {
         target.classList.add('error');
      }
   }));


   // event "click" by form-log:
   logBlock.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('form-log__btn')) {
         const filterFilds = [...fildsLog].filter(item => !(item.classList.contains('success')));

         filterFilds.forEach(item => {
            item.classList.add('error');
            setTimeout(() => item.classList.remove('error'), 300);
            setTimeout(() => item.classList.add('error'), 600);
         });

         // show/hidden password:
      } else if (target.classList.contains('show-password')) {

         if (target.classList.contains("show-password")) {
            showHiddenPass(target);
         }

         // show/hidden registration:
      } else if (target.classList.contains('log-in__regist')) {
         logBlock.classList.add('hidden');
         registration.classList.remove('hidden');
      }
   });
}


// ============================================ registration page =============================== //
// event "click" by registration:

if (registration) {
   registration.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('show-password')) {
         showHiddenPass(target);

      } else if (target.classList.contains('registration__log-in')) {
         registration.classList.add('hidden');
         logBlock.classList.remove('hidden');

      } else if (target.classList.contains('registration__container')) {
         registration.classList.add('hidden');
      }
   })
}


// show/hidden password:
function showHiddenPass(target) {
   if (target.classList.contains('show-password')) {

      if (!target.classList.contains("active")) {
         target.previousElementSibling.type = "text";
      } else {
         target.previousElementSibling.type = "password";
      }
      target.classList.toggle("active");
   }
}


// validation registration form:
const registForm = document.querySelector('.registration-form');
const registFilds = document.querySelectorAll('.registration-form__fild');
const registFormBtn = document.querySelector('.registration-form__btn');

if (registForm) {

   // add event inpute by registration form:
   registForm.addEventListener('input', e => {
      const target = e.target;

      if (target.classList.contains('registration-form__fild') && target.id === 'regMail') {
         validationData(patterns.emailPattern, target);

      } else if (target.classList.contains('registration-form__fild') && target.id === 'regPassFirst') {
         checkPasswords();
         validationData(patterns.passwordPattern, target);

      } else if (target.classList.contains('registration-form__fild') && target.id === 'regPassSecond') {
         checkPasswords();
         validationData(patterns.passwordPattern, target);

      } else if (target.classList.contains('registration-form__fild') && target.id === 'regTel') {
         validationData(patterns.phonePattern, target);
      }
   });


   // adding event blur:
   registFilds.forEach(item => item.addEventListener('blur', (e) => {
      const target = e.target;

      if (target.value.length < 1) {
         target.classList.add('error');
      }
   }));


   // adding event click by regist form btn:
   registFormBtn.addEventListener('click', (e) => {
      const filterFilds = [...registFilds].filter(item => !(item.classList.contains('success')));
      e.preventDefault();

      filterFilds.forEach(item => {
         item.classList.add('error');
         setTimeout(() => item.classList.remove('error'), 300);
         setTimeout(() => item.classList.add('error'), 600);
      });

   });

   // checking password's:
   function checkPasswords() {
      const firstPass = [...registFilds].filter(item => item.classList.contains('registration-form__first-password'));
      const secondPass = [...registFilds].filter(item => item.classList.contains('registration-form__second-password'));

      if (!(firstPass[0].value === secondPass[0].value)) {
         firstPass[0].classList.remove('success');
         secondPass[0].classList.remove('success');
         firstPass[0].classList.add('error');
         secondPass[0].classList.add('error');
         return false

      } else if (firstPass[0].value.length > 8 && secondPass[0].value.length > 8) {
         firstPass[0].classList.remove('error');
         secondPass[0].classList.remove('error');
         firstPass[0].classList.add('success');
         secondPass[0].classList.add('success');
      }
   };
};


