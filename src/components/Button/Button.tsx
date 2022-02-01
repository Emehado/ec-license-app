import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: string;
  disabled?: boolean;
  children: React.ReactNode;
  [x: string]: any;
}

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: var(--color-gray);
  border-radius: 0.5rem;
  border: 0;
  color: var(--color-light);
  display: inline-flex;
  font-size: 2.4rem
  font-weight: 700;
  justify-content: space-between;
  letter-spacing: 0.1rem;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  vertical-align: top;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.gray};
  }
  @media (min-width: 1024px) {
    padding: 1.5rem 5rem;
  }
  ${(props) =>
    props.variant === "primary" &&
    css`
      &:hover {
        background: #068db6;
      }
      background-color: var(--color-primary);
    `}
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton variant={variant} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
