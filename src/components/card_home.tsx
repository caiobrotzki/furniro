import React from "react";
import { ShoppingCart } from "phosphor-react";

interface Produto {
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
  addToCart?: (produto: Produto) => void;
}

const Card: React.FC<CardProps> = ({
  img,
  titulo,
  descricao,
  valor,
  addToCart,
}) => {
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({ img, titulo, descricao, valor });
    } else {
      console.log("No addToCart function provided");
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-[#F4F5F7] rounded-[5px] shadow-md overflow-hidden w-[285px] hover:scale-105 transform transition-all duration-30">
      <img
        src={img}
        alt={titulo}
        className="w-full h-[280px] object-cover rounded-t-[5px]"
      />

      <div className="p-4 flex flex-col flex-grow w-full">
        <h3 className="font-semibold text-2xl mb-1">{titulo}</h3>
        <p className="text-sm flex-grow">{descricao}</p>
        <div className="mt-3 flex  flex-col  justify-between">
          <p className="font-bold text-[#B88E2F] text-xl">{valor}</p>

          <button
            onClick={handleAddToCart}
            className={`
              flex items-center gap-1 mt-4 bg-[#B88E2F] hover:bg-[#a17b28] 
              text-white font-semibold px-4 py-2 rounded-lg shadow-md
              focus:outline-none focus:ring-2 focus:ring-[#a17b28] focus:ring-offset-1
              select-none justify-center hover:scale-105 transform transition-all duration-300
            `}
            aria-label={`Adicionar ${titulo} ao carrinho`}
          >
            <ShoppingCart size={20} weight="bold" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
