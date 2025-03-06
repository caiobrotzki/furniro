import React from "react";

interface Buttonpropprops {
  title: string;
  className: string;
}

const ButtonProp: React.FC<Buttonpropprops> = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default ButtonProp;
