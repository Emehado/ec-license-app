import * as React from "react";
import useRootStore from "./useRootStore";

export default function useActions(stepIndex: number) {
  const { stepStore } = useRootStore();
  React.useEffect(() => {
    if (stepStore.steps.length) {
      stepStore.setCurrentStep(stepStore.steps[stepIndex]);
    }
  }, [stepStore.steps.length]);
}
