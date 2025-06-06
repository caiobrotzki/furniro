import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  className,
  placeholder,
  required,
  label,
  value,
  onChange,
  ...rest
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
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
