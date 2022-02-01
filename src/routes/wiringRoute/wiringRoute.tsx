import React from "react";
import { Route } from "react-router-dom";
import Step1 from "../../components/wiringSteps/Step1";
import Step2 from "../../components/wiringSteps/Step2";
import Step3 from "../../components/wiringSteps/Step3";
import Step4 from "../../components/wiringSteps/Step4";
import ProtectedStep from "../../components/ProtectedStep";
import StepLayout from "../../components/StepLayout";

const steps = [
  {
    label: "1",
    completed: false,
    errorMessage: "Please Select a service type",
  },
  {
    label: "2",
    completed: false,
    errorMessage: "Please ensure you have filled all required fields",
  },
  { label: "3", completed: false, errorMessage: "" },
  { label: "4", completed: false, errorMessage: "" },
];
const wiringRoute = () => {
  return (
    <Route path="/wiring" element={<StepLayout steps={steps} />}>
      <Route index element={<Step1 />} />
      <Route path="1" element={<Step1 />} />
      <Route path="2" element={<ProtectedStep step={<Step2 />} />} />
      <Route path="3" element={<ProtectedStep step={<Step3 />} />} />
      <Route path="4" element={<ProtectedStep step={<Step4 />} />} />
    </Route>
  );
};

export default wiringRoute;
