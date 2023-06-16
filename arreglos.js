/* ejercicio 1 */
var numeros = [];
for (var i = 0; i < 10; i++) {
    var numerosAleatorios = Math.floor(Math.random() * 100) + 1;
    numeros.push(numerosAleatorios);
}
/*ejercicio 2*/
console.log("Contenido del array:", numeros)
var ingreso = prompt("ingresa del 1 al 5 separadas por comas,");
var palabras = ingreso.split(",");

console.log("Array resultantes:",palabras)
/*ejercicio 3*/

var numeros = [10, 40, 30, 20, 15, 5];
var numerosOrdenados = numeros.sort(function(a, b) {
    return a - b;
});
/* prueba
console.log("Numeros ordenados de menor a mayor:",numerosOrdenados)
var numeroMenor = Math.min(...numeros);
var numeroMayor = Math.max(...numeros);

console.log("Mumero mayor",numeroMayor);
console.log("Numero menor", numeroMenor);

var numero = [58, 96, 52, 100, 1, 9,]
var numerosDesorden = numero.sort(function(a, b) {
    return b - a;
})
console.log("numeros de mayor a menor:",numerosDesorden)*/