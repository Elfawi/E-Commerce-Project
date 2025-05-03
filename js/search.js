/**
 * Search functionality for ShopEasy e-commerce website
 * This file handles all search-related functions across the site
 */

// Store the last search query in session storage to maintain context between pages
function saveSearchQuery(query) {
  sessionStorage.setItem("lastSearchQuery", query);
}

// Get the last search query from session storage
function getLastSearchQuery() {
  return sessionStorage.getItem("lastSearchQuery") || "";
}

// Initialize search form in the header
function initHeaderSearch() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("header-search-input");

  if (!searchForm || !searchInput) return;

  // Pre-fill search input with last query if available
  const lastQuery = getLastSearchQuery();
  if (lastQuery) {
    searchInput.value = lastQuery;
  }

  // Handle search form submission
  searchForm.addEventListener("submit", (e) => {
    const query = searchInput.value.trim();

    if (query === "") {
      e.preventDefault();
      return;
    }

    saveSearchQuery(query);

    // If we're already on the products page, prevent default and trigger search directly
    if (window.location.pathname.includes("products.html")) {
      e.preventDefault();

      // Update URL with search parameter without reloading the page
      const url = new URL(window.location.href);
      url.searchParams.set("search", query);
      window.history.pushState({}, "", url);

      // Trigger search on the products page
      if (typeof loadAllProducts === "function") {
        loadAllProducts();
      }
    }
    // Otherwise, form will submit normally to products.html with search parameter
  });
}

// Initialize search on the products page
function initProductsPageSearch() {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  if (!searchInput || !searchButton) return;

  // Get search query from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");

  // If there's a search query in the URL, use it
  if (searchQuery) {
    searchInput.value = searchQuery;
    saveSearchQuery(searchQuery);
  } else {
    // Otherwise, try to use the last search query
    const lastQuery = getLastSearchQuery();
    if (lastQuery) {
      searchInput.value = lastQuery;
    }
  }

  // Handle search button click
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      saveSearchQuery(query);

      // Update URL with search parameter
      const url = new URL(window.location.href);
      url.searchParams.set("search", query);
      window.history.pushState({}, "", url);

      // Trigger search
      if (typeof loadAllProducts === "function") {
        loadAllProducts();
      }
    }
  });

  // Handle input changes for real-time search
  searchInput.addEventListener("input", () => {
    // Debounce to avoid too many searches while typing
    clearTimeout(searchInput.debounceTimer);
    searchInput.debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim();
      if (query !== "") {
        saveSearchQuery(query);

        // Update URL with search parameter
        const url = new URL(window.location.href);
        url.searchParams.set("search", query);
        window.history.pushState({}, "", url);

        // Trigger search
        if (typeof loadAllProducts === "function") {
          loadAllProducts();
        }
      }
    }, 500); // 500ms debounce
  });
}

// Initialize search functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initHeaderSearch();
  initProductsPageSearch();
});
