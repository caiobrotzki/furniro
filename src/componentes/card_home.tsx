import React from "react";

interface CardProps {
  img: string;
  titulo: string;
  descricao: string;
}

const Card: React.FC<CardProps> = ({ img, titulo, descricao }) => {
  return (
    <div>
      <img src={img} alt={titulo} />
      <div>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default Card;
