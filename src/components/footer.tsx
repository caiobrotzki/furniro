import { Link } from "react-router-dom";
import Input from "./form";
import Button from "./Button";

function Footer() {
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
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact"> Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid pl-20 ml-20 pr-5 gap-8 font-semibold">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="flex items-center ml-20">
          <Input
            type="text"
            name="enter_email"
            className="border-b-black border-b-2 text-start"
            placeholder="Enter Your Email Address"
          />
          <Button
            title="SUBSCRIBE"
            className="ml-5 border-b-2 border-b-black font-semibold"
          />
        </div>
      </div>
      <div className="border-t-4 mt-10 w-[1240] ml-20 mr-20">
        <p className="mt-10 pb-5">2023 furino. All rights reverved</p>
      </div>
    </div>
  );
}

export default Footer;
