import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.div<ButtonProps>`
  align-items: center;
  background-color: var(--color-gray);
  border-radius: 0.5rem;
  border: 0;
  color: var(--color-light);
  display: inline-flex;
  font-weight: 700;
  justify-content: space-between;
  letter-spacing: 0.1rem;
  padding: 1rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  vertical-align: top;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.gray};
  }
  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
  ${(props) =>
    props.primary &&
    css`
      &:hover {
        background: #068db6;
      }
      background-color: var(--color-primary);
    `}
`;

export default StyledButton;
