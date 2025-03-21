import React from "react";

interface Buttonpropprops {
  title: string;
  className: string;
  onClick?: () => void;
}

const ButtonProp: React.FC<Buttonpropprops> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonProp;
