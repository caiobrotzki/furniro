import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./popup-nav";
import logo from "../assets/Meubel House_Logos-05 (1).svg";
import user from "../assets/mdi_account-alert-outline.svg";
import search from "../assets/akar-icons_search.svg";
import heart from "../assets/akar-icons_heart.svg";
import shoppingCar from "../assets/ant-design_shopping-cart-outlined.svg";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

interface NavBarProps {
  cartItems: Produto[];
}

function NavBar({ cartItems }: NavBarProps) {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);

  const abrirCartPopup = () => setCartPopupOpen(true);
  const fecharCartPopup = () => setCartPopupOpen(false);

  return (
    <div className="w-full pt-6 pb-6 flex justify-between items-center px-20 fixed z-50 bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[50px] h-[32px]" />
        <h1 className="text-black text-[34px] font-bold">Furniro</h1>
      </div>
      <ul className="flex space-x-10">
        <li>
          <Link to="/home" className="text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="text-black">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-10 relative">
        <img
          src={user}
          alt="User"
          className="cursor-pointer w-[25px] h-[25px]"
        />

        <img
          src={search}
          alt="Search"
          className="cursor-pointer w-[25px] h-[25px]"
        />
        <img
          src={heart}
          alt="Heart"
          className="cursor-pointer w-[25px] h-[25px]"
        />
        <div className="relative">
          <img
            src={shoppingCar}
            alt="Carrinho de Compras"
            className="cursor-pointer w-[25px] h-[25px]"
            onClick={abrirCartPopup}
          />
          {cartPopupOpen && (
            <ShoppingCart cartItems={cartItems} onClose={fecharCartPopup} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
