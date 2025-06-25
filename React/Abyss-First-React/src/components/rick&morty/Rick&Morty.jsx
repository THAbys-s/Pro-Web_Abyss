import './App.css'
import Usuario from './components/usuarios/Usuario'
import { Proveedor } from './components/proveedores/proveedor';
import { useEffect, useState } from 'react';

export function RickAndMorty(){
    
    const [characters, setCharacters] = useState([])

/*

useEffect va a ejecutar el código en su interior
tantas veces como las dependencias se actualicen.
En caso de no haber dependencias, se va a ejecutar
solo antes del primer renderizado.

*/

  /*

useEffect va a ejecutar el código en su interior
tantas veces como las dependencias se actualicen.
En caso de no haber dependencias, se va a ejecutar
solo antes del primer renderizado.

*/

    useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => setCharacters(response.results));
  }, []);


  return(
  <>
  {characters ? (
    characters.map((item, index) => <p> {item.name} </p>)) : ( <> ...Cargando </>)}  
  </>
  );
}