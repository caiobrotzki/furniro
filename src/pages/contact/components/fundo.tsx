import ImagemFundo from "../../../assets/Rectangle 1.svg";
import Logo from "../../../assets/Meubel House_Logos-05 (1).svg";

function Fundo() {
  return (
    <div className="pt-20 relative">
      <img src={ImagemFundo} alt="ImagemFundo" className="w-full blur-[50%] " />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src={Logo} alt="Logo" />
        <h1 className="mt-4 font-bold text-5xl">Contact</h1>
      </div>
    </div>
  );
}

export default Fundo;
