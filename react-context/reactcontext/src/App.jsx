import "./App.css";
import { Hijo1 } from "./componentes/hijo1";
import { NombreProvider } from "./globals/NombreContext";

function App() {
  return (
    <>
      <NombreProvider>
        <Hijo1 nombre={"Juan"} />
      </NombreProvider>
    </>
  );
}
export default App;
