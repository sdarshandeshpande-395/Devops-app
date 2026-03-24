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
