import * as React from "react";
import { useNavigate } from "react-router-dom";
import useRootStore from "../../../hooks/useRootStore";
import applyImage from "../../../assets/images/apply.png";
import renewImage from "../../../assets/images/renew.png";

import { ISelectableCardGroupInput } from "../../Card/SelectableCardGroup/SelectableCardGroup";
import useCurrentStepUpdater from "../../../hooks/useCurrentStepUpdater";

export default function useActions() {
  useCurrentStepUpdater(0);

  const navigate = useNavigate();
  const { stepStore } = useRootStore();

  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectionChange = (input: ISelectableCardGroupInput) => {
    setSelectedOption(input.name);
  };

  const handleStepChange = (direction: number) => {
    if (selectedOption === "renew") {
      navigate("/wiring/2/renew");
    } else {
      navigate("/wiring/2");
    }
  };

  React.useEffect(() => {
    if (selectedOption) {
      stepStore.updateCurrentStepStatus(); //Updates the current step status to completed enabling next Button(disabled by default)
    }
  }, [selectedOption]);

  const options = [
    {
      name: "apply",
      image: applyImage,
      title: "Apply for license",
    },
    { name: "renew", image: renewImage, title: "Renew license" },
  ];
  return { options, handleSelectionChange, handleStepChange };
}
