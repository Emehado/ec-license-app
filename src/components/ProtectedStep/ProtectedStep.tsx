import React from "react";
import { useNavigate } from "react-router-dom";
import useRootStore from "../../hooks/useRootStore";

interface ProtectedStepProps {
  step: React.ReactElement;
}

const ProtectedStep: React.FC<ProtectedStepProps> = ({ step }) => {
  const { stepStore } = useRootStore();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!stepStore.currentStep) {
      navigate(`/${stepStore.applicationType}`);
    }
  }, []);
  return step;
};

export default ProtectedStep;
