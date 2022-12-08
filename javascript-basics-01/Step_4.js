 var Name= prompt("what is your name?");
 var surname= prompt("what is your surname?");
 var city= prompt("what is your city?");
 document.getElementById("name").value=Name;
 document.getElementById("surname").value=surname;
 document.getElementById("city").value=city;


//  var button = document.getElementById("validate");
// //  button.('onclick', function(){
// // console.log(button);
// //  });


//  var myFunctionReference = function() {
//     console.log("hello");
//  alert("Nom :"+Name+"\n prenom :"+surname+"\n ville :"+city);

//   }

// button.addEventListener('onclick', myFunctionReference);


document.getElementById("validate").addEventListener("click", function() {
    alert("Name: "+Name+"\n Surname: "+surname+"\n city :"+city);
  });