import * as React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ThemeSwitch } from "../UI/ThemeSwitch";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: var(--light-gray);
  background-color: var(--dark-blue);
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);

  span {
    font-weight: bold;
    transition: transform 200ms;
  }
  span:hover {
    transform: scale(1.22);
  }

  nav > a::after {
    content: "";
    display: block;
    height: 3px;
    margin-top: 3px;
    width: 0%;
    transition: all ease-in-out 200ms;
  }
  nav > a:hover::after {
    width: 100%;
    background-color: white;
    border-radius: 4px;
  }
`;

const Left = styled.span``;

const Right = styled.nav`
  @media (max-width: 472px) {
    gap: 12px;
  }
  display: flex;
  gap: 25px;
  a {
    margin-top: 5px;
  }
`;

const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Container>
      <Left>
        <AnchorLink to="/#banner">JT</AnchorLink>
      </Left>
      <Right>
        <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <AnchorLink to="/#about">About</AnchorLink>
        <AnchorLink to="/#skills">Skills</AnchorLink>
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <AnchorLink to="/#contact">Contact</AnchorLink>
      </Right>
    </Container>
  );
};

export { Header };
