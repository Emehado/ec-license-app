import React from "react";
import styled, { css } from "styled-components";

interface StyledStepProps {
  children: React.ReactNode;
  completed?: boolean;
  active?: boolean;
  onStepClick?: () => void;
}
const StyledStepContainer = styled.div<StyledStepProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-of-type {
    .connector {
      display: none;
    }
  }
`;
const StyledStep = styled.div<StyledStepProps>`
  ${(props) =>
    props.active
      ? css`
          height: 7rem;
          width: 7rem;
        `
      : css`
          height: 5rem;
          width: 5rem;
        `}
  transition: 0.2s;
  border-radius: 40px;
  padding: 1px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.active &&
    css`
      border: 2px solid ${props.theme.colors.primary};
    `}
  .step {
    height: 5rem;
    width: 5rem;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) =>
      props.completed ? props.theme.colors.primary : props.theme.colors.gray};
    color: ${(props) => props.theme.colors.light};
    ${(props) =>
      props.active &&
      css`
        background-color: ${props.theme.colors.primary};
      `};
    h3 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

const Connector = styled.div.attrs((props: StyledStepProps) => ({
  className: "connector",
  ...props,
}))`
  transition: 0.2s;
  ${(props) =>
    props.active || props.completed
      ? css`
          background-color: ${props.theme.colors.primary};
        `
      : css`
          background-color: ${props.theme.colors.gray};
        `}
`;

const Step: React.FC<StyledStepProps> = ({
  active,
  completed,
  children,
  onStepClick,
}) => {
  return (
    <StyledStepContainer active={active} className="stepContainer">
      <StyledStep active={active} completed={completed}>
        <div className="step" onClick={onStepClick}>
          {children}
        </div>
      </StyledStep>
      <Connector active={active} completed={completed} />
    </StyledStepContainer>
  );
};

export default Step;
