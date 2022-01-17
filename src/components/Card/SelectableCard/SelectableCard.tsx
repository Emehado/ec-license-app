import React from "react";
import Card from "../Card";
import "./SelectableCard.modules.css";

interface SelectableCardProps {
  children: React.ReactNode;
  onSelected: () => void;
  selected?: boolean;
}
const SelectableCard: React.FC<SelectableCardProps> = ({
  children,
  selected = false,
  onSelected,
}) => {
  return (
    <Card>
      <div className="container">
        <div className="radio" onClick={onSelected}>
          <div className={`${selected && "radio__selected"}`}></div>
        </div>
      </div>
      {children}
    </Card>
  );
};

export default SelectableCard;
