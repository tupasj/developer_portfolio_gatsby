import * as React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const Container = styled.main`
position: relative;
display: flex;
flex-direction: column;
gap: 120px;
`;

const Main = () => {
  return (
    <Container>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export { Main };
