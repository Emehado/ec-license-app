import React from "react";
import { SelectableCard } from "..";
import useActions from "./actions";
import "./styles.modules.css";

export type InputName = string;
interface SelectableCardGroupProps {
  inputs: InputName[];
  onSelectionChange: (input: InputName) => void;
}
const SelectableCardGroup: React.FC<SelectableCardGroupProps> = ({
  inputs,
  onSelectionChange,
}) => {
  const { selected, handleToggleSelection } = useActions({ onSelectionChange });

  return (
    <div className="root">
      {inputs.map((input) => (
        <SelectableCard
          selected={selected === input}
          onSelected={() => handleToggleSelection(input)}
        >
          <h1>my child</h1>
        </SelectableCard>
      ))}
    </div>
  );
};

export default SelectableCardGroup;
