// setTimeOut

// función que recibe de parametros 2 valores.
// Necesita una función y el tiempo que tardará en ejececutar la función.


// setInterval

// Es lo mismo que setTimeOut pero ejecuta varias veces una función, delimitandolo por un contador. 
// (Esto permite guardar en una variable la cuenta regresiva)

/*

let boton = document.getElementById('boton')

let contador = 0;

boton.addEventListener('click', () => {
    setTimeout(function (){
    window.alert('Clickeado hace 0.1 segundos')

    setInterval(() => {
    contador++;
    console.log(contador);
}, 5000);

},
100) // Tiempo en Milisegundos
});

*/


// Asincronía 
// Peticiones a una API
// Metodos GET, POST, PUT, DELETE


// Fetch() requiere de la URL/Ruta que se desea buscar.
fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then((response) => console.log('respuesta', response.results));
// Result es utilizado para transformar en un array lo que se necesite.


// Async await.

// Función flecha asincrona.
const asyncFunction = async() => {
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character') // Await solamente funciona con Async arriba
        const data = await response.json(); // y también espera que el dato exista para usarlo.
        console.log('data', data);
        const array_mapeado = data.results.map((character) => {
        
        return {
        nombre: character.name  };
    });
    console.log(array_mapeado);
    return array_mapeado
}

    catch(error){
        console.log('error', error);
    }
}

asyncFunction();

// Función regular asincrona.
async function asyncFunc() {
    
}

// Let es una variable privada

// Var es una variable pública.