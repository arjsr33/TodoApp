function Login(callback) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
      alert("Login successful!");
      callback("face.html");
  } else {
      alert("Invalid username or password. Please try again.");
  }
}

document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault();
  Login(function(url) {
      window.location.href = url;
  });
});
  
  function logout() {
    alert('You have been logged out. Please log in again.');
  }

