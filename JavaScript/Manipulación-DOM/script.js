
// Seleccionar elementos del DOM:


// Por ID
// Obteniendo por id la etiqueta titulo
// Nos permite acceder a todos los cambios que se realicen a la etiqueta.
let titulo = document.getElementById('Titulo');
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = 'Nuevo Texto Generado Por El DOM';

titulo.style.color = red;

// Eventos(addEventListener, onClick, onChange)
const boton = document.getElementById('boton');

boton.addEventListener('click', function(){
    alert('Clicked Button')
})