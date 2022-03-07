import * as React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ISelectOption } from "../../../../types";
import useRootStore from "../../../../hooks/useRootStore";
import api from "../../../../api";
import ILicenseFormDetails from "../../../../types/ILicenseFormDetails";
import useCurrentStepUpdater from "../../../../hooks/useCurrentStepUpdater";

export default function useActions() {
  useCurrentStepUpdater(1);

  const { stepStore } = useRootStore();
  const navigate = useNavigate();

  const ref = React.useRef(null);

  const handleStepChange = (direction: number) => {
    const newStepId = stepStore.currentStep?.id! + direction;
    if (direction > 0) {
      //@ts-ignore
      ref.current?.click();

      return;
    }
    stepStore.setCurrentStep(stepStore.steps[newStepId - 1]);
    navigate(`/${stepStore.applicationType}/${newStepId}`);
  };

  const handleCreatePaymentIntent = async (values: any) => {
    console.log(values);
    const response = await api.post("/wiring/renew/payment-intent", values);
    if (!response.ok) {
      //@ts-ignore
      throw new Error(response.data.message);
    }

    setTimeout(() => {
      //@ts-ignore
      window.location = response.data.checkout_url;
    }, 3000);

    // const currentStep = stepStore.steps[2];
    // currentStep.completed = true;
    // stepStore.setCurrentStep(currentStep);
    // navigate(`/${stepStore.applicationType}/${currentStep.id}`);
    return true;
  };

  const handleSubmit = async (values: any) => {
    const request = new Promise(async (resolve, reject) => {
      try {
        await handleCreatePaymentIntent(values);
        resolve("");
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(
      request,
      {
        loading: "Loading...",
        success: "You'll be redirected soon!",
        error: (error) => error.message,
      },
      {
        style: { minWidth: 250 },
        success: {
          duration: 3000,
        },
      }
    );
    return;
  };

  return {
    stepStore,
    ref,
    handleStepChange,
    handleSubmit,
  };
}
