import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Input from "./form";
import Button from "./Button";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // limpa o input
    setEmail("");
    // mostra o toast usando sonner
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
    <div className="border-t-4 mt-10 w-full p-4">
      <div className="mt-5 flex items-center ml-40 space-x-20">
        <h1 className="font-bold text-2xl mr-40">Funiro.</h1>
        <p className="pr-10 pl-20 text-[#9F9F9F]">Links</p>
        <p className="pr-10 pl-20 text-[#9F9F9F]">Help</p>
        <p className="pr-10 pl-20 text-[#9F9F9F]">Newsletter</p>
      </div>
      <div className="mt-10 ml-40 flex items-start">
        <p className="text-[#9F9F9F] w-[285px] h-[72px]">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>

        <div>
          <ul className="grid pl-20 pr-3 ml-10 gap-8 font-semibold">
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

        <div>
          <ul className="grid pl-20 ml-20 pr-5 gap-8 font-semibold">
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

        <div className="flex items-center ml-20">
          <Input
            type="text"
            name="enter_email"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            className="border-b-black border-b-2 px-1 text-start hover:cursor-pointer hover:scale-105 transition-all duration-200 "
            placeholder="Enter Your Email Address"
          />
          <Button
            title="SUBSCRIBE"
            onClick={handleSubscribe}
            className="ml-5 border-2 border-white hover:border-[#B88E2F] hover:border-b-[#B88E2F]  hover:bg-[#B88E2F] hover:cursor-pointer hover:scale-105 hover:rounded-lg transition-all duration-200 border-b-black font-semibold hover:px-1 hover:py-1 hover:text-white"
          />
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

      <div className="border-t-4 mt-10 ml-20 mr-20">
        <p className="mt-10 pb-5">2023 furino. All rights reverved</p>
      </div>
    </div>
  );
}

export default Footer;
