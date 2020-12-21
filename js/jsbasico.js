var numero1;
numero1 = 12;
var numero2 = 3;
var numero3 = "45";
var palabra = 'hola "mundo"';
var logica = false;
var decimales = 5.5;
var objeto = {"nombre":"milton","apellido":"yujra"};
var lista2 = [1,2,3,4,5,6,7]
var lista = ["milton", numero2, logica, "mundo",lista2, objeto]


/*numero3 = parseInt("45");/*convertir de cadena a entero*/
/*numero3 = parseFloat("45.50");/*convertir de cadena a decimal*/
/*console.log(numero2);/*es para imprimir console.log()*/
/*console.log(numero3);
console.log(lista);
console.log(lista[4][3]);
console.log(objeto);

var cadena = "Hola,mundo";
console.log(cadena.length);/*mide el tamaño o la cantidad de letras o cadena*/
/*console.log(cadena.charAt(cadena.length - 1));saca el indice de la posicion de la cadena*/
/*console.log(cadena.charAt(5));/*saca el indice de la posicion de la cadena*/
//console.log(cadena.indexOf("o"));
//console.log(cadena.lastIndexOf("o"));
//console.log(cadena.replace("Hola","hi"));/*remplza lo que quieres escribir*/
//console.log(cadena.search("mundo")); /* te avisa la posicion donde esta*/
//console.log(cadena.split(","));/*separa las dos posiciones donde estan*/
//console.log(cadena.substr(0,3));/*nos dice de que posicion y cuantos caracteres necesito la posicion y los caracteres*/
//console.log(cadena.substring(0,4));/*es lo mismo saca la posicion y el ultimo pero saca antes del ultimo de la posicion*/
//console.log(cadena.toLowerCase());/*es para convertir todos en minusculas*/
//console.log(cadena.toUpperCase());/*convierte tomo en mayuscula*/
//console.log(cadena.trim());/*borra todo los espacios en blanco en la cadena*/
//console.log(cadena.concat(" ","milton"," ","yujra"));

//cadena = cadena + " " + "milton" + " " + "yujra"
//console.log(cadena);

//console.log(numero2.toString());/*convertimos en cadena*/
//console.log(numero2+"");/*otra forma de convertir a cadena*/
/*operadores artimeticos*/
//console.log(total);

//var total = numero1 - numero2;
//console.log(total);

//var total = numero1 * numero2;
//console.log(total);

//var total = numero1 / numero2;
//console.log(total);

//var total = numero1 % numero2;/*reciduo*/
//console.log(total);
/*operadores de comparacion*/
//console.log(Math.pow(2,3));/*elevado al cubo*/
//console.log(Math.sqrt(81));/*raiz cuadrada*/
//console.log(numero1 > numero2);
//console.log(numero1 >= 12);
//console.log(numero1 < numero2);
//console.log(3 <= numero2);
//console.log(numero1 == numero2);
//console.log(numero1 != numero2);
//console.log(numero1 === "12");

/* funciones */

function suma(n1=0,n2=0)
{

	console.log(n1+n2);
}

function resta(n1=0,n2=0)
{
	return n1 - n2;
}
//suma();
var total = resta(5,2);
console.log(total);

//alert("hola");
//var respuesta = confirm("¿deseas salir de la pagina?");
//console.log(respuesta);
//alert(respuesta);
//var rpta1 = prompt("ingrese numero 1");
//var rpta2 = prompt("ingrese numero 2");
//console.log(parseFloat(rpta1) + parseFloat(rpta2));

//setTimeout(function()
//{
//	alert("buenos dias");
//},1000);
//setInterval(function()
//{
//	console.log(new Date());
//},1000);

/*estructura de control*/
//var numero  = prompt("ingresa un numero");
//if(numero > 17)
/*{
	alert("Eres mayor de edad");
}else if(numero == 10){
	alert("Eres un niño");
}else{
	alert("Sigues siendo menor de edad");
}*/
/*if ((numero > 0) && (numero < 10))
{
	alert("eres menor de edad");
}else if (numero == 10) {
	alert("tienes 10 años");
}else if ((numero > 10)&&(numero < 18)) {
	alert("sigues siendo menor de edad");
}else{
	alert("eres mayor de edad");
}*/

//var foto1= document.getElementById("foto1");
//alert(foto1.innerHTML);
//foto1.innerHTML = "milton yujra";
//foto1.id = "avion";
//foto1.className = "clase clase2";

/*var titulos = document.getElementsByTagName("h2");
console.log(titulos);
for (var i = 0;i<titulos.length;i++) {
	titulos[i].id= "cocinero" +i;
};*/

/*var columnas = document.getElementsByClassName("columna");
console.log(columnas);
for (var i = 0; i < columnas.length; i++) {
	columnas[i].id="columna"+i;
}*/

/*var enlaces = document.querySelectorAll("header nav a");//te devuelve una lista

console.log(enlaces);
for (var i = 0; i < enlaces.length; i++) {
	enlaces[i].id="columna"+i;
}

var enlaces = document.querySelector("header nav a");//este te devuelve el primero que encuentra a diferencia de la lista

enlaces.className = "Soy el primero";*/

var foto1= document.getElementById("foto1");

/*foto1.onclick = function(){
	alert("soy el ingeniero");
}*/
foto1.addEventListener("click",function()
{
	alert("soy el ingeniero en sistemas");
})