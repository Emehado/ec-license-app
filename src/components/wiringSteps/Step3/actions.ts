import * as React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import useCurrentStepUpdater from "../../../hooks/useCurrentStepUpdater";
import useRootStore from "../../../hooks/useRootStore";

export default function useActions() {
  useCurrentStepUpdater(2);
  const { stepStore } = useRootStore();
  const navigate = useNavigate();

  const handlePay = async () => {
    const data = {
      register: stepStore.billingDetails.registerType,
      name: stepStore.billingDetails.name,
      phone: "0543158880", //TODO: Static field to be replaced with EC values
      email: "emehado@yahoo.com", //TODO: Static field to be replaced with EC values
      years: stepStore.billingDetails.years,
      license: stepStore.billingDetails.license,
      licenseType: stepStore.billingDetails.licenseType,
    };

    const response = await api.post("/checkout/create", { data });

    if (!response.ok) {
      //@ts-ignore
      throw new Error(response.data.message);
    }

    setTimeout(() => {
      //@ts-ignore
      window.location = response.data.checkout_url;
    }, 6000);
  };

  const handleStepChange = (direction: number) => {
    const newStepId = stepStore.currentStep?.id! + direction;

    if (direction > 0) {
      const myPromise = new Promise(async (resolve, reject) => {
        try {
          await handlePay();
          resolve("");
        } catch (error) {
          reject(error);
        }
      });
      toast.promise(myPromise, {
        loading: "Loading...",
        success: "Success",
        error: (error) => error.message,
      });
      return;
    }
    stepStore.setCurrentStep(stepStore.steps[newStepId - 1]);
    navigate(`/${stepStore.applicationType}/${newStepId}`);
  };

  return { stepStore, handleStepChange };
}
