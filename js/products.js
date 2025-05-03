const products = [
  {
    id: 1,
    name: "Smartphone X",
    category: "electronics",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1570125412935-688dd0989229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGklMjBwaG9uZSUyMHh8ZW58MHwwfDB8fHww",
    description:
      "The latest smartphone with advanced features, a stunning display, and an exceptional camera system.",
    tags: ["smartphone", "mobile", "tech", "camera", "5G"],
  },
  {
    id: 2,
    name: "Laptop Pro",
    category: "electronics",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFidG9wfGVufDB8MHwwfHx8MA%3D%3D",
    description:
      "Powerful laptop with a high-resolution display, fast processor, and long battery life.",
    tags: ["laptop", "computer", "tech", "work", "gaming"],
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "electronics",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfDB8MHx8fDA%3D",
    description:
      "Track your fitness, receive notifications, and more with this feature-packed smart watch.",
    tags: ["watch", "fitness", "health", "tech", "wearable"],
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "electronics",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8MHwwfHx8MA%3D%3D",
    description:
      "Immersive sound quality with noise cancellation and comfortable design for all-day wear.",
    tags: ["headphones", "audio", "music", "wireless", "bluetooth"],
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    category: "clothing",
    price: 29.99,
    image:
      "https://media.istockphoto.com/id/514685863/photo/going-for-the-laid-back-look.webp?a=1&b=1&s=612x612&w=0&k=20&c=FPZOEW5h37yf8PYBvWISfE1f1xbEmrd3e2kE84EiWN4=",
    description:
      "Comfortable cotton t-shirt with a modern fit, perfect for everyday wear.",
    tags: ["men", "shirt", "clothing", "casual", "cotton"],
  },
  {
    id: 6,
    name: "Women's Jeans",
    category: "clothing",
    price: 59.99,
    image:
      "https://plus.unsplash.com/premium_photo-1691367279139-218a8b8dcbb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stylish and comfortable jeans with a flattering fit, made from high-quality denim.",
    tags: ["women", "jeans", "denim", "pants", "clothing"],
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "clothing",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZyUyMHNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
    description:
      "Lightweight and supportive running shoes designed for comfort and performance.",
    tags: ["shoes", "running", "sports", "footwear", "athletic"],
  },
  {
    id: 8,
    name: "Winter Jacket",
    category: "clothing",
    price: 129.99,
    image:
      "https://media.istockphoto.com/id/184362036/photo/red-winter-jacket-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=RKa9VvqnKGHHB2w2S05o4d0vz3HdY2lw19yCma0RGDc=",
    description:
      "Warm and durable winter jacket with a waterproof outer shell and cozy insulation.",
    tags: ["jacket", "winter", "outerwear", "cold", "waterproof"],
  },
  {
    id: 9,
    name: "Coffee Maker",
    category: "home",
    price: 79.99,
    image:
      "https://media.istockphoto.com/id/1336091828/photo/college-student-at-dorm-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=LzOZ-c20gFQoY7EL3Lzhx9ZAjIhwZL0doLjm_miX0B0=",
    description:
      "Brew perfect coffee every time with this easy-to-use and reliable coffee maker.",
    tags: ["coffee", "kitchen", "appliance", "brewing", "morning"],
  },
  {
    id: 10,
    name: "Blender",
    category: "home",
    price: 49.99,
    image:
      "https://plus.unsplash.com/premium_photo-1681826671576-8d612accc77a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxlbmRlcnxlbnwwfDB8MHx8fDA%3D",
    description:
      "Powerful blender for smoothies, soups, and more, with multiple speed settings.",
    tags: ["blender", "kitchen", "appliance", "smoothie", "cooking"],
  },
  {
    id: 11,
    name: "Bedding Set",
    category: "home",
    price: 99.99,
    image:
      "https://media.istockphoto.com/id/186699516/photo/blankets-and-pillow.webp?a=1&b=1&s=612x612&w=0&k=20&c=qvHcsWNB_XPI99w-_dWHGiOXJQgepJyXK9-zs3CjCng=",
    description:
      "Soft and luxurious bedding set with sheets, pillowcases, and a duvet cover.",
    tags: ["bedding", "sheets", "bedroom", "sleep", "comfort"],
  },
  {
    id: 12,
    name: "Kitchen Knife Set",
    category: "home",
    price: 69.99,
    image:
      "https://media.istockphoto.com/id/1226075330/photo/kitchen-knifes-inventory-on-wooden-backgroun-in-a-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=KDGRGdj_vBavY6OM1MS6uPW9lnaxRs_YgtjdIexlOlI=",
    description:
      "High-quality stainless steel knife set for all your kitchen cutting needs.",
    tags: ["knives", "kitchen", "cooking", "utensils", "chef"],
  },
  {
    id: 13,
    name: "Best-selling Novel",
    category: "books",
    price: 19.99,
    image:
      "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=QsnFz7rujdYTsK1Ts5IpkyTHCWb_ZtJONvTOAW2hPCI=",
    description:
      "The latest best-selling novel that's captivating readers around the world.",
    tags: ["novel", "fiction", "reading", "bestseller", "book"],
  },
  {
    id: 14,
    name: "Cookbook",
    category: "books",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1546552580-9427ccb15af4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29va2Jvb2t8ZW58MHwwfDB8fHww",
    description:
      "A collection of delicious recipes with step-by-step instructions and beautiful photography.",
    tags: ["cookbook", "recipes", "cooking", "food", "book"],
  },
  {
    id: 15,
    name: "Self-help Book",
    category: "books",
    price: 17.99,
    image:
      "https://media.istockphoto.com/id/1141314072/photo/books-of-training-and-development-in-front-grey-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=C89AypApJbG7jdYvIYJ2ctQLSHXdnX4xqfCVknUt230=",
    description:
      "Discover insights and strategies to improve your life and achieve your goals.",
    tags: ["self-help", "personal", "development", "motivation", "book"],
  },
  {
    id: 16,
    name: "Children's Book",
    category: "books",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1455884981818-54cb785db6fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpbGRyZW4ncyUyMEJvb2t8ZW58MHwwfDB8fHww",
    description:
      "A charming and engaging story for children, with colorful illustrations.",
    tags: ["children", "kids", "story", "illustrated", "book"],
  },
];

