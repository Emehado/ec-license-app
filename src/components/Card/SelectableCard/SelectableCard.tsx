import React from "react";
import styled, { css } from "styled-components";
import Card from "../Card";

interface SelectableCardProps {
  children: React.ReactNode;
  onSelected?: () => void;
  selected?: boolean;
  disabled?: boolean;
}
interface StyledRadioButtonProps {
  selected?: boolean;
  disabled?: boolean;
}

const StyledRadioButton = styled.div<StyledRadioButtonProps>`
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
      ${(props: StyledRadioButtonProps) =>
        props.selected &&
        css`
          height: 12px;
          width: 12px;
          border-radius: 15px;
          background: var(--color-primary);
        `}
    }
  }
`;

const SelectableCard: React.FC<SelectableCardProps> = ({
  children,
  selected,
  onSelected,
  disabled,
}) => {
  const handleClick = () => {
    if (disabled) return;
    if (onSelected) onSelected();
  };
  return (
    <Card>
      <StyledRadioButton
        disabled={disabled}
        selected={selected}
        onClick={handleClick}
      >
        <div className="radio">
          <div className="selected"></div>
        </div>
      </StyledRadioButton>
      {children}
    </Card>
  );
};

export default SelectableCard;
