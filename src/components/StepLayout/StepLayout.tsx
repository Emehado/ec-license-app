import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import Nav from "../Nav";
import Main from "../Main";
import useActions from "./actions";
import { Outlet } from "react-router-dom";
import { IStep } from "../../types";

interface StepLayoutProps {
  steps: IStep[];
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 270px 1fr;
  height: 100vh;
  @media (min-width: 1024px) {
    grid-template-rows: 100fr;
    grid-template-columns: 3fr 7fr;
  }
`;

const StepLayout: React.FC<StepLayoutProps> = ({ steps }) => {
  useActions({ steps });

  return (
    <StyledLayout>
      <Nav />
      <Main>
        {<Outlet />}
        <footer style={{ height: "10rem" }}></footer>
      </Main>
    </StyledLayout>
  );
};

export default observer(StepLayout);
