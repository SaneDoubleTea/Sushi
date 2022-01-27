function toggleCartStatus() {
   const cartWrapper = document.querySelector(".cart-wrapper");
   const cartEmptyBadge = document.querySelector("[data-cart-empty]");
   const cartTitle = document.querySelector(".cart__title");
   const orderForm = document.querySelector("#order-form");

   if (cartWrapper.children.length > 0) {
      console.log("FULL");
      cartEmptyBadge.classList.add("none");
      cartTitle.classList.remove("none");
      orderForm.classList.remove("none");
   } else {
      console.log("EMPTY");
      cartEmptyBadge.classList.remove("none");
      orderForm.classList.add("none");
   }
}
