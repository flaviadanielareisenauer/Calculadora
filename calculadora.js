/* Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos hechos con anterioridad */

const sumar = require('./sumar');
console.log(sumar (27,53));

const restar = require('./restar');
console.log(restar (42,23));

const multiplicar = require('./multiplicar');
console.log(multiplicar (5,5));
console.log(multiplicar (8,0));

const dividir = require('./dividir');
console.log(dividir (10,5));
console.log(dividir (14,0));


// Crear una funcion llamada calculadora y le pasamos como parametro 3 cosas. Uno va a ser la operacion, y los otros dos los numero. 
// Si la operacion es estrictamente igual a sumar nos va a retornar la suma del numero A y B. En el caso de no ser suma y ser restar, nos va a retornar la resta del numero A y B. 
// lo mismo con multiplicar y dividir. En caso de no pasar ningun parametro me debe retornar " no es una operacion valida"