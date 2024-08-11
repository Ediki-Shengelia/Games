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

  function visibility() {
    if (passwordfield.value.trim() === "") {
      ShowIcon.style.display = "none";
    } else {
      ShowIcon.style.display = "block";
    }
  }
  passwordfield.addEventListener("input", visibility);
}
