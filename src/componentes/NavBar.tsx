import logo from "../assets/Meubel House_Logos-05 (1).svg";
import user from "../assets/mdi_account-alert-outline.svg";
import search from "../assets/akar-icons_search.svg";
import heart from "../assets/akar-icons_heart.svg";
import shoppingCar from "../assets/ant-design_shopping-cart-outlined.svg";

function NavBar() {
  return (
    <div className="w-full pt-7 pb-8 flex justify-between items-center px-20 fixed bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-black text-2xl font-bold">Furniro</h1>
      </div>
      <ul className="flex space-x-10">
        <li className="text-black text-base cursor-pointer">Home</li>
        <li className="text-black cursor-pointer">Shop</li>
        <li className="text-black cursor-pointer">About</li>
        <li className="text-black cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center space-x-6">
        <img src={user} alt="User" className="cursor-pointer" />
        <img src={search} alt="Serch" className="cursor-pointer" />
        <img src={heart} alt="Heart" className="cursor-pointer" />
        <img src={shoppingCar} alt="ShoppingCar" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default NavBar;
