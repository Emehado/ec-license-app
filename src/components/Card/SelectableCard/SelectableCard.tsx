import React from "react";
import styled, { css } from "styled-components";
import Card from "../Card";

interface SelectableCardProps {
  children: React.ReactNode;
  onSelected: () => void;
  selected?: boolean;
}
const StyledSelectableCard = styled(Card).attrs<SelectableCardProps>(
  (props) => ({
    selected: props.selected || false,
  })
)`
  & > .radioContainer {
    display: flex;
    justify-content: flex-end;
    & > .radio {
      height: 20px;
      width: 20px;
      border-radius: 15px;
      border: 1px solid var(--color-gray);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-light-bg);
      &:hover {
        cursor: pointer;
      }
      & > .selected {
        background-color: orange;
        ${(props: SelectableCardProps) =>
          props.selected &&
          css`
            height: 12px;
            width: 12px;
            border-radius: 15px;
            background: var(--color-primary);
          `}
      }
    }
  }
`;
const SelectableCard: React.FC<SelectableCardProps> = ({
  children,
  selected,
  onSelected,
}) => {
  return (
    <StyledSelectableCard onSelected={onSelected} selected={selected}>
      <div className="radioContainer" onClick={onSelected}>
        <div className="radio">
          <div className="selected"></div>
        </div>
      </div>
      {children}
    </StyledSelectableCard>
  );
};

export default SelectableCard;
