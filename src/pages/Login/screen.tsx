import React, { useState } from "react";
import Input from "../../components/form";
import ButtonProp from "../../components/Button";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

export default function Screen() {
  const [values, setValues] = useState<{ [key: string]: string }>({
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const inputArray = [
    {
      name: "Email",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    inputArray.forEach((input) => {
      if (!values[input.name]) {
        newErrors[input.name] = "Campo obrigatório";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <div className="absolute top-1/4 right-20 w-[900px] md:w-2/6 bg-[#FFF3E3] p-10 z-20 shadow-2xl ">
      <h1 className="text-center font-semibold text-[40px] mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {inputArray.map((input, index) => (
            <div key={index}>
              <Input
                name={input.name}
                placeholder={input.placeholder}
                className={input.className}
                type={
                  input.name.toLowerCase() === "password" ? "password" : "text"
                }
                id={input.name.toLowerCase()}
                value={values[input.name]}
                onChange={handleChange}
              />
              {errors[input.name] && (
                <span className="text-red-500 text-xs ml-2">
                  {errors[input.name]}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonProp
            title="Login"
            className="bg-[#B88E2F] w-[250px] h-[54px] text-white rounded-[5px] "
          />
        </div>
      </form>
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
        <p>New to modimal? </p>
        <Link to="/createAcount">
          <p className="text-[#B88E2F]">create an account</p>
        </Link>
      </div>
    </div>
  );
}
