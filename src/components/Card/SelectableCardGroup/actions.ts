import * as React from "react";
import { ISelectableCardGroupInput } from "./SelectableCardGroup";
interface ActionHooks {
  onSelectionChange: (input: ISelectableCardGroupInput) => void;
}

export default function useActions({ onSelectionChange }: ActionHooks) {
  const [selected, setSelected] = React.useState("");
  const handleToggleSelection = (input: ISelectableCardGroupInput) => {
    setSelected(input.name);
    onSelectionChange(input);
  };
  return { selected, handleToggleSelection };
}
