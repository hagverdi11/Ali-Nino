


var header = document.getElementById("myCat");
var btns = header.getElementsByClassName("books");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-c");
  current[0].className = current[0].className.replace(" active-c", "");
  this.className += " active-c";
  });
}
  


