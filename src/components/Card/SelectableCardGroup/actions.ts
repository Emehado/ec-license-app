import * as React from "react";
import { InputName } from "./SelectableCardGroup";
interface ActionHooks {
  onSelectionChange: (inputName: InputName) => void;
}

export default function useActions({ onSelectionChange }: ActionHooks) {
  const [selected, setSelected] = React.useState("");
  const handleToggleSelection = (inputName: InputName) => {
    setSelected(inputName);
    onSelectionChange(inputName);
  };
  return { selected, handleToggleSelection };
}
