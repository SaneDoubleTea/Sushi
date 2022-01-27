const navBtn = document.querySelector(".nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const navBtnClose = document.querySelector(".nav-btn-close");
//cart
const cartBtn = document.querySelector(".cart-btn");
const cartNav = document.querySelector(".cart-mobile");
const cartBtnClose = document.querySelector(".cart-btn-close");
const body = document.body;

//Клик по кнопке
navBtn.addEventListener("click", function (event) {
   event.stopPropagation();
   toggleMobilenav();
});
cartBtn.addEventListener("click", function (event) {
   event.stopPropagation();
   toggleCartOpen();
});

navBtnClose.addEventListener("click", function (event) {
   toggleMobilenav();
});
cartBtnClose.addEventListener("click", function (event) {
   toggleCartOpen();
});

//Клик по окну за пределами навигации
window.addEventListener("click", function () {
   if (body.classList.contains("no-scroll")) {
      toggleMobilenav();
        toggleCartOpen();
   }
});


//останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener("click", function (event) {
   event.stopPropagation();
});
cartNav.addEventListener("click", function (event) {
   event.stopPropagation();
});

function toggleMobilenav() {
   mobileNav.classList.toggle("mobile-nav-active");
   /* navBtn.classList.toggle("nav-btn-close"); */
   body.classList.toggle("no-scroll");
}
function toggleCartOpen() {
   cartNav.classList.toggle("cart-mobile-active");
   /* navBtn.classList.toggle("nav-btn-close"); */
   body.classList.toggle("no-scroll");
}
//статичный хедер при скролле
(function () {
   const header = document.querySelector(".header");
   window.onscroll = () => {
      if (window.pageYOffset > 50) {
         header.classList.add("header--active");
      } else {
         header.classList.remove("header--active");
      }
   };
})();
