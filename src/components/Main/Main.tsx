import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

interface MainProps {
  children: React.ReactNode;
}
interface StyledMainProps {
  isMobile: boolean;
}
const StyledMain = styled.main<StyledMainProps>`
  height: 100%;
  width: 100%;
  padding: 4rem;
  padding-top: ${(props) => (props.isMobile ? "15vh" : 0)};
  background-color: ${(props) => props.theme.colors.background};
  @media (min-width: 1024px) {
    padding: 8rem;
  }
  @media (min-width: 1624px) {
    padding: 10rem 20rem;
  }
`;
const Main: React.FC<MainProps> = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return <StyledMain isMobile={!isDesktop}>{children}</StyledMain>;
};

export default Main;
