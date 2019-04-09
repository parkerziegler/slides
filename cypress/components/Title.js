import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      margin-right: 20px;
    }
  }
`;

const Title = () => (
  <StyledContainer>
    <div>
      <img src="../images/formidable.svg" />
      <code>Demo Day</code>
    </div>
    <div>
      <code>@parkie-doo</code>
    </div>
  </StyledContainer>
);

export default Title;
