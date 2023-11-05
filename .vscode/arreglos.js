/* const nombres = [];

var nombre1 = 'Daniel';
var nombre2 = 'Vargas';
var nombre3 = 'Luis';
var nombre4 = 'Rodriguez';
var numero = 18;
var estatus = false;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);
console.log(numero);
console.log(estatus); 

const nombres2 = ['Daniel', 'Luis', 'Vargas', 18, true];
console.log(nombres2); */

/* const nombres3 = new Array ('Daniel', 'Luis', 'Vargas', 18, false);
nombres3[0] = 'Daniel';
console.log(nombres3); */

//AGREGAR Y ELIMINAR DATOS EN UN ARREGLO
/* const nombres4 = new Array ('Daniel', 'Luis', 'Vargas', 18, false);

nombres4.push('Mexico');
nombres4.unshift('Primer elemento');
nombres4.pop();
nombres4.shift();
console.log(nombres4);
 */

//METODOS DE ARREGLO

const nombres5 = new Array ('Daniel', 'Luis', 'Vargas', 18, false);
console.log(nombres5);

for(let i=0; i<nombres5.length; i++){
     console.log(nombres5[i]);
}

nombres5.forEach(function (elemento, indice){
    console.log(elemento);
});

//Filter

const valores1 = [1,2,3,4,5,6,7,8,9,10];
const resultado = valores1.filter((numero) => numero < 12);
console.log(resultado);


