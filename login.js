"use strict";

export function logIn() {
  let formEl = document.getElementById("loginn");

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = {};
    let emailValue = document.getElementById("emailField").value;

    if (emailValue.trim() === "") {
      errors.email = "Email value cannot be empty.";
    }
    let passwvalue = document.getElementById("passwField").value;
    if (passwvalue.trim() === "") {
      errors.passw = "Password value cannot be empty.";
    }

    this.querySelectorAll(".error-text").forEach((element) => {
      element.textContent = "";
    });

    for (let index in errors) {
      let errorElement = document.getElementById("error-" + index);
      if (errorElement) {
        errorElement.innerText = errors[index];
      }
    }

    if (Object.keys(errors).length === 0) {
      alert("You can not access at this moment.");
      document.getElementById("overlayDivvv").classList.remove("overlayAcc");
    }
  });
}
