import * as React from 'react';
import { FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../../../../api';
import useCurrentStepUpdater from '../../../../hooks/useCurrentStepUpdater';
import useRootStore from '../../../../hooks/useRootStore';

export default function useActions() {
  useCurrentStepUpdater(1);

  const navigate = useNavigate();

  const ref = React.useRef(null);
  const { stepStore } = useRootStore();

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
    const response = await api.post(
      '/wiring/new-application/payment-intent',
      values
    );
    if (!response.ok) {
      // toast.error(response.data.message);
      //@ts-ignore
      return { success: false, errorMessage: response.data.message };
    }

    setTimeout(() => {
      //@ts-ignore
      window.location = response.data.checkout_url;
    }, 3000);

    // const currentStep = stepStore.steps[2];
    // currentStep.completed = true;
    // stepStore.setCurrentStep(currentStep);
    // navigate(`/${stepStore.applicationType}/${currentStep.id}`);
    return { success: true };
  };

  const handleSubmit = async (values: any) => {
    const request = new Promise(async (resolve, reject) => {
      try {
        const createIntentSuccessFull = await handleCreatePaymentIntent(values);
        if (!createIntentSuccessFull.success) {
          reject(createIntentSuccessFull.errorMessage);
        }
        resolve('');
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(
      request,
      {
        loading: 'Loading...',
        success: "You'll be redirected soon!",
        error: (error) => error,
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

  return { ref, handleSubmit, handleStepChange };
}
