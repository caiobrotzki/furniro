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
    <div className="relative flex flex-col items-center bg-[#F4F5F7] rounded-[5px] shadow-md overflow-hidden w-full sm:w-[280px] md:w-[250px] lg:w-[285px] hover:scale-105 transform transition-all duration-300">
      <img
        src={img}
        alt={titulo}
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-t-[5px]"
      />

      <div className="p-3 sm:p-4 flex flex-col flex-grow w-full">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-1 text-[#B88E2F]">{titulo}</h3>
        <p className="text-xs sm:text-sm flex-grow text-gray-600">{descricao}</p>
        <div className="mt-2 sm:mt-3 flex flex-col justify-between">
          <p className="font-bold text-[#B88E2F] text-lg sm:text-xl">{valor}</p>

          <button
            onClick={handleAddToCart}
            className={`
              flex items-center gap-1 mt-3 sm:mt-4 bg-[#B88E2F] hover:bg-[#a17b28] 
              text-white font-semibold px-3 sm:px-4 py-2 rounded-lg shadow-md
              focus:outline-none focus:ring-2 focus:ring-[#a17b28] focus:ring-offset-1
              select-none justify-center hover:scale-105 transform transition-all duration-300 text-xs sm:text-sm
            `}
            aria-label={`Adicionar ${titulo} ao carrinho`}
          >
            <ShoppingCart size={16} weight="bold" className="sm:w-5" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
