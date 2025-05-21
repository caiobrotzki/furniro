import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar";
import About from "./pages/About";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componentes/footer";
import Shop from "./pages/shop";
import Login from "./pages/login";
import CreateAcount from "./pages/Create_Acount";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

function App() {
  const [cartItems, setCartItems] = useState<Produto[]>([]); // Estado do carrinho

  const handleAddToCart = (produto: Produto) => {
    setCartItems((prevCarrinho) => [...prevCarrinho, produto]);
  };

  return (
    <div>
      <Router>
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddToCart={handleAddToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/createAcount" element={<CreateAcount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
