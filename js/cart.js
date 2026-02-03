export const handleQuantity = (action, currentQty) => {
  if (action === "plus") return currentQty + 1;
  if (action === "minus" && currentQty > 1) return currentQty - 1;
  return currentQty;
};

export const calculateTotal = (qty, price) => qty * price;