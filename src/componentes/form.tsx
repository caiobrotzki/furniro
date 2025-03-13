import React from "react";

interface InputProps {
  type: string;
  id?: string;
  name: string;
  className: string;
  placeholder?: string;
  label?: string; // Adicionado 'label' para o texto da label
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  className,
  placeholder,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
