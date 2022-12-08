var num1=prompt("please enter number");
var num2=prompt("please enter number");
document.getElementById("first_number").value=num1;
document.getElementById("second_number").value=num2;

document.getElementById("validate").addEventListener("click", function() {
    alert(num1%num2);
  });