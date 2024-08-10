"use strict";

export function validation() {
  let email = document.getElementById("emailField");
  email.addEventListener("keyup", emailRegex);
  function emailRegex() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValue = document.getElementById("emailField").value;
    let errorEmail = document.getElementById("error-email");

    if (emailPattern.test(emailValue)) {
      errorEmail.textContent = "your email is valid";
      errorEmail.style.color = "green";
    } else {
      errorEmail.textContent = "your email is Invalid";
      errorEmail.style.color = "gold";
    }
    if (emailValue.trim() === "") {
      errorEmail.innerHTML = "";
    }
  }
  //   ?
  let password = document.getElementById("passwField");
  password.addEventListener("keyup", passwordRegex);
  function passwordRegex() {
    let passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passwordValue = document.getElementById("passwField").value;
    let errorPassword = document.getElementById("error-passw");

    if (passwordPattern.test(passwordValue)) {
      errorPassword.textContent = "your password is valid";
      errorPassword.style.color = "green";
    } else {
      errorPassword.textContent = "your password is Invalid";
      errorPassword.style.color = "gold";
    }
    if (passwordValue.trim() === "") {
      errorPassword.innerHTML = "";
    }
  }
}
