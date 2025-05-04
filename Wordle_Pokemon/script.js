
const Pokemon0_100 = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran♀', 'nidorina', 'nidoqueen', 'nidoran♂', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', "farfetch'd", 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', /* ... */];

const Pokemon100_200 = [
    "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing",
    "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime",
    "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon",
    "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos",
    "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava",
    "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak",
    "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep",
    "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom",
    "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus"
  ];
  
let Pokemon_Total = [...Pokemon0_100, ...Pokemon100_200]

const Pokemon_Secreto = Pokemon_Total[Math.floor(Math.random() * Pokemon_Total.length)]
//console.log(TotalDePokemones)
console.log(Pokemon_Secreto)

/*

Formas de usar Date() en JavaScript

    Method	        |          Description

getFullYear()  | 	Get year as a four digit number (yyyy)
getMonth()	|  Get month as a number (0-11)
getDate()	|  Get day as a number (1-31)
getDay()	|  Get weekday as a number (0-6)
getHours()	|  Get hour (0-23)
getMinutes() | 	Get minute (0-59)
getSeconds()	|  Get second (0-59)
getMilliseconds() |	Get millisecond (0-999)
getTime()	|  Get time (milliseconds since January 1, 1970)

*/

const fondo = document.getElementById("background");
const shadows = document.getElementsByClassName("contenedor_del_main");
const dia_de_la_semana = new Date().getDay()
const dia = dia_de_la_semana;
let url;
let box_color;

switch (dia) {
case 0: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/coast.jpg'; 
box_color = 'green';
break
case 1: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/volcano.jpg'; 
box_color = 'rgb(166, 181, 87)';
break
case 2: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/city.jpg'; 
box_color = 'gold';
break
case 3: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg'; 
box_color = 'greenyellow';
break
case 4: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/cave.jpg'; 
box_color = 'rgb(63, 164, 107)';
break
case 5: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/glacier.jpg'; 
box_color = 'rgb(67, 67, 255)';
break
case 6: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/canyon.jpg'; 
box_color = 'rgb(222, 208, 181)';
break
 }

for (let el of shadows) {
  el.style.boxShadow = `0px 9px 60px ${box_color}`;
 }

fondo.style.backgroundImage = `url('${url}')`; 
// Si queremos usar una variable debemos poner '${   }'. Esto para que 
// JavaScript reconozca la variable y la utilicé.

const Largo_De_Las_Casillas = Pokemon_Secreto.length;

const contenedor_mayor = document.getElementById("Contenedor_Principal");

for (let contador = 0; contador < 5; contador++) {
  const contenedor_secundario = document.createElement("div");

  contenedor_secundario.classList.add("grillas");

  contenedor_mayor.appendChild(contenedor_secundario);

  for (let i = 0; i < Largo_De_Las_Casillas; i++) {
    const bloque_de_grilla = document.createElement("div");
    //Hace en la memoria un div.
  
    bloque_de_grilla.classList.add("bloque_de_la_grilla");
    //Le asigna la clase 'bloque_de_la_grilla' al div creado en memoria.
  
    contenedor_secundario.appendChild(bloque_de_grilla);
    //Añade al Div 'bloques', el nuevo div creado en memoria con 'createElement'.
    bloque_de_grilla.setAttribute("tabindex", "0"); //Permite la conexión con el teclado.
    
    /* 

    Keypress indica que cáracter fue elegido/seleccionado.
    Keydown y Keyup indican en cambio, que tecla fue presionada.
    
    */ 
    bloque_de_grilla.addEventListener("keydown", (e) => {
      const letra = e.key.toUpperCase(); //Convierte la letra ingresada a una mayúscula.
      if (/^[A-ZÑ]$/.test(letra)) { //Devuelve booleano True si lo ingresado en la casilla
        // esta dentro de la A a la Z. (Dado que utiliza .test con la variable Letra)
        bloque_de_grilla.textContent = letra; //Se escribirá el cáracter.

        const siguiente = bloque_de_grilla.nextElementSibling;
        if (siguiente && siguiente.classList.contains("bloque_de_la_grilla")) {
          siguiente.focus();
        }
      } else if (e.key === "Backspace") {
          bloque_de_grilla.textContent = "";

        if (bloque_de_grilla.textContent != "") { //Si el cáracter escrito es distinto a
          // nada, entonces puede borrar.
          bloque_de_grilla.textContent = ""; //Iguala la casilla a nada. Por lo que esta borrando
          // de una forma indirecta. 
        } else { // En caso de ya estar en nada, cambia el focus a la anterior casilla.
          const anterior = bloque_de_grilla.previousElementSibling; //Es una variable creada
          // para ir al anterior elemento (el anterior div).
          if (anterior && anterior.classList.contains("bloque_de_la_grilla")) {
            anterior.focus(); //Cambia el foco en caso de que una 
            anterior.textContent = "";
          }
        }
      } 
    });
 }
}

const ultimo_grid = contenedor_mayor.lastElementChild;
ultimo_grid.classList.add("grilla_final");