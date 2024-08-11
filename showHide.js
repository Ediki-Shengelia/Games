export function showHide() {
  let passwordfield = document.getElementById("passwField");
  let ShowIcon = document.getElementById("eye");

  ShowIcon.addEventListener("click", function () {
    if (passwordfield.type === "password") {
      passwordfield.setAttribute("type", "text");
      ShowIcon.classList.remove("fa-eye");
      ShowIcon.classList.add("fa-eye-slash");
    } else {
      passwordfield.setAttribute("type", "password");
      ShowIcon.classList.add("fa-eye");
      ShowIcon.classList.remove("fa-eye-slash");
    }
  });

  function toggleVisibility() {
    // Check if the password field is empty
    if (passwordfield.value.trim() === "") {
      ShowIcon.style.display = "none";
    } else {
      ShowIcon.style.display = "block";
    }
  }

  // Attach the function to the input event of the password field
  passwordfield.addEventListener("input", toggleVisibility);
}
