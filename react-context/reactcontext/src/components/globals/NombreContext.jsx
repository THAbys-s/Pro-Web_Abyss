import React, { Children } from "react";
const NombreContext = React.createContext();

export function NombreProvider({ children }) {
  const name = "Juan";

  return (
    <NombreContext.Provider valor={name}>{children}</NombreContext.Provider>
  );
}
