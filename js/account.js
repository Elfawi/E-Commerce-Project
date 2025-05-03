// Account page functionality

// Mock functions for demonstration purposes
function isLoggedIn() {
  // Replace with your actual authentication logic
  return localStorage.getItem("user") !== null
}

function getCurrentUser() {
  // Replace with your actual user retrieval logic
  const userString = localStorage.getItem("user")
  return userString ? JSON.parse(userString) : null
}

function getProductById(productId) {
  // Replace with your actual product retrieval logic
  const products = JSON.parse(localStorage.getItem("products") || "[]")
  return products.find((product) => product.id === productId)
}

function registerUser(firstName, lastName, email, password) {
  // Basic user registration logic (replace with your actual implementation)
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
  const newUser = {
    id: Math.random().toString(36).substring(2, 15), // Generate a simple unique ID
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password, // In real applications, hash the password!
  }
  registeredUsers.push(newUser)
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  localStorage.setItem("user", JSON.stringify(newUser)) // Log in the new user
}

// Function to load account information
function loadAccountInfo() {
  if (!isLoggedIn()) return

  const user = getCurrentUser()

  // Update account name
  const accountNameElement = document.getElementById("account-name")
  if (accountNameElement) {
    accountNameElement.textContent = `${user.firstName} ${user.lastName}`
  }

  // Update form fields
  document.getElementById("first-name").value = user.firstName
  document.getElementById("last-name").value = user.lastName
  document.getElementById("account-email").value = user.email

  // Get additional user data from localStorage
  const userData = localStorage.getItem(`userData_${user.id}`)
  if (userData) {
    const parsedUserData = JSON.parse(userData)

    if (parsedUserData.country) {
      document.getElementById("account-country").value = parsedUserData.country
    }

    if (parsedUserData.address) {
      document.getElementById("account-address").value = parsedUserData.address
    }
  }

  // Handle form submission
  document.getElementById("account-info-form").addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const country = document.getElementById("account-country").value
    const address = document.getElementById("account-address").value
    const currentPassword = document.getElementById("current-password").value
    const newPassword = document.getElementById("new-password").value
    const confirmPassword = document.getElementById("confirm-password").value

    // Update user data
    user.firstName = firstName
    user.lastName = lastName

    // Save user data
    localStorage.setItem("user", JSON.stringify(user))

    // Save additional user data
    const userData = {
      country: country,
      address: address,
    }

    localStorage.setItem(`userData_${user.id}`, JSON.stringify(userData))

    // Handle password change if provided
    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        alert("New passwords do not match!")
        return
      }

      // In a real application, you would verify the current password
      // For this demo, we'll just update the password

      // Get registered users
      const registeredUsers = localStorage.getItem("registeredUsers")
      if (registeredUsers) {
        const users = JSON.parse(registeredUsers)
        const userIndex = users.findIndex((u) => u.id === user.id)

        if (userIndex !== -1) {
          users[userIndex].password = newPassword
          localStorage.setItem("registeredUsers", JSON.stringify(users))

          // Clear password fields
          document.getElementById("current-password").value = ""
          document.getElementById("new-password").value = ""
          document.getElementById("confirm-password").value = ""
        }
      }
    }

    alert("Account information updated successfully!")

    // Update account name
    if (accountNameElement) {
      accountNameElement.textContent = `${firstName} ${lastName}`
    }
  })
}

// Function to load orders
function loadOrders() {
  if (!isLoggedIn()) return

  const user = getCurrentUser()
  const ordersListElement = document.getElementById("orders-list")

  if (!ordersListElement) return

  // Get orders from localStorage
  const orders = localStorage.getItem(`orders_${user.id}`)

  if (!orders || JSON.parse(orders).length === 0) {
    // No orders found
    ordersListElement.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-bag"></i>
        <p>You haven't placed any orders yet.</p>
        <a href="products.html" class="btn btn-small">Start Shopping</a>
      </div>
    `
    return
  }

  const parsedOrders = JSON.parse(orders)
  let ordersHTML = ""

  parsedOrders.forEach((order) => {
    let orderItemsHTML = ""
    let totalItems = 0

    order.items.forEach((item) => {
      const product = getProductById(item.productId)
      if (product) {
        totalItems += item.quantity
        orderItemsHTML += `
          <div class="order-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="order-item-details">
              <p class="order-item-name">${product.name}</p>
              <p class="order-item-price">$${product.price.toFixed(2)} x ${item.quantity}</p>
            </div>
          </div>
        `
      }
    })

    const orderDate = new Date(order.date)
    const formattedDate = orderDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    ordersHTML += `
      <div class="order-card">
        <div class="order-header">
          <div class="order-info">
            <p class="order-number">Order #${order.id}</p>
            <p class="order-date">${formattedDate}</p>
          </div>
          <div class="order-status ${order.status.toLowerCase()}">
            ${order.status}
          </div>
        </div>
        <div class="order-summary">
          <p>Total: <span class="order-total">$${order.total.toFixed(2)}</span></p>
          <p>Items: ${totalItems}</p>
        </div>
        <div class="order-items-preview">
          ${orderItemsHTML}
        </div>
        <div class="order-actions">
          <button class="btn btn-small">Track Order</button>
          <button class="btn btn-small btn-outline">View Details</button>
        </div>
      </div>
    `
  })

  ordersListElement.innerHTML = ordersHTML
}

// Function to update the auth.js registerUser function to include country and address
function updateRegisterUser() {
  // Store the original function
  const originalRegisterUser = window.registerUser

  // Override the function
  window.registerUser = (firstName, lastName, email, password, country, address) => {
    // Call the original function
    originalRegisterUser(firstName, lastName, email, password)

    // Get the user ID of the newly registered user
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    const newUser = registeredUsers.find((user) => user.email === email)

    if (newUser) {
      // Save additional user data
      const userData = {
        country: country,
        address: address,
      }

      localStorage.setItem(`userData_${newUser.id}`, JSON.stringify(userData))
    }
  }
}

// Call the function to update registerUser
document.addEventListener("DOMContentLoaded", () => {
  if (typeof registerUser === "function") {
    updateRegisterUser()
  }
  loadAccountInfo()
  loadOrders()
})
