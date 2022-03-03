import React from "react";
import styled from "styled-components";
import { ISelectOption } from "../../types";
import Label from "../Label";

interface SelectProps {
  name: string;
  options: ISelectOption[];
  onChange: (e: any) => void;
  label?: string;
  defaultLabel?: string;
  [x: string]: any;
}

interface StyledSelectProps {
  value: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2rem 3rem;
  margin-top: 2rem;
  width: 100%;
  outline: 0;
  font-size: 2rem;
  font-family: "Jost";
  color: ${(props) => (props.value ? "#000" : "rgba(0,0,0,0.5)")};
`;

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  onChange,
  defaultLabel,
  ...rest
}) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
    onChange(e);
  };
  return (
    <div>
      <Label>{label}</Label>
      <StyledSelect name={name} value={value} onChange={handleChange}>
        <option value="">--{defaultLabel || "Choose an option"}--</option>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Select;
