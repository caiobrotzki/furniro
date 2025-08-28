import React  from "react";
import { ShoppingCart } from "phosphor-react";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

interface CardProps {
  produto: Produto;
  addToCart?: (produto: Produto) => void;
}

const Card: React.FC<CardProps> = ({ produto, addToCart }) => {
 

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(produto);
    } else {
      console.log("No addToCart function provided");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center bg-[#F4F5F7] rounded-[5px] shadow-md overflow-hidden w-[285px] hover:scale-105 transform transition-all duration-30"
    >
      <img
        src={produto.img}
        alt={produto.titulo}
        className="w-full h-[280px] object-cover rounded-t-[5px]"
      />

      <div className="p-4 flex flex-col flex-grow w-full">
        <h3 className="font-semibold text-2xl mb-1">{produto.titulo}</h3>
        <p className="text-sm flex-grow">{produto.descricao}</p>
        <div className="mt-3 flex flex-col justify-between">
          <p className="font-bold text-[#B88E2F] text-xl">{produto.valor}</p>

          <button
            onClick={handleAddToCart}
            className={`
              flex text-center mt-4 items-center gap-1 justify-center bg-[#B88E2F] 
              hover:bg-[#a17b28]  text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 transform transition-all duration-30
              
            `}
            aria-label={`Adicionar ${produto.titulo} ao carrinho`}
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
