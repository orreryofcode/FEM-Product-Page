const decrementCartBtn = document.querySelector("#decrement-cart");
const incrementCartBtn = document.querySelector("#increment-cart");
const cartQty = document.querySelector("#cart-qty");

decrementCartBtn.addEventListener("click", () => {
  if (cartQty.textContent * 1 > 0) {
    cartQty.textContent = cartQty.textContent * 1 - 1;
  }
});

incrementCartBtn.addEventListener("click", () => {
  cartQty.textContent = cartQty.textContent * 1 + 1;
});
