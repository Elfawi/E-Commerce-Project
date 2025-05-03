// Authentication functions (simulated for client-side demo)

// Function to check if a user is logged in
function isLoggedIn() {
  return localStorage.getItem("user") !== null
}

// Function to get the current user
function getCurrentUser() {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Function to login a user
function loginUser(email, password) {
  // In a real application, this would send a request to a server
  // For this demo, we'll use some hardcoded credentials

  if (email === "user@example.com" && password === "password") {
    const user = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "user@example.com",
    }

    localStorage.setItem("user", JSON.stringify(user))
    alert("Login successful!")
    window.location.href = "index.html"
  } else {
    // Check if this email is registered
    const registeredUsers = localStorage.getItem("registeredUsers")
    if (registeredUsers) {
      const users = JSON.parse(registeredUsers)
      const user = users.find((user) => user.email === email)

      if (user && user.password === password) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          }),
        )

        alert("Login successful!")
        window.location.href = "index.html"
        return
      }
    }

    alert("Invalid email or password!")
  }
}

// Function to register a new user
function registerUser(firstName, lastName, email, password, country, address) {
  // In a real application, this would send a request to a server
  // For this demo, we'll store user data in localStorage

  let registeredUsers = localStorage.getItem("registeredUsers")
  registeredUsers = registeredUsers ? JSON.parse(registeredUsers) : []

  // Check if email is already registered
  if (registeredUsers.some((user) => user.email === email)) {
    alert("This email is already registered!")
    return
  }

  // Generate a new user ID
  const userId = registeredUsers.length > 0 ? Math.max(...registeredUsers.map((user) => user.id)) + 1 : 2 // Start from 2 since user ID 1 is reserved for the demo user

  // Create a new user
  const newUser = {
    id: userId,
    firstName,
    lastName,
    email,
    password,
    country,
    address,
  }

  // Add the new user to the registered users
  registeredUsers.push(newUser)
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

  // Log in the new user
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    }),
  )

  // Save additional user data
  const userData = {
    country: country,
    address: address,
  }

  localStorage.setItem(`userData_${newUser.id}`, JSON.stringify(userData))

  alert("Registration successful! You are now logged in.")
  window.location.href = "index.html"
}

// Function to logout the current user
function logoutUser() {
  localStorage.removeItem("user")
  alert("You have been logged out.")
  window.location.href = "index.html"
}

// Function to update the login status in the header
function updateLoginStatus() {
  const loginStatusElement = document.getElementById("login-status")
  if (!loginStatusElement) return

  if (isLoggedIn()) {
    const user = getCurrentUser()
    loginStatusElement.textContent = `Hi, ${user.firstName}`
    loginStatusElement.href = "account.html"

    // Add logout functionality
    loginStatusElement.addEventListener("click", (e) => {
      if (window.location.pathname.includes("account.html")) {
        return // Don't prevent navigation to account page
      }
      e.preventDefault()
      const confirmLogout = confirm("Are you sure you want to log out?")
      if (confirmLogout) {
        logoutUser()
      }
    })
  } else {
    loginStatusElement.textContent = "Login"
    loginStatusElement.href = "login.html"
  }
}
