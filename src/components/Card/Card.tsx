import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
  background-color: var(--color-light);
  padding: 3rem;
  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;
export default StyledCard;