/**
 * Cart functionality
 */
function addToCart(productId, quantity) {
  // Get current cart from localStorage or initialize empty array
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if product already exists in cart
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex >= 0) {
    // Update quantity if product already in cart
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }
  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart ?? []));

  // Update cart count display
  updateCartCount();

  console.log(`Added product ${productId} to cart with quantity ${quantity}`);
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (!cartCountElement) return;

  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Calculate total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Update display
  cartCountElement.textContent = totalQuantity;

  console.log("Updated cart count:", totalQuantity);
}

/**
 * Favorites functionality
 */
function isInFavorites(productId) {
  if (!isLoggedIn()) return false;

  const currentUser = getCurrentUser();
  const favorites = JSON.parse(
    localStorage.getItem(`favorites_${currentUser.email}`) || "[]"
  );

  return favorites.includes(productId);
}

function addToFavorites(productId) {
  if (!isLoggedIn()) return false;

  const currentUser = getCurrentUser();
  const favorites = JSON.parse(
    localStorage.getItem(`favorites_${currentUser.email}`) || "[]"
  );
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem(
      `favorites_${currentUser.email}`,
      JSON.stringify(favorites)
    );
    console.log(`Added product ${productId} to favorites`);
    return true;
  }

  return false;
}

function removeFromFavorites(productId) {
  if (!isLoggedIn()) return false;

  const currentUser = getCurrentUser();
  const favorites = JSON.parse(
    localStorage.getItem(`favorites_${currentUser.email}`) || "[]"
  );
  const index = favorites.indexOf(productId);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem(
      `favorites_${currentUser.email}`,
      JSON.stringify(favorites)
    );
    console.log(`Removed product ${productId} from favorites`);
    return true;
  }

  return false;
}

/**
 * Authentication helpers
 */
function isLoggedIn() {
  return localStorage.getItem("currentUser") !== null;
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "{}");
}

/**
 * Product display functions
 */

