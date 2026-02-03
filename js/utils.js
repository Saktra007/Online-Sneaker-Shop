export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const updateElementText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
};
