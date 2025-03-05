import "./App.css";
import NavBar from "./componentes/NavBar";
import ImagemProp from "./componentes/img";
import FundoHome from "./assets/scandinavian-interior-mockup-wall-decal-background 1.svg";

function App() {
  return (
    <div>
      <NavBar />
      <ImagemProp imagemSrc={FundoHome} className="w-full" />
    </div>
  );
}

export default App;
