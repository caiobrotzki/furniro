import React, { useState } from "react";
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
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={produto.img}
          alt={produto.titulo}
          className="z-0 rounded-[5px]"
        />
        {hovered && (
          <div className="bg-black bg-opacity-50 w-full absolute inset-0 flex items-center justify-center mt-0 pb-2 rounded-[5px]">
            <button
              onClick={() => {
                if (addToCart) {
                  addToCart(produto); // Passando produto diretamente
                  alert("O seu item foi adicionado ao carrinho de compras");
                } else {
                  console.log("No addToCart function provided");
                }
              }}
              className="bg-white text-black text-[10px] py-2 px-4 rounded-[3px] bg-opacity-90"
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
      <div className="pl-5 pt-3 flex flex-col align-middle bg-[#F4F5F7] w-[285px] h-[145px]">
        <h3 className="font-semibold text-2xl">{produto.titulo}</h3>
        <p className="text-sm">{produto.descricao}</p>
        <p className="font-bold text-[#B88E2F]">{produto.valor}</p>
      </div>
    </div>
  );
};

export default Card;
