# 👟 Modern Sneaker E-commerce Website

A sleek, high-performance e-commerce front-end built with **Vanilla JavaScript**, **HTML5**, and **CSS3**. This project features a modular architecture, dynamic data rendering, and a persistent shopping cart system.

---

## ✨ Key Features

- **Dynamic Product Rendering**: Products are automatically generated from a central `data.js` file, making it easy to manage inventory.
- **Interactive Image Gallery**: A "Quick View" gallery where users can switch the main product image by clicking thumbnails.
- **Persistent Shopping Cart**: Items added to the cart are saved in `LocalStorage`, ensuring data is not lost even after refreshing the page.
- **Live Cart Counter**: A real-time badge updates as users add or remove items.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Modular Codebase**: Organized using ES6 Modules (`import/export`) for better maintainability and scalability.

---

## 🛠 Technology Stack

- HTML5: Semantic markup for SEO and Accessibility.

- CSS3: Modern layout techniques including Flexbox, CSS Grid, and Custom Variables.

- JavaScript (ES6+): Clean, modern JS using Template Literals, Arrow Functions, and the LocalStorage API.

---

## 📂 Project Structure

```text
├── index.html          # Product details / Home page
├── product.html        # Product listing (Grid) page
├── README.md           # Project documentation
├── css/
│   ├── style.css       # Global styles and layout
│   └── responsive.css  # Media queries for mobile devices
├── js/
│   ├── data.js         # Central product database (JSON style)
│   ├── utils.js        # Helper functions (Storage, Formatting)
│   ├── cart.js         # Shopping cart logic & state management
│   └── app.js          # Main entry point & DOM orchestration
└── assets/             # Images, icons, and branding assets
```

---

## 📝 To-Do / Future Enhancements

- [ ] Add a Search Bar to filter products.

- [ ] Create a detailed Cart Drawer/Modal to view items before checkout.

- [ ] Implement a Lightbox effect for product images.

- [ ] Add a simulated "Checkout" process.
