import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Input from "./form";
import Button from "./Button";
import logo from "../assets/Meubel House_Logos-05 (1).svg";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setEmail("");
    toast("Email enviado");
  };

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Shop", path: "/Shop" },
    { label: "About", path: "/About" },
    { label: "Contact", path: "/Contact" },
  ];

  const helpLinks = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <div className="border-t-4 mt-10 w-full p-4 md:p-8">
      {/* Logo and Address */}
      <div className="px-4 md:px-20 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <img src={logo} alt="Funiro Logo" className="w-[40px] md:w-[50px]" />
          <h1 className="font-bold text-xl md:text-2xl">Funiro.</h1>
        </div>
        <p className="text-[#9F9F9F] w-full text-sm md:text-base max-w-[285px]">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        {/* Links Column */}
        <div>
          <h3 className="text-[#9F9F9F] font-semibold mb-6 text-sm md:text-base">Links</h3>
          <ul className="grid grid-cols-1 gap-4 md:gap-8 font-semibold text-sm md:text-base">
            {navLinks.map(({ label, path }) => (
              <li
                key={label}
                className="hover:text-[#B88E2F] hover:cursor-pointer hover:scale-105 transition-all duration-200"
              >
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="text-[#9F9F9F] font-semibold mb-6 text-sm md:text-base">Help</h3>
          <ul className="grid grid-cols-1 gap-4 md:gap-8 font-semibold text-sm md:text-base">
            {helpLinks.map((item) => (
              <li
                key={item}
                className="hover:text-[#B88E2F] hover:cursor-pointer hover:scale-105 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="text-[#9F9F9F] font-semibold mb-6 text-sm md:text-base">Newsletter</h3>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Input
              type="text"
              name="enter_email"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              className="border-b-black border-b-2 px-1 text-start hover:cursor-pointer hover:scale-105 transition-all duration-200 text-sm md:text-base"
              placeholder="Enter Your Email Address"
            />
            <Button
              title="SUBSCRIBE"
              onClick={handleSubscribe}
              className="border-2 border-white hover:border-[#B88E2F] hover:border-b-[#B88E2F] hover:bg-[#B88E2F] hover:cursor-pointer hover:scale-105 hover:rounded-lg transition-all duration-200 border-b-black font-semibold hover:px-1 hover:py-1 hover:text-white text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      {/* Bottom Border and Copyright */}
      <div className="border-t-4 mt-10 px-4 md:px-20 pt-6">
        <p className="text-sm md:text-base">2023 furino. All rights reserved</p>
      </div>

      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className:
            "bg-green-100 text-green-900 rounded-lg shadow-lg px-5 py-3 flex items-center gap-3",
        }}
      />
    </div>
  );
}

export default Footer;
