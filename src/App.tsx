import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./app.css";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import CreateAcount from "./pages/Create_Acount";
import NavBar from "./components/NavBar";

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
    setCartItems((prevItems) => [...prevItems, produto]);
    console.log("Produto adicionado ao carrinho:", produto);
  };
  const hideNavBar =
    location.pathname === "/" || location.pathname === "/createAcount";

  return (
    <div>
      {!hideNavBar && <NavBar cartItems={cartItems} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAcount" element={<CreateAcount />} />
        <Route
          path="/home"
          element={<Home handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/shop"
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
