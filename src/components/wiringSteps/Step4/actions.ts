import * as React from "react";
import applyImage from "../../../assets/images/apply.png";
import renewImage from "../../../assets/images/renew.png";

import { ISelectableCardGroupInput } from "../../Card/SelectableCardGroup/SelectableCardGroup";

export default function useActions() {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectionChange = (input: ISelectableCardGroupInput) => {
    setSelectedOption(input.name);
  };

  const options = [
    { name: "apply", image: applyImage, title: "Apply for license" },
    { name: "renew", image: renewImage, title: "Renew license" },
  ];
  return { options, selectedOption, handleSelectionChange };
}
