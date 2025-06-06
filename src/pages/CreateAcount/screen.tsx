import Input from "../../components/form";
import ButtonProp from "../../components/Button";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Screen() {
  const inputArray = [
    {
      name: "First Name",
      placeholder: "First Name",
      className:
        "w-[440px] h-[40px]  rounded-[5px] mb-4 text-sl pl-5  text-[16px]",
    },
    {
      name: "Last Name",
      placeholder: "Last Name",
      className:
        "w-[440px] h-[40px]  rounded-[5px] text-sl pl-5 mb-4 text-[16px]",
    },
    {
      name: "Email",
      placeholder: "Email",
      className:
        "w-[440px] h-[40px]  rounded-[5px] mb-4 text-sl pl-5  text-[16px]",
    },
    {
      name: "Password",
      placeholder: "Password",
      className:
        "w-[440px] h-[40px]  rounded-[5px] text-sl pl-5 mb-8 text-[16px]",
    },
  ];

  return (
    <div className="absolute top-1/4 right-20 w-[900px] md:w-2/6 bg-[#FFF3E3] p-10 z-20 shadow-2xl ">
      <h1 className="text-center font-semibold text-[40px] mb-4">
        Create Acount
      </h1>
      <div>
        {inputArray.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            className={input.className}
            type={input.name.toLowerCase() === "password" ? "password" : "text"}
            id={input.name.toLowerCase()}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonProp
          title=" Create Acount"
          className="bg-[#B88E2F] w-[250px] h-[54px] text-white rounded-[5px] "
        />
      </div>
      <div>
        <h1 className="mt-5 text-center">Or</h1>
      </div>
      <div>
        <ul className="flex space-x-5 ml-[144px] mt-4 ">
          <li>
            <AppleLogo className="text-[40px] bg-[#FFF3E3] rounded-full text-black " />
          </li>
          <li>
            <GoogleLogo className="text-[40px] rounded-full text-[#EA4335]" />
          </li>
          <li>
            <FacebookLogo className="text-[40px]  bg-[#1877F2] rounded-full text-white" />
          </li>
        </ul>
      </div>
      <div className="flex text-xs justify-center mt-4">
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <p className="text-[#B88E2F]">log in</p>
        </Link>
      </div>
    </div>
  );
}
