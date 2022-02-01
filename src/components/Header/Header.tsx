import React from "react";
import styled from "styled-components";

interface HeaderProps {
  step: number;
  title: string;
  subtitle: string;
}

const StyledHeader = styled.div`
  p {
    font-size: 1.8rem;
  }
`;
const Header: React.FC<HeaderProps> = ({ step, title, subtitle }) => {
  return (
    <StyledHeader>
      <strong>Step {step.toString()}</strong>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </StyledHeader>
  );
};

export default Header;
