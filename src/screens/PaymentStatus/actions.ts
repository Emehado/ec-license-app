import * as React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import api from '../../api';
import useCurrentStepUpdater from '../../hooks/useCurrentStepUpdater';

export default function useActions() {
  useCurrentStepUpdater(2);

  const [paymentStatusCode, setPaymentStatusCode] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();

  const getPaymentStatus = async (wiringRenewalId: string) => {
    // 1 = Payment Approved
    // 2 = Payment Failed
    // 3 = No Payment Record
    // 4 = Payment Pending

    setLoading(true);
    const response = await api.get(
      `/wiring/renew/payment-status/${wiringRenewalId}`
    );

    if (!response.ok) {
      return toast.error('An error occurred while fetching payment status');
    }

    //@ts-ignore
    setPaymentStatusCode(response.data.paymentStatusCode);
    setLoading(false);
    // }
  };

  React.useEffect(() => {
    getPaymentStatus(params.wiringRenewalId as string);
  }, []);
  return { paymentStatusCode, loading };
}
