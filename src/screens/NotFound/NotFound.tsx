import React from "react";
import styled from "styled-components";
import notfoundImage from "../../assets/images/404.svg";
import { Link } from "react-router-dom";

const StyledNotfound = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    height: 300px;
  }
  & > h1 {
    text-align: center;
    max-width: 600px;
  }
`;
const NotFound = () => {
  return (
    <StyledNotfound>
      <img src={notfoundImage} alt="404, resource not found." />
      <h1>Now what would you be looking for here?</h1>
      <Link to="/">Head Back to Home</Link>
    </StyledNotfound>
  );
};

export default NotFound;
