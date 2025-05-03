

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
const dia_de_la_semana = new Date().getDay()
const dia = dia_de_la_semana;
let url;

switch (dia) {
case 1: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/volcano.jpg'; break
case 2: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/city.jpg'; break
case 3: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg'; break
case 4: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/cave.jpg'; break
case 5: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/glacier.jpg'; break
case 6: url = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/canyon.jpg'; break
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
 }
}

const ultimo_grid = contenedor_mayor.lastElementChild;
ultimo_grid.classList.add("grilla_final");