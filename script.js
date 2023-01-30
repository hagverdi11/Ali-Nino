


var header = document.getElementById("myCat");
var btns = header.getElementsByClassName("books");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-c");
  current[0].className = current[0].className.replace(" active-c", "");
  this.className += " active-c";
  });
}
  

// FAQ

const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

