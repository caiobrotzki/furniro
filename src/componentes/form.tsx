import React from "react";

interface InputProps {
  type: string;
  id?: string;
  name: string;
  classname: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  classname,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={classname}
      placeholder={placeholder}
    />
  );
};

export default Input;
