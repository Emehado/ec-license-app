import * as React from "react";
import useRootStore from "../../hooks/useRootStore";

export default function useActions() {
  const { stepStore } = useRootStore();

  const [activeStep, setActiveStep] = React.useState("1");

  const onNext = () => {
    if (Number(activeStep) === stepStore.steps.length) return;
    setActiveStep((activeStep + 1).toString());
  };
  const onBack = () => {
    if (Number(activeStep) - 1 === 0) return;
    setActiveStep((parseInt(activeStep) - 1).toString());
  };

  const handleStepClick = (stepLabel: string) => {
    setActiveStep(stepLabel);
  };

  return { stepStore, activeStep, onNext, onBack, handleStepClick };
}
