import * as React from "react";
import { useLocation } from "react-router-dom";
import useRootStore from "../../hooks/useRootStore";
import { ApplicationType, IStep } from "../../types";

interface HookProps {
  steps: IStep[];
}

export default function useActions({ steps }: HookProps) {
  const { stepStore } = useRootStore();
  const location = useLocation();

  const applicationType = location.pathname.split("/")[1];
  stepStore.setApplicationType(applicationType as ApplicationType);

  React.useEffect(() => {
    if (!stepStore.steps.length) {
      stepStore.addSteps(steps);
      stepStore.setCurrentStep(steps[0]);
    }
  }, []);

  return {};
}
