function changecolor() {

	var x =document.getElementById("change");
	var y = x.getElementsByClassName("child");
	var i;
	for ( i = 0; i < y.lenght; i++) {
		y[i].style.backgroundColor = "green";
	}
}

function color(){
	
	var x = document.getElementById("change");
	var y = x.getElementsByClassName("child");
	var i;
	for(i = 0; i < y.lenght; i ++){
		y[i].style.color = 'green';
	}
}

	function myfunction2(){
		var list = document.getElementsByTagName("ul")[0];
		list.getElementsByTagName("li")[0].innerHTML = "cake";
	}

function myfunction3(){
		var gg = document.getElementsByTagName("ul")[0];
		gg.getElementsByTagName("li")[1].innerHTML = "pastery";
	}

	function myfunction1() {
	var person = prompt("please enter your name","harry potter");
	if (person != null) {
		document.getElementById("insert").innerHTML = 
		"hello " + person + "!how are you today?";
	}
}

function insert(){
	document.writeln("<h1>Welcome to Javascript Programming!</h1>");
}

function toUP(){
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}
 function	error(){
 	x.stylebackground = "yellow";
 }

 function	error(){
 	alert("the image could not be loaded.");
 }
 
 function toYellow(x) {
 	x.style.background = "red"
 }