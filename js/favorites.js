// Favorites functionality

// Mock functions (replace with actual implementations)
function isLoggedIn() {
  // Replace with your actual authentication check
  return localStorage.getItem("user") !== null;
}

function getCurrentUser() {
  // Replace with your actual user retrieval logic
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
}

function getProductById(productId) {
  // Replace with your actual product retrieval logic
  // This is a placeholder, you'll need to fetch product data from your data source
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  return products.find((product) => product.id === productId);
}

function addToCart(productId, quantity) {
  // Replace with your actual add to cart logic
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  // Replace with your actual cart count update logic
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = totalQuantity.toString();
  }
}

// Function to get favorites from localStorage
function getFavorites() {
  if (!isLoggedIn()) return [];

  const user = getCurrentUser();
  const userFavorites = JSON.parse(
    localStorage.getItem(`favorites_${user.email}`)
  );
  return userFavorites || [];
}
// createProductCards();
// Function to save favorites to localStorage
function saveFavorites(favorites) {
  if (!isLoggedIn()) return;

  const user = getCurrentUser();
  localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
}
// Function to add a product to favorites
function addToFavorites(productId) {
  if (!isLoggedIn()) {
    alert("Please log in to add items to your favorites.");
    window.location.href = "login.html?redirect=" + window.location.href;
    return;
  }
  const currentUser = getCurrentUser();
  const favorites = JSON.parse(
    localStorage.getItem(`favorites_${currentUser.email}`) || "[]"
  );
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    saveFavorites(favorites);
    return true;
  }

  return false;
}
// Function to remove a product from favorites
function removeFromFavorites(productId) {
  if (!isLoggedIn()) return false;

  let favorites = getFavorites();

  if (favorites.includes(productId)) {
    favorites = favorites.filter((id) => id !== productId);
    saveFavorites(favorites);
    return true;
  }

  return false;
}

// Function to check if a product is in favorites
function isInFavorites(productId) {
  if (!isLoggedIn()) return false;

  const favorites = getFavorites();
  return favorites.includes(productId);
}
function getProductById(productId) {
  return products.find((p) => p.id === Number.parseInt(productId));
}

// Function to load favorite items on the favorites page
function loadFavoriteItems() {
  const favoritesContainer = document.getElementById("favorites-container");
  const favoritesEmptyMessage = document.getElementById(
    "favorites-empty-message"
  );

  if (!favoritesContainer) return;

  const favorites = getFavorites();

  if (favorites.length === 0) {
    if (favoritesEmptyMessage) {
      favoritesEmptyMessage.style.display = "block";
    }
    favoritesContainer.innerHTML = "";
    return;
  }

  if (favoritesEmptyMessage) {
    favoritesEmptyMessage.style.display = "none";
  }

  let favoritesHTML = "";

  favorites.forEach((productId) => {
    const product = getProductById(productId);
    if (product) {
      favoritesHTML += `
        <div class="product-card" data-id="${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${
              product.category.charAt(0).toUpperCase() +
              product.category.slice(1)
            }</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-action">
              <a href="product-detail.html?id=${
                product.id
              }" class="btn btn-small">View Details</a>
              <button class="btn btn-small btn-outline add-to-cart-btn" data-id="${
                product.id
              }">Add to Cart</button>
            </div>
            <button class="remove-favorite-btn" data-id="${product.id}">
              <i class="fas fa-trash"></i> Remove
            </button>
          </div>
        </div>
      `;
    }
  });

  favoritesContainer.innerHTML = favoritesHTML;

  // Add event listeners for the remove buttons
  document.querySelectorAll(".remove-favorite-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      if (removeFromFavorites(productId)) {
        // Remove the product card from the DOM
        this.closest(".product-card").remove();

        // Check if there are no more favorites
        if (getFavorites().length === 0 && favoritesEmptyMessage) {
          favoritesEmptyMessage.style.display = "block";
        }
      }
    });
  });

  // Add event listeners for the add to cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      addToCart(productId, 1);
      updateCartCount();
      alert("Product added to cart!");
    });
  });
}

