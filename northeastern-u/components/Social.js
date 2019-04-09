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

const Social = () => (
  <StyledContainer>
    <div>
      <img src="../images/GitHub-Mark-120px-plus.png" />
      <code>parkerziegler</code>
    </div>
    <div>
      <img src="../images/Twitter_Logo_Blue.png" />
      <code>@parker_ziegler</code>
    </div>
  </StyledContainer>
);

export default Social;
