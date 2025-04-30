const numero = -1
if (numero > 0) {
    console.log('Positivo') /* Mostrar por Consola */
}
else if (numero < 0) {
    console.log('Negativo')
}
else {
    console.log('Cero')
}

/* */

const Array_Numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let suma_de_pares = 0;

for (let i = 0; i <= Array_Numerico.length; i++) {
    if (i % 2 == 0) {
        suma_de_pares = suma_de_pares + i
    }
}

console.log(suma_de_pares);

/* */

const Array_Numerico20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20]

let suma_de_multiplos_de_3 = 0;

for (let i = 0; i <= Array_Numerico20.length; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        suma_de_multiplos_de_3 = suma_de_multiplos_de_3 + i
    }
}

console.log(suma_de_multiplos_de_3);