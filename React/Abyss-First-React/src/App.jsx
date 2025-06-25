import { useState } from 'react'
import './App.css'

function App() {

  const [nombre, setNombre] = useState('');

  const handleClick = () => {
    console.log(nombre)
  }

  const handleInputChange = (event) => {
    setNombre(event.target.value)
  }

  return (
  <>
    <input type='text' placeholder='Nombre aquí' onChange={handleInputChange} value={nombre}/>
    <button onClick={handleClick}>Mostrar</button>
    {nombre && <h2>{nombre}</h2>}

    {nombre === '' ? <>Hola</> : <>Chau</>}
  </>

// Si el nombre existe lo imprime debajo.

// Si queremos que la función se use al momento
// le ponemos el párentesis.

  );
}

export default App;

