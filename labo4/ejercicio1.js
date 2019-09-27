
function tipeof(a =[3 , "numero",true]){
for (let i = 0; i < a.length; i++) {
  typeof(i);

}
}
/**
 * ejercicio 2
 */
var array1 = [2, 2, 2, 2, 2];
var suma = 0;
for(var i = 0; i < array1.length; i++) {
    suma += array1[i];
}
var avg = suma / array1.length;
console.log(suma)
console.log(avg);
/**
 * ejercicio 3
 */


/**
 * ejercicio 4
 */
function cuatro(numero){
valores=[];
validacion =false;
var numeroaleatorio;
typeof(variable)
for(var i=0; i<20; i++){
    numeroaleatorio=(Math.floor(Math.random()*100)+1);
    valores.push(numeroaleatorio);
}
for (var j = 0; j < 20; j++) {
  if(numero===valores[j]){
      Console.log("ganastes");
      validacion=true;
      break
  }
}
if(validacion=false){
    console.log("perdiste");
}
return valores;
}
/*
ejercicio 5
*/
function texto()
{
	var palabra=prompt("Escribe una palabra").toLowerCase();

	palabra=palabra.replace(/ /g, "");
	for (var i=0;i<palabra.length;i++){

		if(palabra[i]!=palabra[palabra.length-i-1]){

			return false;

		}

	}

	return true;
}
if(texto())
{

	alert(" es palíndromo");

}else{

	alert(" no es palíndromo")

}
/*
ejercicio 6
*/
function fibonacci(numero)
{
    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for(var i=3; i <= numero;i++)
    {
        var3 = var1 + var2;

        var1 = var2;

        var2 = var3;
console.log(var3);
    }
}
fibonacci(5);
/*
ejercicio 7
*/



