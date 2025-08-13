import { useContext } from "react";
import { NombreProvider } from "./globals/NombreContext";

export function Hijo3({ nombre }) {
  const NombreContext = useContext(NombreProvider);

  return (
    <>
      <h2> Hijo 3 </h2>
      <p>{nombre}</p>
      <p>{NombreContext}</p>
    </>
  );
}
