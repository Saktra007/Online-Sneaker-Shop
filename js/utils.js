export const formatCurrency = (amount) => `$${amount.toFixed(2)}`;


export const calculateDiscountPrice = (originalPrice, discountPercentage) => {
  if (!discountPercentage || discountPercentage <= 0) return originalPrice;
  return originalPrice * (discountPercentage / 100);
};

export const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const truncateText = (text, limit = 50) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};
