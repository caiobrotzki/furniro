import { Link } from "react-router-dom";
import logo from "../assets/Meubel House_Logos-05 (1).svg";
import user from "../assets/mdi_account-alert-outline.svg";
import search from "../assets/akar-icons_search.svg";
import heart from "../assets/akar-icons_heart.svg";
import shoppingCar from "../assets/ant-design_shopping-cart-outlined.svg";

function NavBar() {
  return (
    <div className="w-full pt-7 pb-8 flex justify-between items-center px-20  fixed z-50 bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 m-" />
        <h1 className="text-black text-2xl font-bold">Furniro</h1>
      </div>
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="text-black text-base cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="text-black cursor-pointer">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-6">
        <img src={user} alt="User" className="cursor-pointer" />
        <img src={search} alt="Search" className="cursor-pointer" />
        <img src={heart} alt="Heart" className="cursor-pointer" />
        <img src={shoppingCar} alt="ShoppingCart" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default NavBar;
