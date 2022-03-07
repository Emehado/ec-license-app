import * as React from "react";
import { useMediaQuery } from "react-responsive";
import useRootStore from "../../hooks/useRootStore";

export default function useActions() {
  const { stepStore } = useRootStore();

  const [activeStep, setActiveStep] = React.useState(stepStore.currentStep?.id);

  React.useEffect(() => {
    setActiveStep(stepStore.currentStep?.id);
  }, [stepStore.currentStep]);

  // const onNext = () => {
  //   if (Number(activeStep) === stepStore.steps.length) return;
  //   setActiveStep(activeStep! + 1);
  // };
  // const onBack = () => {
  //   if (Number(activeStep) - 1 === 0) return;
  //   setActiveStep(activeStep! - 1);
  // };

  // const handleStepClick = (stepId: number) => {
  //   setActiveStep(stepId);
  // };
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [stepStore.currentStep]);

  return { stepStore, activeStep, isDesktop };
}
