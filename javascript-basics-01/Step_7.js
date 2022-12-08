var a = prompt("How match size");
var b = prompt("What is your birth year");
// var a=document.getElementById("validate"); 
var inp1=document.getElementById("shoe_size");
var inp2=document.getElementById("year");
inp1.value=a;
inp2.value=b;
console.log(a);
  document.getElementById("validate").addEventListener('click',function(){
    var cal=a*2;
        cal+=5;
        cal*=50;
        cal-=b;
        cal+=1766;
    alert (cal)
  });
// var val=document.getElementById('validate');
// val.addEventListener("click",function(){
//     var cal=a2;
//     cal+=5;
//     cal=50;
//     cal-=b;
//     cal+=1766;
// alert ("The result is : "+ cal)});