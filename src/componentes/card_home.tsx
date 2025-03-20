import React, { useState } from "react";

interface Produto2 {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

interface CardProps {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
  addToCart: (produto: Produto2) => void; // Garantir que a função addToCart é passada corretamente
}

const Card: React.FC<CardProps> = ({
  img,
  titulo,
  descricao,
  valor,
  addToCart,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={img} alt={titulo} className="z-0 rounded-[5px]" />
        {hovered && (
          <div className="bg-black bg-opacity-50 w-full absolute inset-0 flex items-center justify-center mt-0 pb-2 rounded-[5px]">
            <button
              onClick={() => addToCart({ img, titulo, descricao, valor })} // Passando corretamente
              className="bg-white text-black text-[10px] py-2 px-4 rounded-[3px] bg-opacity-90"
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
      <div className="pl-5 pt-3 flex flex-col align-middle bg-[#F4F5F7] w-[285px] h-[145px]">
        <h3 className="font-semibold text-2xl">{titulo}</h3>
        <p className="text-sm">{descricao}</p>
        <p className="font-bold text-[#B88E2F]">{valor}</p>
      </div>
    </div>
  );
};

export default Card;
