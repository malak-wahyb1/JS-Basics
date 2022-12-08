
let pass = document.getElementById("password");
let conf = document.getElementById("confirmation");
document.querySelector("[name='button']").onclick = function () {

  if (pass.value == conf.value) {
    alert("Password Confirmed!");
  } else {
    confirmation.style.border = "1px solid red"
    password.style.border = "1px solid red";
    alert("It doesn't match!");
  }
};