import React from "react";
import { observer } from "mobx-react-lite";

import Nav from "../Nav";
import Main from "../Main";

import styled from "styled-components";
import PageHeader from "../Header";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 30fr 70fr;
  height: 100vh;
  @media (min-width: 1024px) {
    grid-template-rows: 100fr;
    grid-template-columns: 30fr 70fr;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Nav />
      <Main>
        <PageHeader
          step={1}
          title="Select your preferred service type."
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequatur architecto, excepturi, beatae debitis, deserunt consectetur"
        />
      </Main>
    </StyledLayout>
  );
};

export default observer(Layout);
