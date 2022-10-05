import * as React from "react";
import styled from "styled-components";
import { AnchorTarget } from "../UI";

const Container = styled.section`
  position: relative;
  padding-left: 9%;
  padding-right: 9%;
  padding-top: 7%;
  padding-bottom: 7%;
  transform: skewY(-9deg);
  text-align: center;
  background-color: ${(props) => props.theme.aboutBackgroundColor};
`;

const ContentWrapper = styled.div`
  transform: skewY(9deg);
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  color: var(--dark-blue);
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--dark-blue);
`;

const About = () => {
  return (
    <Container>
      <AnchorTarget id="about" offset={-115} />
      <ContentWrapper>
        <Heading>About Me</Heading>
        <Paragraph>
          I'm a front-end developer who's passionate about making aesthetically
          pleasing and fully functional websites. Technology has always been a
          significant part of my life, and the amount of different things that
          can be achieved through web applications constantly drive me to learn
          more and build new things.
        </Paragraph>
        <Paragraph>
          When I'm not working on websites, I usually spend my time
          experimenting with game development tools, playing video games, and
          learning languages.
        </Paragraph>
      </ContentWrapper>
    </Container>
  );
};

export { About };
