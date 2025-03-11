import React from "react";

interface CardProps {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

const Card: React.FC<CardProps> = ({ img, titulo, descricao, valor }) => {
  return (
    <div className=" bg-[#F4F5F7] w-[285px] h-[446] space-x-4 ">
      <img src={img} alt={titulo} className="" />
      <div>
        <h1 className="font-bold text-2xl pb-1">{titulo}</h1>
        <p className="text-[#898989] pb-1">{descricao}</p>
        <p className="font-semibold mb-5">{valor}</p>
      </div>
    </div>
  );
};

export default Card;
