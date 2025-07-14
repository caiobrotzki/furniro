import React, { useState } from "react";
import Input from "../../components/form";
import ButtonProp from "../../components/Button";
import { User, Envelope, Lock } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Meubel House_Logos-05 (1).svg";

// Interfaces para tipagem
interface FormValues {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}
type FormErrors = Partial<FormValues>;

const Screen: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    if (!values.FirstName) newErrors.FirstName = "O nome é obrigatório";
    if (!values.Email) newErrors.Email = "O email é obrigatório";
    if (!values.Password) newErrors.Password = "A senha é obrigatória";
    // Adicione mais validações se desejar (ex: senha com 8 caracteres)

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Lógica para criar conta (ex: chamada de API)
      // Simulando sucesso:
      console.log("Conta criada com sucesso:", values);
      // Opcional: fazer login automático após criar a conta
      // localStorage.setItem("auth-token", "token_simulado_123");
      navigate("/home"); // Ou redirecionar para o login: navigate("/");
    }
  };

  return (
    <div className="animate-fade-in w-full max-w-sm bg-white/90 backdrop-blur-xl p-6 rounded-2xl z-30 shadow-2xl border border-white/20 flex flex-col items-center">
      <img src={Logo} alt="Logo Furniro" className="h-10 w-10 mb-1" />
      <span className="text-xl font-bold text-[#B88E2F]">Furniro</span>
      <h1 className="text-center font-bold text-lg mt-3 mb-1 text-gray-700">
        Crie sua conta
      </h1>
      <p className="text-gray-500 mb-4 text-sm">Comece sua jornada conosco.</p>

      <form onSubmit={handleSubmit} className="w-full">
        {/* Nome */}
        <div className="mb-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={20} className="text-gray-400" />
            </div>
            <Input
              name="FirstName"
              placeholder="Nome"
              type="text"
              id="firstname"
              value={values.FirstName}
              onChange={handleChange}
              className="w-full h-11 rounded-lg text-sm pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all duration-300"
            />
          </div>
          {errors.FirstName && (
            <span className="text-red-500 text-xs mt-1 ml-1">
              {errors.FirstName}
            </span>
          )}
        </div>

        {/* Sobrenome (opcional, pode remover se não precisar) */}
        <div className="mb-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={20} className="text-gray-400" />
            </div>
            <Input
              name="LastName"
              placeholder="Sobrenome"
              type="text"
              id="lastname"
              value={values.LastName}
              onChange={handleChange}
              className="w-full h-11 rounded-lg text-sm pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all duration-300"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Envelope size={20} className="text-gray-400" />
            </div>
            <Input
              name="Email"
              placeholder="Email"
              type="email"
              id="email"
              value={values.Email}
              onChange={handleChange}
              className="w-full h-11 rounded-lg text-sm pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all duration-300"
            />
          </div>
          {errors.Email && (
            <span className="text-red-500 text-xs mt-1 ml-1">
              {errors.Email}
            </span>
          )}
        </div>

        {/* Senha */}
        <div className="mb-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={20} className="text-gray-400" />
            </div>
            <Input
              name="Password"
              placeholder="Senha"
              type="password"
              id="password"
              value={values.Password}
              onChange={handleChange}
              className="w-full h-11 rounded-lg text-sm pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all duration-300"
            />
          </div>
          {errors.Password && (
            <span className="text-red-500 text-xs mt-1 ml-1">
              {errors.Password}
            </span>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <ButtonProp
            title="Criar Conta"
            className="bg-[#B88E2F] w-full h-11 text-white rounded-lg font-semibold text-base shadow-md hover:bg-[#a17b28] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          />
        </div>
      </form>

      <div className="flex text-xs justify-center mt-4 text-gray-600">
        <p>Já tem uma conta?</p>
        <Link
          to="/"
          className="text-[#B88E2F] font-semibold hover:underline cursor-pointer ml-1"
        >
          Faça login
        </Link>
      </div>

      <style>{`.animate-fade-in { animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1) both; } @keyframes fadeIn { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
};

export default Screen;
