import { useNavigate } from "react-router-dom";
import useCurrentStepUpdater from "../../../hooks/useCurrentStepUpdater";
import useRootStore from "../../../hooks/useRootStore";
import successImg from "../../../assets/images/success.svg";
import failedImg from "../../../assets/images/cancel.svg";

export default function useActions() {
  useCurrentStepUpdater(3);

  const statuses = [
    {
      title: "Successful",
      image: successImg,
      description:
        "Your payment has been processed successfully. You will receive text message confirmation once your license has been renewed",
    },
    {
      title: "Failed",
      image: failedImg,
      description:
        "we could not process your payment at this time. This could be due to several reasons. Kindly ensure you have sufficient amount in your account and try again!",
    },
  ];

  const { stepStore } = useRootStore();
  const navigate = useNavigate();

  const handleDone = () => {
    navigate(`/${stepStore.applicationType}`);
  };

  return { handleDone, statuses };
}
