import React from "react";
import { SelectableCard } from "..";
import useActions from "./actions";
import "./styles.modules.css";

export interface ISelectableCardGroupInput {
  name: string;
  [x: string]: any;
}
interface SelectableCardGroupProps {
  inputs: any[];
  onSelectionChange: (input: ISelectableCardGroupInput) => void;
  renderItem: (input: string, index: number) => React.ReactNode;
}
const SelectableCardGroup: React.FC<SelectableCardGroupProps> = ({
  inputs,
  onSelectionChange,
  renderItem,
}) => {
  const { selected, handleToggleSelection } = useActions({ onSelectionChange });

  return (
    <div className="root">
      {inputs.map((input, index) => (
        <SelectableCard
          disabled={input.disabled}
          key={input.name}
          selected={selected === input.name}
          onSelected={() => handleToggleSelection(input)}
        >
          <div>{renderItem(input, index)}</div>
        </SelectableCard>
      ))}
    </div>
  );
};

export default SelectableCardGroup;
