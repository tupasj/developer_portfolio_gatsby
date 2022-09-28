import * as React from "react";
import styled from "styled-components";

const Container = styled.section``;

const Heading = styled.h2``;

const About = () => {
  return (
    <Container>
      <Heading>About Me</Heading>
      <p>
        I'm a front-end developer who's passionate about making aesthetically
        pleasing and fully functional websites. Technology has always been a
        significant part of my life, and the amount of different things that can
        be achieved through web applications constantly drive me to learn more
        and build new things.
      </p>
      <p>
        When I'm not working on websites, I usually spend my time experimenting
        with game development tools, playing video games, and learning
        languages.
      </p>
    </Container>
  );
};

export { About };
