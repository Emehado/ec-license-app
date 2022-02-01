import React from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import Select from "../../Select";
import { ISelectOption } from "../../../types";
import ErrorMessage from "../ErrorMessage";

interface SelectProps {
  name: string;
  options: ISelectOption[];
  onChangeOption?: (e: Event) => void;
  [rest: string]: any;
}

const StyledSelect = styled.div`
  margin-bottom: 1.5rem;
`;

const FormSelect: React.FC<SelectProps> = ({
  name,
  options,
  onChangeOption,
  ...rest
}) => {
  const { values, handleBlur, handleChange } = useFormikContext();
  return (
    <StyledSelect>
      <Select
        options={options}
        name={name}
        //@ts-ignore
        value={values[name]}
        onChange={(e: Event) => {
          handleChange(e);
          if (onChangeOption) onChangeOption(e);
        }}
        onBlur={handleBlur}
        {...rest}
      />
      <ErrorMessage name={name} />
    </StyledSelect>
  );
};

export default FormSelect;
