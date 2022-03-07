import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/bg.jpg";
import Stepper, { Step } from "../Stepper";

import useActions from "./actions";

interface StyledNavProps {
  position: string;
  height: string | number;
  width: string;
}
interface NavProps {}

const StyledNav = styled.div<StyledNavProps>`
  height: ${(props) => props.height};
  transition: 0.05s;
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  & > * {
    position: fixed;
  }
  &::before {
    content: "";
    position: fixed;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    filter: hue-rotate(90deg);
    z-index: -1;
  }
  @media (min-width: 1024px) {
    justify-content: flex-end;
    & > * {
      padding-right: 10rem;
    }
  }
`;

const Nav: React.FC<NavProps> = () => {
  const { stepStore, activeStep, isDesktop } = useActions();

  return (
    <StyledNav
      height={isDesktop ? "100vh" : "12vh"}
      width={isDesktop ? "30vw" : "100%"}
      position={isDesktop ? "relative" : "fixed"}
    >
      <Stepper direction={isDesktop ? "vertical" : "horizontal"}>
        {stepStore.steps.map((step) => (
          <Step
            active={activeStep === step.id}
            key={step.id!.toString()}
            completed={Number(activeStep) >= step.id!}
            // onStepClick={() => handleStepClick(step.id!)}
          >
            {step.label}
          </Step>
        ))}
      </Stepper>
    </StyledNav>
  );
};

export default observer(Nav);
