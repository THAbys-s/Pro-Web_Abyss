import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({
    nombre: "Juan",
    edad: 30,
    estado: "Vivo",
  });
  const [nombre, setNombre] = useState({
    nombre: "Ana",
    edad: 22,
  });

  //Spread Operator

  function MyFunction() {
    setNum([...num, 4]); // El Operador Spread básicamente resume cada numero del array
    // y agrega un nuevo valor al final.
  }

  // Tareas:
  //
  // * Hacer que los numeros agregados sean en una cadena consecutiva => 2 puntos extra *

  function NumerosConsecutivos() {
    setNum([...num, num[num.length - 1] + 1]);
  }

  // * Agregar una propiedad al objeto persona usando Spread Operator => 4 puntos extra *

  function AgregarPersona() {
    setPersona({ ...persona, complexión: "Humanoide" });
    console.log(persona);
  }

  // * Partiendo de { nombre: "Pepito", edad: 22}, cambiá solo nombre a 'Luis', usando spread operator.

  function ActualizarNombre() {
    setNombre({ ...nombre, nombre: "Luis" });
    console.log(nombre);
  }
  //
  // const obj = { foo: "a", bar: "b" };
  // const updatedObj = { ...obj, foo: 1 };
  //
  // This is useful when you pass objects to other functions that update state.
  //
  return (
    <>
      <div>
        <button onClick={AgregarPersona}>AgregarCiudad</button>
      </div>

      <div>
        <button onClick={ActualizarNombre}>ActualizarNombre</button>
      </div>

      <div>
        {num.map((item, index) => (
          <p> {item} </p>
        ))}

        <button onClick={NumerosConsecutivos}>Agregar Número</button>
      </div>
    </>
  );
}

export default App;
