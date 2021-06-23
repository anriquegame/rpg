var vida = 5;
var normal = "   para cima é normal";
var bom = "   para cima é bom";
var extremo = "   para cima é extremo";
//var titulo = document.querySelector('.titulo');
//titulo.write(vida);
//document.getElementById("demo") = vida;
function myFunction() {
  var x = document.getElementById("btn1").value;
  var a = Math.trunc(x / 2);
  var b = Math.round(x / 10);
  if (x>=1){
  var y = 21 - x;
  if (y==1)
  	var y = 2;
  }
  else{
  	var y = 20;
  }
  if (x>=2){
  var z = 21 - a;
  }
  else{
  	var z = 20
  }
  if (x>=10){
  	if (x/10==1.5){
  		var w = 20;
  	}
  	else{
  		var w = 21 - b;
  	}
  }
  else{
  	var w = 20;
  }
  document.getElementById("demo").innerHTML = x + " é o valor do atributo";
  document.getElementById("demo1").innerHTML = y + normal;
  document.getElementById("demo2").innerHTML = z + bom;
  document.getElementById("demo3").innerHTML = w + extremo;
}