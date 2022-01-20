import React from "react";
import styled, { css } from "styled-components";

interface Props {
  direction: string;
}

const StyledStepper = styled.div.attrs((props: Props) => ({
  direction: props.direction || "horizontal",
}))`
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  .connector {
    ${(props) =>
      props.direction === "horizontal"
        ? css`
            width: 10rem;
            height: 1px;
          `
        : css`
            width: 1px;
            height: 10rem;
          `};
  }

  .stepContainer {
    ${(props) =>
      props.direction === "horizontal"
        ? css`
            flex-direction: row;
          `
        : css`
            flex-direction: column;
          `};
  }
`;

export default StyledStepper;