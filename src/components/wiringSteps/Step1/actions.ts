import * as React from "react";
import useRootStore from "../../../hooks/useRootStore";
import applyImage from "../../../assets/images/apply.png";
import renewImage from "../../../assets/images/renew.png";

import { ISelectableCardGroupInput } from "../../Card/SelectableCardGroup/SelectableCardGroup";
import useCurrentStepUpdater from "../../../hooks/useCurrentStepUpdater";

export default function useActions() {
  useCurrentStepUpdater(0);

  const { stepStore } = useRootStore();

  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectionChange = (input: ISelectableCardGroupInput) => {
    setSelectedOption(input.name);
  };

  React.useEffect(() => {
    if (selectedOption && selectedOption === "renew") {
      stepStore.updateCurrentStepStatus();
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
  return { options, handleSelectionChange };
}
