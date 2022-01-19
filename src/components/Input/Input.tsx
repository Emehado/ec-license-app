import React from "react";
import "./Input.modules.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  [otherProps: string]: any;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  ...otherProps
}) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default Input;
