import * as React from "react";
import { FormikValues } from "formik";
import useCurrentStepUpdater from "../../../../hooks/useCurrentStepUpdater";

export default function useActions() {
  useCurrentStepUpdater(1);
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };
  return { handleSubmit };
}
