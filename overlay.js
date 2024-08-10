export function overlay() {
  let overlay = document.getElementById("overlayDivvv");
  let overlayAcc = document.getElementById("btnLogIn");

  overlayAcc.addEventListener("click", function () {
    overlay.classList.add("overlayAcc");
  });

  let closeIcon = document.getElementById("close");
  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("overlayAcc");
  });
  
}
