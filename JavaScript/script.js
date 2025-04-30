var Variable_Nueva = "• Contenido de la variable •"; // Variable Global (Esto no se usa hoy en día) //

// let -> Es una variable local que solo puede existir en el scope/lugar en el que fue declarado.
// (Esto significa que no es global, y solo existe en los nodos)
let Mensaje_Importante = "• Sus valores pueden ser re-escritos/cambiados •"; // Variable Local //
Mensaje_Importante = 50; // Cerramos con punto y coma al poner una variable //

// Const -> Es una variable constante la cual tiene valores fijos
// (Esto significa que no pueden re-escribirse sus valores)
const Inamovible = 33;

/* Tipos de Datos */
const texto = "string"; //Texto
const numeros = 2; //Número
const booleanos = true; //Booleanos
//
/*
undefined -> Valor no definido

null -> Valor vacío

BigInt -> Usado para números grandes.
*/


//                  Operadores
// Aritmeticos son todos los de matematicas + - / % *
//
// Comparación
// == Doble igual compara el valor del dato.
// === Triple Igual compara el valor y el tipo de dato.
// != Distinto al valor !== distinto valor y tipo.
// > Mayor | < Menor | >= Mayor o Igual | <= Menor o Igual
//
/*                  Condicionales                  */

// if
const edad = 20
if (edad > 18) {
    console.log('Sos Mayor de Edad') /* Mostrar por Consola */
    /* Actúa básicamente cómo un print de Python */
}
else {
    console.log('Sos Menor de Edad')
}

// Switch
const dia = 2;

switch (dia) {
    case 1: console.log('dia lunes'); break
    case 2: console.log('dia martes'); break
    default: console.log('Dia no registrado')
}

/*                  Funciones                  */


// Declaración función clásica.
function saludar(nombre) {
    return `Hola ${nombre}`
}
console.log(saludar('Fede'));

/*             Arrow Function                */

// Return Explicito
const saludo = (nombre) => {
    return `Hola ${nombre}`
}
// Return implicito
const saludos = (nombre) => `Hola ${nombre}`

/* Si el return implicito tiene más de una 
   linea. Va a estar envuelto entre parentesís */


/*           Arreglos o Arrays (Listas de Python)           */

const Array_Propio = [1, 2, 'Pablo', false]
console.log(Array_Propio[2]);


/*                  Objetos                  */

const MisObjetos = {
    clave: 'valor',
    nombre: 'Federico',
    edad: 29,
};


console.log(MisObjetos.nombre) // Esto traerá el valor del objeto // 

/*            Iterar una lista con for              */

for (let i = 0; i < Array_Propio.length; i++) {
    console.log(Array_Propio[i]); // Muestra el Array
    // con su posición.
}
