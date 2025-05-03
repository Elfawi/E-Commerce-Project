// Cart functionality

// Function to get cart from localStorage

function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
function initCart() {
  saveCart(getCart());
}
initCart();
// Function to save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart ?? []));
}

// Function to add a product to cart
function addToCart(productId, quantity) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  saveCart(cart);
  updateCartCount();
}

// Function to update the quantity of a product in the cart
function updateCartItemQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.productId !== productId);
  saveCart(cart);
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cart");
}

// Function to update the cart count in the header
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (!cartCountElement) return;

  const cart = getCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  cartCountElement.textContent = itemCount;
}

// Mock getProductById function (replace with your actual implementation)
// This is just a placeholder to make the code runnable.
// In a real application, you would fetch product data from a database or API.
function getProductById(productId) {
  // Replace this with your actual product data retrieval logic
  const products = [
    { id: 1, name: "Product 1", price: 20.0, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 30.0, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 40.0, image: "product3.jpg" },
  ];

  return products.find((product) => product.id === productId);
}
function getProductById(productId) {
  return products.find((p) => p.id === Number.parseInt(productId));
}
// Function to load cart items on the cart page
function loadCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  const cart = getCart();
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let cartItemsHTML = "";

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    console.log(product);
    if (product) {
      cartItemsHTML += `
        <div class="cart-item" data-id="${product.id}">
          <div class="cart-item-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="cart-item-info">
            <h3 class="cart-item-title">${product.name}</h3>
            <p class="cart-item-price">$${product.price.toFixed(2)}</p>
            <div class="cart-item-actions">
              <div class="cart-quantity">
                <button class="cart-quantity-btn decrease-quantity">-</button>
                <input type="number" class="cart-quantity-input" value="${
                  item.quantity
                }" min="1" max="99" data-id="${product.id}">
                <button class="cart-quantity-btn increase-quantity">+</button>
              </div>
              <button class="remove-item-btn" data-id="${product.id}">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      `;
    }
  });

  cartItemsContainer.innerHTML = cartItemsHTML;

  // Add event listeners for quantity buttons
  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentNode.querySelector(".cart-quantity-input");
      const productId = Number.parseInt(input.getAttribute("data-id"));
      let quantity = Number.parseInt(input.value);

      if (quantity > 1) {
        quantity -= 1;
        input.value = quantity;
        updateCartItemQuantity(productId, quantity);
        updateCartSummary();
        updateCartCount();
      }
    });
  });

  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentNode.querySelector(".cart-quantity-input");
      const productId = Number.parseInt(input.getAttribute("data-id"));
      let quantity = Number.parseInt(input.value);

      if (quantity < 99) {
        quantity += 1;
        input.value = quantity;
        updateCartItemQuantity(productId, quantity);
        updateCartSummary();
        updateCartCount();
      }
    });
  });

  document.querySelectorAll(".cart-quantity-input").forEach((input) => {
    input.addEventListener("change", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      let quantity = Number.parseInt(this.value);

      if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        this.value = 1;
      } else if (quantity > 99) {
        quantity = 99;
        this.value = 99;
      }

      updateCartItemQuantity(productId, quantity);
      updateCartSummary();
      updateCartCount();
    });
  });

  document.querySelectorAll(".remove-item-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      removeFromCart(productId);
      this.closest(".cart-item").remove();
      updateCartSummary();
      updateCartCount();

      // Check if cart is empty after removing an item
      const cart = getCart();
      if (cart.length === 0) {
        document.getElementById("cart-empty-message").style.display = "block";
        document.getElementById("cart-container").style.display = "none";
      }
    });
  });
}

// Function to calculate subtotal, tax, shipping, and total
function calculateCartSummary() {
  const cart = getCart();

  let subtotal = 0;

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  });

  // Calculate shipping (free for orders over $100)
  const shipping = subtotal > 100 ? 0 : 10;

  // Calculate tax (8.5%)
  const tax = subtotal * 0.085;

  // Calculate total
  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total,
  };
}

// Function to update the cart summary
function updateCartSummary() {
  const subtotalElement = document.getElementById("cart-subtotal");
  const shippingElement = document.getElementById("cart-shipping");
  const taxElement = document.getElementById("cart-tax");
  const totalElement = document.getElementById("cart-total");

  if (!subtotalElement || !shippingElement || !taxElement || !totalElement)
    return;

  const { subtotal, shipping, tax, total } = calculateCartSummary();

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent =
    shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Function to load order summary on the checkout page
function loadOrderSummary() {
  const orderItemsContainer = document.getElementById("order-items");
  const subtotalElement = document.getElementById("order-subtotal");
  const shippingElement = document.getElementById("order-shipping");
  const taxElement = document.getElementById("order-tax");
  const totalElement = document.getElementById("order-total");

  if (
    !orderItemsContainer ||
    !subtotalElement ||
    !shippingElement ||
    !taxElement ||
    !totalElement
  )
    return;

  const cart = getCart();
  let orderItemsHTML = "";

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    if (product) {
      orderItemsHTML += `
        <div class="order-item">
          <div class="order-item-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="order-item-info">
            <p class="order-item-title">${product.name}</p>
            <p class="order-item-price">$${product.price.toFixed(2)}</p>
            <p class="order-item-quantity">Quantity: ${item.quantity}</p>
          </div>
        </div>
      `;
    }
  });

  orderItemsContainer.innerHTML = orderItemsHTML;

  const { subtotal, shipping, tax, total } = calculateCartSummary();

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent =
    shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}
