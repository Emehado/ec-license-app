import React from "react";
import Input from "../../Input";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";
import styled from "styled-components";

interface InputProps {
  name: string;
  type: string;
  fullWidth?: boolean;
  [rest: string]: any;
}

const StyledField = styled.div`
  margin-bottom: 1.5rem;
`;

const Field: React.FC<InputProps> = ({ name, type, fullWidth, ...rest }) => {
  const { values, handleChange, handleBlur } = useFormikContext();
  return (
    <StyledField>
      <Input
        fullWidth={fullWidth}
        type={type}
        name={name}
        onBlur={handleBlur}
        //@ts-ignore
        value={values[name]}
        onChange={handleChange}
        {...rest}
      />
      <ErrorMessage name={name} />
    </StyledField>
  );
};

export default Field;
