function addToCart(item) {
  const cart = document.getElementById("cart");
  const li = document.createElement("li");
  li.textContent = item;
  cart.appendChild(li);
}
