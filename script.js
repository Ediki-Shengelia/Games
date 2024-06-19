const burger = document.getElementById("burger");
const important = document.getElementById("important");

burger.addEventListener("click", function () {
  this.classList.toggle("clicked");
  important.classList.toggle("show");
});