// Function to load favorites in the account page
function loadFavorites() {
  const favoritesList = document.getElementById("favorites-list");
  if (!favoritesList) return;

  const favorites = getFavorites();

  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-heart"></i>
        <p>You haven't added any favorites yet.</p>
        <a href="products.html" class="btn btn-small">Browse Products</a>
      </div>
    `;
    return;
  }

  let favoritesHTML = '<div class="favorites-grid">';

  favorites.forEach((productId) => {
    const product = getProductById(productId);
    if (product) {
      favoritesHTML += `
        <div class="favorite-item" data-id="${product.id}">
          <div class="favorite-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="favorite-info">
            <h4>${product.name}</h4>
            <p class="favorite-price">$${product.price.toFixed(2)}</p>
            <div class="favorite-actions">
              <a href="product-detail.html?id=${
                product.id
              }" class="btn btn-small">View</a>
              <button class="btn btn-small btn-outline move-to-cart-btn" data-id="${
                product.id
              }">Add to Cart</button>
              <button class="remove-favorite-btn" data-id="${product.id}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  });

  favoritesHTML += "</div>";
  favoritesList.innerHTML = favoritesHTML;

  // Add event listeners for the remove buttons
  document.querySelectorAll(".remove-favorite-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      if (removeFromFavorites(productId)) {
        // Remove the favorite item from the DOM
        this.closest(".favorite-item").remove();

        // Check if there are no more favorites
        if (getFavorites().length === 0) {
          favoritesList.innerHTML = `
            <div class="empty-state">
              <i class="fas fa-heart"></i>
              <p>You haven't added any favorites yet.</p>
              <a href="products.html" class="btn btn-small">Browse Products</a>
            </div>
          `;
        }
      }
    });
  });

  // Add event listeners for the move to cart buttons
  document.querySelectorAll(".move-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      addToCart(productId, 1);
      updateCartCount();
      alert("Product added to cart!");
    });
  });
}

// Update the loadProductDetails function to include favorites functionality
function updateLoadProductDetails() {
  // Store the original function
  const originalLoadProductDetails = window.loadProductDetails;

  // Override the function
  window.loadProductDetails = (productId) => {
    const productDetailContainer = document.getElementById(
      "product-detail-container"
    );
    if (!productDetailContainer) return;

    // Find the product
    const product = getProductById(Number.parseInt(productId));

    if (!product) {
      productDetailContainer.innerHTML = "<p>Product not found!</p>";
      return;
    }

    // Update page title and breadcrumb
    document.title = `${product.name} - ShopEasy`;
    document.getElementById("product-name-breadcrumb").textContent =
      product.name;

    // Check if product is in favorites
    const isFavorite = isInFavorites(product.id);
    const favoriteButtonClass = isFavorite
      ? "btn-favorite active"
      : "btn-favorite";
    const favoriteButtonText = isFavorite
      ? "Remove from Favorites"
      : "Add to Favorites";
    const favoriteButtonIcon = isFavorite ? "fas fa-heart" : "far fa-heart";

    // Generate product detail HTML
    const productDetailHTML = `
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <p class="product-detail-category">${
          product.category.charAt(0).toUpperCase() + product.category.slice(1)
        }</p>
        <p class="product-detail-price">$${product.price.toFixed(2)}</p>
        <div class="product-detail-description">
          <p>${product.description}</p>
        </div>
        <div class="product-detail-actions">
          <div class="quantity-selector">
            <button class="quantity-btn" id="decrease-quantity">-</button>
            <input type="number" id="product-quantity" class="quantity-input" value="1" min="1" max="99">
            <button class="quantity-btn" id="increase-quantity">+</button>
          </div>
          <button class="btn" id="add-to-cart-detail-btn">Add to Cart</button>
          <button class="${favoriteButtonClass}" id="toggle-favorite-btn">
            <i class="${favoriteButtonIcon}"></i> ${favoriteButtonText}
          </button>
        </div>
        <div class="product-links">
          <a href="favorites.html" class="product-link">
            <i class="fas fa-heart"></i> View Favorites
          </a>
          <a href="cart.html" class="product-link">
            <i class="fas fa-shopping-cart"></i> View Cart
          </a>
        </div>
        <div class="product-detail-meta">
          <p>SKU: PRD-${product.id.toString().padStart(6, "0")}</p>
          <p>Availability: In Stock</p>
        </div>
      </div>
    `;

    productDetailContainer.innerHTML = productDetailHTML;

    // Add event listeners
    document
      .getElementById("decrease-quantity")
      .addEventListener("click", () => {
        const quantityInput = document.getElementById("product-quantity");
        const currentValue = Number.parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
      });

    document
      .getElementById("increase-quantity")
      .addEventListener("click", () => {
        const quantityInput = document.getElementById("product-quantity");
        const currentValue = Number.parseInt(quantityInput.value);
        if (currentValue < 99) {
          quantityInput.value = currentValue + 1;
        }
      });

    document
      .getElementById("add-to-cart-detail-btn")
      .addEventListener("click", () => {
        const quantity = Number.parseInt(
          document.getElementById("product-quantity").value
        );
        addToCart(product.id, quantity);
        updateCartCount();
        alert(`${quantity} item(s) added to cart!`);
      });

    // Add favorite toggle functionality
    document
      .getElementById("toggle-favorite-btn")
      .addEventListener("click", function () {
        if (!isLoggedIn()) {
          alert("Please log in to add items to your favorites.");
          window.location.href = "login.html?redirect=" + window.location.href;
          return;
        }

        const isFavorite = isInFavorites(product.id);

        if (isFavorite) {
          removeFromFavorites(product.id);
          this.classList.remove("active");
          this.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        } else {
          addToFavorites(product.id);
          this.classList.add("active");
          this.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        }
      });
  };
}

// Call the function to update loadProductDetails
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.loadProductDetails === "function") {
    updateLoadProductDetails();
  }
});
