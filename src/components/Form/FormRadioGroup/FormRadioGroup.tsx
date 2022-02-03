import React from "react";
import { Field } from "formik";
import ErrorMessage from "../ErrorMessage";
import styled, { css } from "styled-components";
import Label from "../../Label";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  label?: string;
  inline?: boolean;
}

interface StyledFormRadioGroupProps {
  inline: boolean;
}

const StyledFormRadioGroup = styled.div<StyledFormRadioGroupProps>`
  ${(props) =>
    props.inline &&
    css`
      background: yellow;
      // height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      & > * {
        // flex: 1;
        display: inline;
      }
    `}
`;

const FormRadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  label,
  inline = false,
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <StyledFormRadioGroup inline={inline}>
        {options.map((option, index) => (
          <div key={option.value + index}>
            <label>
              <Field
                type="radio"
                name={name}
                value={option.value}
                style={{ marginRight: 10 }}
              />
              {option.label}
            </label>
          </div>
        ))}
        <ErrorMessage name={name} />
      </StyledFormRadioGroup>
    </div>
  );
};

export default FormRadioGroup;
