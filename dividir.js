/* Crear un archivo dividir.js que contenga una funcion llamada dividir, la cual debe ser exportada al final del archivo. Esta funcion debera recibir 2 parametros y retornar la division de los mismos. Importante: contemplar el escenario donde si alguno de los dos parametros es cero, la funcion retornara "NO SE PUEDE DIVIDIR POR CERO". */

function dividir(n1, n2) {
    if (n1 === 0 || n2 === 0) {
        return "No se puede dividir por cero"
    }
    return n1 / n2;
}

module.exports = dividir;

// Creo una funcion llamada dividir y le paso como parametro numero1 y numero2 donde si numero1 es estrictamente igual a CERO o numero2 es estrictamente igual a CERO la funcion me debe retornar "NO SE PUEDE DIVIDIR POR CERO". En el caso de que ninguno sea cero, debe dividir de forma normal. 