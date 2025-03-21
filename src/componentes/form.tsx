import React from "react";

interface InputProps {
  type: string;
  id?: string;
  name: string;
  className: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  className,
  placeholder,
  required,
  label,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
