import * as React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  color: white;
  background-color: black;
`;

const Left = styled.span``;

const Right = styled.nav`
  display: flex;
  gap: 25px;
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <AnchorLink to="/#banner">JT</AnchorLink>
      </Left>
      <Right>
        <AnchorLink to="/#about">About</AnchorLink>
        <AnchorLink to="/#skills">Skills</AnchorLink>
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <AnchorLink to="/#contact">Contact</AnchorLink>
      </Right>
    </Container>
  );
};

export { Header };
