
// Seleccionar elementos del DOM:


// Por ID
// Obteniendo por id la etiqueta titulo
// Nos permite acceder a todos los cambios que se realicen a la etiqueta.
let titulo = document.getElementById('Titulo');
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = 'Nuevo Texto Generado Por El DOM';

titulo.style.color = "red";

const grilla = document.getElementById('grilla');
const input = document.querySelector('input[type="text"]');
const boton = document.getElementById('boton');

boton.addEventListener('click', function() {
    const bloque = document.createElement('div');
    const verificación = document.createElement('input');
    verificación.type = 'checkbox';
    verificación.value = 'check';
    bloque.classList.add('rectangulo');
    bloque.append(input.value, verificación); 
    verificación.addEventListener('change', function() {
        if (verificación.checked) {
            bloque.remove();
    }})
    grilla.appendChild(bloque); // Añade el bloque como hijo de la grilla.
});

