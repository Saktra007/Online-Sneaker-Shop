import { addToCart, updateCartBadge, updateQuantityValue } from "./cart.js";
import { products } from "./data.js";
import { formatCurrency } from "./utils.js";

const mainImg = document.getElementById("main-img");
const thumbnails = document.querySelectorAll(".thumb");
const qtyInput = document.getElementById("guantity");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const addBtn = document.getElementById("Order");
const priceDisplay = document.getElementById("Price");
const productGrid = document.getElementById("product-list");

let currentQty = 1;

const initProductPage = () => {
  if (!priceDisplay) return;

  priceDisplay.innerText = formatCurrency(products[0].price);

  plusBtn?.addEventListener("click", () => {
    currentQty = updateQuantityValue("plus", currentQty);
    qtyInput.value = currentQty;
  });
  minusBtn?.addEventListener("click", () => {
    currentQty = updateQuantityValue("minus", currentQty);
    qtyInput.value = currentQty;
  });

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
      thumbnails.forEach((t) => t.classList.remove("active"));
      e.target.classList.add("active");
      const newSrc = e.target.src.replace("-thumbnail", "");
      if (mainImg) mainImg.src = newSrc;
    });
  });
  addBtn?.addEventListener("click", () => {
    addToCart(products[0], currentQty);
    currentQty = 1;
    qtyInput.value = currentQty;
  });
};
const initGridPage = () => {
  if (!productGrid) return;
  productGrid.innerHTML = products
    .map(
      (item) => `
    <div class="product-card">
      <div class="product-img">
        <img src="${item.mainImage}" alt="${item.name}" loading="lazy" >
      </div>
      <div class="product-info">
        <span class="brand">${item.company}</span>
        <h3>${item.name}</h3>
        <div class="price-row">
          <span class="current-price">${formatCurrency(item.price)}</span>
            <span class="old-price">${formatCurrency(item.price * 2)}</span>
        </div>
        <button class="view-btn" onClick="window.location.href = 'index.html'">
            View Details
        </button>
      </div>
    </div>
  `,
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  initProductPage();
  initGridPage();
  updateCartBadge();
});
