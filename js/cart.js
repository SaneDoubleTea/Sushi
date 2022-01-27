// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector(".cart-wrapper");

// Отслеживаем клик на странице
window.addEventListener("click", function (event) {
   // Проверяем что клик был совершен по кнопке "Добавить в корзину"
   if (event.target.hasAttribute("data-cart")) {
      // Находим карточку с товаром, внутри котрой был совершен клик
      const card = event.target.closest(".card-item");

      // Собираем данные с этого товара и записываем их в единый объект productInfo
      const productInfo = {
         id: card.dataset.id,
         imgSrc: card.querySelector(".card-item__img-pic").getAttribute("src"),
         title: card.querySelector(".card-item__title").innerText,
         //кол-во шт
         /* itemsInBox: card.querySelector("[data-items-in-box]").innerText, */
         weight: card.querySelector(".card-item__weight").innerText,
         price: card.querySelector(".card-item__price").innerText,
         counter: card.querySelector("[data-counter]").innerText,
      };

      // Проверять есть ли уже такой товар в корзине
      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

      // Если товар есть в корзине
      if (itemInCart) {
         const counterElement = itemInCart.querySelector("[data-counter]");
         counterElement.innerText =
            parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
         // Если товара нет в корзине
         // Собранные данные подставим в шаблон для товара в корзине
         const cartItemHTML = ` <div class="cart-item data-id="${productInfo.id}">
                <div class="cart-item__img">
                  <img
                    src="${productInfo.imgSrc}"
                    alt="${productInfo.title}"
                    class="cart-item__img-pic"
                  />
                </div>
                <div class="cart-item__info">
                  <p class="cart-item__info-title">${productInfo.title}</p>
				  	<div class="cart-item__weight">${productInfo.weight}  </div>  
                  <div class="cart-item__info__counter counter-wrapper">
                    <div class="cart-item__info__counter-box">
                      <button data-action="minus" class="cart-item__info__counter-btn">
                        <img src="../img/корзина/minus.svg" alt="" />
                      </button>
                      <span class="cart-item__counter" data-counter>${productInfo.counter}</span>
                      <button data-action="plus" class="cart-item__info__counter-btn">
                        <img src="../img/корзина/plus.svg" alt="" />
                      </button>
                    </div>
                    <p class="cart-item__price">${productInfo.price}</p>
                  </div>
                </div>
              </div>`;

         // Отобразим товар в корзине
         cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
      }

      // Сбрасываем счетчик добавленного товара на "1"
      card.querySelector("[data-counter]").innerText = "1";

      // Отображение статуса корзины Пустая / Полная
      toggleCartStatus();

      // Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
   }
});

