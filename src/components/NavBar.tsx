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
  onRemoveItem: (index: number) => void;
}

function NavBar({ cartItems, onRemoveItem }: NavBarProps) {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const abrirCartPopup = () => setCartPopupOpen(true);
  const fecharCartPopup = () => setCartPopupOpen(false);

  return (
    <div className="w-full pt-4 pb-4 md:pt-6 md:pb-6 flex justify-between items-center px-4 md:px-20 fixed z-40 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[40px] h-[25px] md:w-[50px] md:h-[32px]" />
        <h1 className="text-black text-[24px] md:text-[34px] font-bold">Furniro</h1>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-10">
        <li>
          <Link to="/home" className="text-black hover:text-[#B88E2F] transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="text-black hover:text-[#B88E2F] transition">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:text-[#B88E2F] transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:text-[#B88E2F] transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Ícones Desktop */}
      <div className="hidden md:flex items-center space-x-10 relative">
        <img src={user} alt="User" className="cursor-pointer w-[25px] h-[25px]" />
        <img src={search} alt="Search" className="cursor-pointer w-[25px] h-[25px]" />
        <img src={heart} alt="Heart" className="cursor-pointer w-[25px] h-[25px]" />
        <div className="relative">
          <img
            src={shoppingCar}
            alt="Carrinho de Compras"
            className="cursor-pointer w-[25px] h-[25px]"
            onClick={abrirCartPopup}
          />
          {cartPopupOpen && (
            <ShoppingCart
              cartItems={cartItems}
              onClose={fecharCartPopup}
              onRemoveItem={onRemoveItem}
            />
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <img
          src={shoppingCar}
          alt="Carrinho de Compras"
          className="cursor-pointer w-[20px] h-[20px]"
          onClick={abrirCartPopup}
        />
        {cartPopupOpen && (
          <ShoppingCart
            cartItems={cartItems}
            onClose={fecharCartPopup}
            onRemoveItem={onRemoveItem}
          />
        )}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b-2 border-[#B88E2F] md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link to="/home" className="text-black hover:text-[#B88E2F]" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-black hover:text-[#B88E2F]" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-[#B88E2F]" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-[#B88E2F]" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
