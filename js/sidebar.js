function openNav() {
    document.getElementById("sideNav").style.width = "160px";
    document.getElementById("main").style.marginRight = "160px";
}
function closeNav(){
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}