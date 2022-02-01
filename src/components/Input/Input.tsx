import React from "react";
import styled, { css } from "styled-components";
import "./Input.modules.css";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  [otherProps: string]: any;
}

interface StyledInputProps {
  fullWidth?: boolean;
}

const StyledLabel = styled.label`
  font-size: 1.7rem;
`;

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2rem 3rem;
  outline: 0;
  font-size: 2rem;
  font-family: "Jost";
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  @media (min-width: 1024px) {
    .input {
      font-size: 2rem;
    }
  }
`;

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  ...otherProps
}) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput type={type} placeholder={placeholder} {...otherProps} />
    </StyledLabel>
  );
};

export default Input;
