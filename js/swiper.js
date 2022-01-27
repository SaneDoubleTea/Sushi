var swiper = new Swiper(".mySwiper", {
   //Основные
   direction: "horizontal",
   spaceBetween: 10,
   slidesPerView: 1,
   /*   slidesPerGroup: 1, */
   //беск. прокрутка
   loop: true,
   /* loopFillGroupWithBlank: true, */

   grabCursor: true,

   //центрировать слайд
   /*  centeredSlides: true, */
   /* freeMode: true, */

   /* pagination */
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //dots
      /* dynamicBullets: true, */
   },

   //Кнопки
   /*   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, */
   mousewheel: true,
   keyboard: true,

   //АвтоПлей
   /*   autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   /*  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }, */

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   breakpoints: {
      640: {
         slidesPerView: 0,
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      1024: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
   },
});

var swiper2 = new Swiper(".mySwiper2", {
   //Основные
   direction: "horizontal",
   spaceBetween: 40,
   slidesPerView: 3,
   /*   slidesPerGroup: 1, */
   //беск. прокрутка
   loop: true,
   /* loopFillGroupWithBlank: true, */

   grabCursor: false,

   //центрировать слайд
   /*  centeredSlides: true, */
   /* freeMode: true, */

   /* pagination */
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //dots
      /* dynamicBullets: true, */
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: true,
   keyboard: true,

   //АвтоПлей
   /*   autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   /*  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }, */

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   breakpoints: {
      200: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1030: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      1260: {
         slidesPerView: 2.2,
      },
      1400: {
         spaceBetween: 40,
         slidesPerView: 2,
      },
      1560: {
         spaceBetween: 40,
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".mySwiper3", {
   //Основные
   direction: "horizontal",
   spaceBetween: 40,
   slidesPerView: 3,
   slidesPerGroup: 3,
   //беск. прокрутка
   loop: true,
   /* loopFillGroupWithBlank: true, */
   /*   grabCursor: true, */

   //центрировать слайд
   /*  centeredSlides: true, */
   /* freeMode: true, */

   /* pagination */
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //dots
      /* dynamicBullets: true, */
   },

   //Кнопки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   mousewheel: true,
   keyboard: true,

   //АвтоПлей
   /*   autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, */

   //Фракции
   /* type: "fraction", */

   //scrollBar
   /*  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }, */

   //progressBar
   type: "progressbar",

   //Кастом точки с цифрами
   /*  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }, */

   /*   grid: {
    rows: 2,
  }, */

   //Брейкпоинты
   /* breakpoints: {
    640: {
      slidesPerView: 0,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }, */
});
