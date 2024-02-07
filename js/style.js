document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("emailField");
  const email = emailField.value;

  const passField = document.getElementById("passField");
  const pass = passField.value;

  if (email === "zubayer@gmail.com" && pass === "Zubayer") {
    window.location = "http://127.0.0.1:5500/dashboard.html";
  } else {
    alert("invalid information");
  }
});
