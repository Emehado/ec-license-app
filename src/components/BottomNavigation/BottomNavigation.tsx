import React from "react";
import styled, { css } from "styled-components";
import { IStep } from "../../types";
import Button from "../Button";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import useActions from "./actions";
import { observer } from "mobx-react-lite";

export interface BottomNavigationProps {
  onStepChange?: (direction: number) => void;
  hasMargin?: boolean;
}

interface StyledBottomNavigationProps {
  currentStep?: IStep;
  hasMargin: boolean;
}

const StyledBottomNavigation = styled.div<StyledBottomNavigationProps>`
  margin-top: ${(props) => (props.hasMargin ? "50px" : 0)};
  display: flex;
  ${(props) =>
    props.currentStep?.id === 1
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
`;

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  onStepChange,
  hasMargin = false,
}) => {
  const { stepStore, handleStepChange } = useActions();
  return (
    <StyledBottomNavigation
      hasMargin={hasMargin}
      currentStep={stepStore.currentStep}
    >
      {stepStore.currentStep?.id! > 1 && (
        <Button
          onClick={() =>
            onStepChange ? onStepChange(-1) : handleStepChange(-1)
          }
        >
          <IoMdArrowRoundBack /> Back
        </Button>
      )}
      <Button
        disabled={!stepStore.currentStep?.completed}
        variant="primary"
        onClick={() => (onStepChange ? onStepChange(1) : handleStepChange(1))}
      >
        Next <IoMdArrowRoundForward />
      </Button>
    </StyledBottomNavigation>
  );
};

export default observer(BottomNavigation);
