import * as React from "react";
import styled from "styled-components";

const Container = styled.header`
display: flex;
justify-content: space-between;
padding: 12px;
color: white;
background-color: black;
`;

const Left = styled.span``;

const Right = styled.span`
display: flex;
gap: 25px;
`;

const Header = () => {
  return (
    <Container>
      <Left>JT</Left>
      <Right>
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
      </Right>
    </Container>
  );
};

export { Header };
