"use strict";
// burger bar

const burger = document.getElementById("burger");
const important = document.getElementById("important");

burger.addEventListener("click", function () {
  this.classList.toggle("clicked");
  important.classList.toggle("show");
});

// scroll to top
const topIcon = document.getElementById("top");

topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 500) {
    topIcon.classList.add("activeIcon");
  } else {
    topIcon.classList.remove("activeIcon");
  }
});

//header bg color change

let BgColorChange = document.querySelector(".navigation-bg");
window.addEventListener("scroll", function () {
  if (this.scrollY > 850) {
    BgColorChange.classList.add("newBgColor");
  } else {
    BgColorChange.classList.remove("newBgColor");
  }
});
