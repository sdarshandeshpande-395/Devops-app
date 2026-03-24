let total = 0;

function addToCart(item, price) {
  console.log("clicked"); // debug

  const cart = document.getElementById("cart");

  const li = document.createElement("li");
  li.innerHTML = `${item} - ₹${price} 
    <button onclick="removeItem(this, ${price})">❌</button>`;

  cart.appendChild(li);

  total += price;
  updateTotal();
}

function removeItem(btn, price) {
  btn.parentElement.remove();
  total -= price;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").innerText = "Total: ₹" + total;
}

function searchFood() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    if (item.innerText.toLowerCase().includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function filterFood(category) {
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
