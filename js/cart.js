import { getFromStorage, saveToStorage } from "./utils.js";

let cart = getFromStorage("sneaker_cart") || [];

export const updateQuantityValue = (action, currentQty) => {
  if (action === "plus") return currentQty + 1;
  if (action === "minus" && currentQty > 1) return currentQty - 1;
  return currentQty;
};

export const addToCart = (product, quantity) => {
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.mainImage,
      quantity: quantity,
    });
  }
  saveToStorage("sneaker_cart", cart);
  updateCartBadge();
};

export const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  saveToStorage("sneaker_cart", cart);
  updateCartBadge();
};

export const updateCartBadge = () => {
  const badge = document.getElementById("cart-count");
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.innerText = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  }
};

export const getCartTotal = () =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const getCartItem = () => cart;
