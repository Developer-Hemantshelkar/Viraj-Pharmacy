const modal = document.getElementById("authModal");

function openAuth() {
  modal.style.display = "flex";
}

function closeAuth() {
  modal.style.display = "none";
}

function showLogin() {
  loginForm.classList.remove("hide");
  signupForm.classList.add("hide");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
}

function showSignup() {
  signupForm.classList.remove("hide");
  loginForm.classList.add("hide");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
}

function signup() {
  localStorage.setItem("user", signupUser.value);
  localStorage.setItem("pass", signupPass.value);
  alert("Signup successful!");
  showLogin();
}

function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