// Create a product card HTML
function createProductCard(product) {
  // Check if the product is in favorites
  const isFavorite = isInFavorites(product.id);
  const favoriteIcon = isFavorite
    ? '<button class="favorite-btn active" data-id="' +
      product.id +
      '"><i class="fas fa-heart"></i></button>'
    : '<button class="favorite-btn" data-id="' +
      product.id +
      '"><i class="far fa-heart"></i></button>';
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${favoriteIcon}
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-category">${
          product?.category?.charAt(0)?.toUpperCase() +
          product?.category?.slice(1)
        }</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <div class="product-action">
          <a href="product-detail.html?id=${
            product.id
          }" class="btn btn-small btn-details">View Details</a>
          <button class="btn btn-small btn-outline ${
            JSON?.parse(localStorage.getItem("cart")?.includes(product?.id))
              ? "remove-from-cart-btn"
              : "add-to-cart-btn"
          }" data-id="${product.id}">${
    JSON?.parse(localStorage.getItem("cart")?.includes(product.id))
      ? "remove from cart"
      : "add to cart"
  }</button>
        </div>
      </div>
    </div>
  `;
}
// Load featured products on the homepage
function loadFeaturedProducts() {
  const featuredProductsContainer =
    document.getElementById("featured-products");
  if (!featuredProductsContainer) return;

  // Select 4 random products for the featured section
  const featuredProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  let featuredProductsHTML = "";
  featuredProducts.forEach((product) => {
    featuredProductsHTML += createProductCard(product);
  });

  featuredProductsContainer.innerHTML = featuredProductsHTML;

  // Add event listeners
  addProductCardEventListeners();
  removeProductCardEventListeners();
}
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.productId !== productId);
  saveCart(cart);
}
// Add event listeners to product cards
function addProductCardEventListeners() {
  // Add to cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      addToCart(productId, 1);
      alert("Product added to cart!");
    });
  });
  // Favorite buttons
  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));

      if (!isLoggedIn()) {
        alert("Please log in to add items to your favorites.");
        window.location.href =
          "login.html?redirect=" + encodeURIComponent(window.location.href);
        return;
      }
      if (this.classList.contains("active")) {
        removeFromFavorites(productId);
        this.classList.remove("active");
        this.innerHTML = '<i class="far fa-heart"></i>';
      } else {
        addToFavorites(productId);
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-heart"></i>';
      }
    });
  });
}
function removeProductCardEventListeners() {
  // Add to cart buttons
  document.querySelectorAll(".remove-from-cart-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      removeFromCart(productId);
      alert("Product removed from cart!");
      loadAllProducts();
    });
  });

  // Favorite buttons
  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));

      if (!isLoggedIn()) {
        alert("Please log in to add items to your favorites.");
        window.location.href =
          "login.html?redirect=" + encodeURIComponent(window.location.href);
        return;
      }
      if (!this.classList.contains("active")) {
        removeFromFavorites(productId);
        this.classList.remove("active");
        this.innerHTML = '<i class="far fa-heart"></i>';
      } else {
        addToFavorites(productId);
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-heart"></i>';
      }
    });
  });
}
// Load all products with filtering and sorting
function loadAllProducts() {
  const productsContainer = document.getElementById("products-container");
  if (!productsContainer) return;

  // Get filter values
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sortFilter = document.getElementById("sort-filter");

  // Get URL parameters for search and category
  const urlParams = new URLSearchParams(window.location.search);
  const urlSearchTerm = urlParams.get("search");
  const urlCategory = urlParams.get("category");

  // Set filter values from URL parameters if available
  if (searchInput && urlSearchTerm) {
    searchInput.value = urlSearchTerm;
  }

  if (categoryFilter && urlCategory) {
    categoryFilter.value = urlCategory;
  }

  // Get current filter values
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const categoryValue = categoryFilter
    ? categoryFilter.value
    : urlCategory || "";
  const sortValue = sortFilter ? sortFilter.value : "default";

  // Filter products
  let filteredProducts = [...products];

  // Apply search filter if search term exists
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) => {
      // Search in name and description
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descriptionMatch = product.description
        .toLowerCase()
        .includes(searchTerm);

      // Search in tags if available
      const tagMatch = product.tags
        ? product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
        : false;

      return nameMatch || descriptionMatch || tagMatch;
    });
  }

  // Apply category filter if category is selected
  if (categoryValue) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categoryValue
    );
  }

  // Sort products
  switch (sortValue) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      // Default sorting (by id)
      filteredProducts.sort((a, b) => a.id - b.id);
  }

  // Generate HTML for products
  let productsHTML = "";

  if (filteredProducts.length === 0) {
    productsHTML = `
      <div class="no-products">
        <i class="fas fa-search fa-3x"></i>
        <p>No products found. Try adjusting your filters.</p>
        <button class="btn" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
  } else {
    // Show search results count
    productsHTML = `
      <div class="search-results-count">
        Found ${filteredProducts.length} product${
      filteredProducts.length !== 1 ? "s" : ""
    }
        ${searchTerm ? `for "${searchTerm}"` : ""}
        ${categoryValue ? `in ${categoryValue}` : ""}
      </div>
    `;

    // Add product cards
    productsHTML += '<div class="products-grid">';
    filteredProducts.forEach((product) => {
      productsHTML += createProductCard(product);
    });
    productsHTML += "</div>";
  }

  productsContainer.innerHTML = productsHTML;

  // Add event listeners
  addProductCardEventListeners();
  //
  removeProductCardEventListeners();
}

