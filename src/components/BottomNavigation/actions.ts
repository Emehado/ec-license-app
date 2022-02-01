import * as React from "react";
import { useNavigate } from "react-router-dom";
import useRootStore from "../../hooks/useRootStore";

export default function useActions() {
  const { stepStore } = useRootStore();
  const navigate = useNavigate();

  const handleStepChange = async (stepChange: number) => {
    const newStepId = stepStore.currentStep?.id! + stepChange;
    stepStore.setCurrentStep(stepStore.steps[newStepId - 1]);

    navigate(`/${stepStore.applicationType}/${newStepId}`);
  };

  return { stepStore, handleStepChange };
}
