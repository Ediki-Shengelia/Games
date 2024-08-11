export function overlay() {
  let overlay = document.getElementById("overlayDivvv");
  let overlayAcc = document.getElementById("btnLogIn");

  overlayAcc.addEventListener("click", function () {
    overlay.classList.add("overlayAcc");
  });

  let closeIcon = document.getElementById("close");
  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("overlayAcc");
    document.getElementById("emailField").value = "";
    document.getElementById("passwField").value = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-passw").innerHTML = "";
    document.getElementById("eye").style.display = "none";
  });
}
