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


/* */

const Inventario = []

Inventario.push(
    {Nombre: 'Yogurt', Precio: 100, Categoria: 'Comida'},
    {Nombre: 'Maceta', Precio: 250, Categoria: 'Jardinería'},
    {Nombre: 'Parlante', Precio: 700, Categoria: 'Electrónica'},
    {Nombre: 'Fideos', Precio: 500, Categoria: 'Comida'}
);

Inventario.forEach((Nombre, Precio, Categoria) => {
    console.log(
        'Nombre:', //Solo le pone un titulo antes de mostrarlo.
        Nombre,
        'Precio',
        Precio,
        'Categoria',
        Categoria
    )
})
console.log(Inventario);

// Filtrar los productos que pertenezcan a la categoría "Electrónica" y mostrarlos.


// Se repite Categoria.Categoria dado que con el segundo, se refiere al string.
const Categoria_Electrónica = Inventario.filter((Categoria) => Categoria.Categoria === 'Electrónica');
console.log(Categoria_Electrónica);

// Crear un nuevo array con solo los nombres de los productos, y mostrarlo en consola.

const Nombre_De_Los_Productos = Inventario.map(((Nombre) => Nombre.Nombre)); // Menciona de donde sacará la información
// y establece que tomará de 'nombre' pero convertido en string.

console.log(Nombre_De_Los_Productos);

// Agregá 3 películas al array. Cada película debe tener: título, director, año y género.

const Peliculas = []

Peliculas.push(
{Titulo: 'On my Way', Director: 'Frank Sinatra', Año: 1995, Género: 'Documental'},
{Titulo: 'Oggy y Las Cucarachas', Director: 'Steven Spielberg', Año: 1250, Género: 'Acción'},
{Titulo: 'Better Call Saul', Director: 'Vince Gilligan', Año: 2015, Género: 'Drama'}
);

console.log(Peliculas);


// Unshift() añadé un elemento al inicio de la lista.
Array_Propio.unshift('Hice_un_juego');
console.log(Array_Propio);