import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import Footer from "./componentes/footer";
import Shop from "./pages/shop";
import Login from "./pages/login";
import CreateAcount from "./pages/Create_Acount";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

function AppContent() {
  const [cartItems, setCartItems] = useState<Produto[]>([]);
  const location = useLocation();

  const handleAddToCart = (produto: Produto) => {
    setCartItems((prevCarrinho) => [...prevCarrinho, produto]);
  };

  // Não mostrar NavBar na tela de login ou criar conta
  const hideNavBar =
    location.pathname === "/" || location.pathname === "/createAcount";

  return (
    <div>
      {!hideNavBar && <NavBar cartItems={cartItems} />}
      <Routes>
        <Route
          path="/home"
          element={<Home handleAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
        <Route path="/" element={<Login />} />
        <Route path="/createAcount" element={<CreateAcount />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
