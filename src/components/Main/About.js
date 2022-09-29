import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  margin-left: 9%;
  margin-right: 9%;
  margin-bottom: 5%;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1.75rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const About = () => {
  return (
    <Container>
      <Heading>About Me</Heading>
      <Paragraph>
        I'm a front-end developer who's passionate about making aesthetically
        pleasing and fully functional websites. Technology has always been a
        significant part of my life, and the amount of different things that can
        be achieved through web applications constantly drive me to learn more
        and build new things.
      </Paragraph>
      <Paragraph>
        When I'm not working on websites, I usually spend my time experimenting
        with game development tools, playing video games, and learning
        languages.
      </Paragraph>
    </Container>
  );
};

export { About };
