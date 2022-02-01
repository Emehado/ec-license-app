import React from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../../components/Button";
import styled from "styled-components";
import Card from "../../../components/Card";
import useActions from "./actions";

const StyledImage = styled.img`
  height: 300px;
  width: 100%;
`;
const Step4 = () => {
  const { statuses, handleDone } = useActions();
  const [searchParams] = useSearchParams();
  const statusIndex = searchParams.get("status") === "success" ? 0 : 1;
  const status = statuses[statusIndex];
  return (
    <Card>
      <StyledImage src={status.image} alt={status.title} />
      <h1>Payment {status.title}</h1>
      <p>{status.description}</p>
      <Button variant="primary" onClick={handleDone}>
        Done
      </Button>
    </Card>
  );
};

export default Step4;
