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


// Push() agrega un elemento al final de la lista. (Es el append() de JS)
Array_Propio.push('Matias')
console.log(Array_Propio);


// Pop() elimina el ultimo elemento de la lista, y es capaz de almacenar 
// lo borrado en una variable.
const ultimo_del_array = Array_Propio.pop();
console.log(ultimo_del_array);


// Unshift() añadé un elemento al inicio de la lista.
Array_Propio.unshift('Hice_un_juego');
console.log(Array_Propio);


// Shift() elimina el primer elemento de una lista, y lo almacena.
const elemento_borrado = Array_Propio.shift();
console.log(elemento_borrado);


// Foreach( => {} ) recorre la lista solo una vez y no modifica nada.
Array_Propio.forEach((item, index, Array_Propio) => {
    console.log(
        'index', //Solo le pone un titulo antes de mostrarlo.
        index,
        'item',
        item,
        'Array',
        Array_Propio
    )
})


// Map() recorre la lista, la modifica con una funcion y retorna en una copia.

const nuevoArray = Array_Propio.map((item, index)=>{
    const num = 2
    console.log(index, 'item', item);
    return (item += num);
})

console.log('Array Modificado', nuevoArray)


// Filter crea un array nuevo con los elementos que cumplan la condición.

const ArrayNum = [2, 4, 5, 6];
const Numeros_Pares = ArrayNum.filter((item) => item % 2 === 0);

console.log(Numeros_Pares);