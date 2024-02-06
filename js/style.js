document.getElementById("login-btn").addEventListener("click", function () {
  emailField = document.getElementById("emailField");
  email = emailField.value;

  passField = document.getElementById("passField");
  pass = passField.value;

  if (email === "zubayer@gmail.com" && pass === "Zubayer") {
    window.location = "http://127.0.0.1:5500/js/dashboard.html";
  } else {
    alert("invalid information");
  }
});
