import React from "react";
import "./Button.modules.css";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ primary = false, children }) => {
  return (
    <div className={`button ${primary && "button__primary"}`}>{children}</div>
  );
};

export default Button;