// Reset all filters
function resetFilters() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sortFilter = document.getElementById("sort-filter");

  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "";
  if (sortFilter) sortFilter.value = "default";

  // Clear URL parameters
  window.history.pushState({}, "", window.location.pathname);

  // Reload products
  loadAllProducts();
}

// Load product details
function loadProductDetails(productId) {
  const productDetailContainer = document.getElementById(
    "product-detail-container"
  );
  if (!productDetailContainer) return;

  // Find the product
  const product = getProductById(productId);

  if (!product) {
    productDetailContainer.innerHTML = `
      <div class="product-not-found">
        <i class="fas fa-exclamation-circle fa-3x"></i>
        <h3>Product not found!</h3>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <a href="products.html" class="btn">Browse Products</a>
      </div>
    `;
    return;
  }

  // Update page title and breadcrumb
  document.title = `${product.name} - ShopEasy`;
  const breadcrumb = document.getElementById("product-name-breadcrumb");
  if (breadcrumb) {
    breadcrumb.textContent = product.name;
  }

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
      <div class="product-tags">
        ${
          product.tags
            ? product.tags
                .map((tag) => `<span class="product-tag">${tag}</span>`)
                .join("")
            : ""
        }
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
  document.getElementById("decrease-quantity").addEventListener("click", () => {
    const quantityInput = document.getElementById("product-quantity");
    const currentValue = Number.parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  document.getElementById("increase-quantity").addEventListener("click", () => {
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

      // Show confirmation message
      const confirmationMessage = document.createElement("div");
      confirmationMessage.className = "add-to-cart-confirmation";
      confirmationMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <p>${quantity} item(s) added to cart!</p>
    `;
      document.body.appendChild(confirmationMessage);

      // Remove confirmation message after 3 seconds
      setTimeout(() => {
        confirmationMessage.classList.add("fade-out");
        setTimeout(() => {
          document.body.removeChild(confirmationMessage);
        }, 500);
      }, 3000);
    });

  // Add favorite toggle functionality
  document
    .getElementById("toggle-favorite-btn")
    .addEventListener("click", function () {
      if (!isLoggedIn()) {
        alert("Please log in to add items to your favorites.");
        window.location.href =
          "login.html?redirect=" + encodeURIComponent(window.location.href);
        return;
      }

      if (this.classList.contains("active")) {
        removeFromFavorites(product.id);
        this.classList.remove("active");
        this.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
      } else {
        addToFavorites(product.id);
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
      }
    });
}

// Load related products
function loadRelatedProducts(productId) {
  const relatedProductsContainer = document.getElementById("related-products");
  if (!relatedProductsContainer) return;

  // Find the current product
  const currentProduct = getProductById(productId);
  if (!currentProduct) return;

  // Get products in the same category
  let relatedProducts = products
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // If we don't have enough related products in the same category, add random products
  if (relatedProducts.length < 4) {
    const additionalProducts = products
      .filter(
        (p) =>
          p.category !== currentProduct.category && p.id !== currentProduct.id
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 4 - relatedProducts.length);

    relatedProducts = [...relatedProducts, ...additionalProducts];
  }

  // Generate HTML for related products
  let relatedProductsHTML = "";
  relatedProducts.forEach((product) => {
    relatedProductsHTML += createProductCard(product);
  });

  relatedProductsContainer.innerHTML = relatedProductsHTML;

  // Add event listeners
  addProductCardEventListeners();
  removeProductCardEventListeners();
}

// Get product by ID
function getProductById(productId) {
  return products.find((p) => p.id === Number.parseInt(productId));
}

// Initialize product page functionality
document.addEventListener("DOMContentLoaded", () => {
  // Update cart count
  updateCartCount();

  // Check if we're on the product detail page
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId && document.getElementById("product-detail-container")) {
    loadProductDetails(productId);
    loadRelatedProducts(productId);
  }

  // Check if we're on the products page
  if (document.getElementById("products-container")) {
    loadAllProducts();

    // Add event listeners for filter changes
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (categoryFilter) {
      categoryFilter.addEventListener("change", function () {
        // Update URL with category parameter
        const url = new URL(window.location.href);
        if (this.value) {
          url.searchParams.set("category", this.value);
        } else {
          url.searchParams.delete("category");
        }
        window.history.pushState({}, "", url);

        loadAllProducts();
      });
    }

    if (sortFilter) {
      sortFilter.addEventListener("change", loadAllProducts);
    }
  }

  // Check if we're on the homepage
  if (document.getElementById("featured-products")) {
    loadFeaturedProducts();
  }
});
