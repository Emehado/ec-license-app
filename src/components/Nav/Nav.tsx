import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/bg.jpg";
import Stepper, { Step } from "../Stepper";
import useActions from "./actions";

interface NavProps {}

const StyledNav = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    filter: grayscale(100%);
    z-index: -1;
  }
`;

const Nav: React.FC<NavProps> = () => {
  const { stepStore, activeStep, handleStepClick } = useActions();
  return (
    <StyledNav>
      <Stepper
        direction={window.innerWidth >= 1024 ? "vertical" : "horizontal"}
      >
        {stepStore.steps.map((step) => (
          <Step
            active={activeStep === step.label}
            key={step.id!.toString()}
            completed={Number(activeStep) >= step.id!}
            onStepClick={() => handleStepClick(step.label)}
          >
            {step.label}
          </Step>
        ))}
      </Stepper>
    </StyledNav>
  );
};

export default observer(Nav);
