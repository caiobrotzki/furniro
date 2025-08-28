import React from "react";

interface ButtonPropProps {
  title: string;
  className: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // <- Adicionamos o tipo aqui
}

const ButtonProp: React.FC<ButtonPropProps> = ({
  title,
  className,
  onClick,
  type = "button", // <- Valor padrão
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default ButtonProp;
