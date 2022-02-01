import * as React from "react";
import useRootStore from "./useRootStore";

export default function useActions(stepIndex: number) {
  const { stepStore } = useRootStore();
  React.useEffect(() => {
    stepStore.setCurrentStep(stepStore.steps[stepIndex]);
  }, []);
}
