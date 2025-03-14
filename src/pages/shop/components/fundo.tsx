import ImagemFundo from "../../../assets/Rectangle 1.svg";

function Fundo() {
  return (
    <div className="pt-16 pb-16 relative">
      <img
        src={ImagemFundo}
        alt="Imagem de fundo desfocada para a seção Shop"
        className="w-full blur-[50%]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="mt-4 font-bold text-5xl">Shop</h1>
        <div className="flex items-center mt-8">
          <h2 className="font-bold text-[16px] mr-1">Home &gt;</h2>
          <h2 className="text-[16px] ">Shop</h2>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
