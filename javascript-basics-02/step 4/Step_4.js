var button = document.querySelector("button");
var Name = document.getElementById("name");
var surName = document.getElementById("surname");
var City = document.getElementById("city");
button.addEventListener("click",function(){
    if (confirm("Do you want to Rest ?")) {
    Name.value = "";
    surName.value = "";
    City.value = "";
}
else {
    alert("okay");
}
});