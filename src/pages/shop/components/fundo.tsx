import ImagemFundo from "../../../assets/Rectangle 1.svg";
import Logo from "../../../assets/Meubel House_Logos-05 (1).svg";

function Fundo() {
  return (
    <div className="pt-12 md:pt-16 relative">
      <img
        src={ImagemFundo}
        alt="Imagem de fundo desfocada para a seção Shop"
        className="w-full blur-[50%]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <img src={Logo} alt="Logo" className="w-10 md:w-12" />
        <h1 className="mt-3 md:mt-4 font-bold text-3xl md:text-5xl">Shop</h1>
        <div className="flex items-center mt-4 md:mt-8 text-sm md:text-base">
          <h2 className="font-bold mr-1">Home &gt;</h2>
          <h2>Shop</h2>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
