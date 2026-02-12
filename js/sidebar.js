console.log(getElementById('main').style.marginRight);
function openNav() {
	document.getElementById("sideNav").style.width = "200px";
	document.getElementById("main").style.marginRight = "200px";
}
function closeNav() {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("main").style.marginRight = "10";
}
