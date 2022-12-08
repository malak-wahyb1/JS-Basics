var btn = document.querySelectorAll("a");
var div = document.getElementById("texte")
btn.forEach(function(element) {
    if (element.id == "show") {
        element.onclick = function () {
            div.style.display = "block"
        }
    } 
    if (element.id == "hide") {
        element.onclick = function () {
            div.style.display = "none"
        }
    } 
});