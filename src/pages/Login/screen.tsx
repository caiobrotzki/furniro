import React, { useState } from "react";
import Input from "../../components/form";
import ButtonProp from "../../components/Button";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Meubel House_Logos-05 (1).svg"; // ajuste o caminho se necessário

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
      placeholder: "Email",
      className:
        "w-full h-[44px] rounded-lg mb-4 text-base pl-5 bg-white bg-opacity-80 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition",
    },
    {
      name: "Password",
      placeholder: "Password",
      className:
        "w-full h-[44px] rounded-lg text-base pl-5 mb-8 bg-white bg-opacity-80 border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition",
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
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Formulário de login */}
      <div className="animate-fade-in w-full max-w-md mx-auto bg-[#FFF3E3]/80 backdrop-blur-lg p-10 rounded-2xl z-30 shadow-2xl border border-[#f3e9d7] flex flex-col items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-[48px] w-[48px] mb-2 md:hidden"
        />
        <span className="text-4xl font-bold text-[#B88E2F] mb-6 md:hidden">
          Furniro
        </span>
        <h1 className="text-center font-extrabold text-[32px] mb-6 text-[#B88E2F] drop-shadow">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
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
          <div className="flex justify-center mt-2">
            <ButtonProp
              title="Login"
              className="bg-[#B88E2F] w-full h-[48px] text-white rounded-lg font-semibold text-lg shadow hover:bg-[#a67c1a] transition"
            />
          </div>
        </form>
        <div>
          <h1 className="mt-6 text-center text-[#B88E2F] font-semibold">Ou</h1>
        </div>
        <div>
          <ul className="flex space-x-6 justify-center mt-4">
            <li>
              <AppleLogo className="text-[36px] bg-white rounded-full text-black shadow hover:scale-110 transition" />
            </li>
            <li>
              <GoogleLogo className="text-[36px] rounded-full text-[#EA4335] shadow hover:scale-110 transition" />
            </li>
            <li>
              <FacebookLogo className="text-[36px] bg-[#1877F2] rounded-full text-white shadow hover:scale-110 transition" />
            </li>
          </ul>
        </div>
        <div className="flex text-xs justify-center mt-6">
          <p>New to Furniro?</p>
          <Link to="/createAcount">
            <p className="text-[#B88E2F] underline cursor-pointer">
              Crie uma conta
            </p>
          </Link>
        </div>
      </div>
      {/* Animação fade-in */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.9s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}
