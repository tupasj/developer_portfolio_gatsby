import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  display: grid;
  align-items: center;
  padding: 5% 4% 7% 4%;
`;

const ImageContainer = styled.div`
  justify-self: center;
`;

// Intro text
const IntroText = styled.div`
  margin-bottom: 7px;
`;

const IntroTextTop = styled.div`
  margin-bottom: 22px;
  font-size: 42px;
  font-weight: bold;
`;

const IntroTextBottom = styled.div`
  font-size: 26px;
`;

const Banner = () => {
  return (
    <Container>
      <IntroText>
        <IntroTextTop>Hi, I'm name</IntroTextTop>
        <IntroTextBottom>web developer</IntroTextBottom>
      </IntroText>
      <ImageContainer>
        <StaticImage
          src="../../images/web-developer.png"
          alt="placeholder image"
        />
      </ImageContainer>
    </Container>
  );
};

export { Banner };
