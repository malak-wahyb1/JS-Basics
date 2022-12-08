var age=prompt("How old are you");
var a= document.getElementById("age");
a.value=age;
document.getElementById("validate").addEventListener('click',function(){
if (age > 18) {
    alert("you are over 18");
  }
  else{
    alert("you are under 18" );
  }
});