import React from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";

const StyledErrorMessage = styled.div`
  font-size: 1.7rem;
  color: red;
`;

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
  const { touched, errors } = useFormikContext();
  //@ts-ignore
  return touched[name] && errors[name] ? (
    //@ts-ignore
    <StyledErrorMessage>{errors[name]}</StyledErrorMessage>
  ) : null;
};

export default ErrorMessage;
