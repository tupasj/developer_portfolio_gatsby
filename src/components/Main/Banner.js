import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorTarget, Particles } from "../UI";

const Container = styled.section`
  position: relative;
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
  font-size: 46px;
  font-weight: bold;
  color: ${(props) => props.theme.bannerIntroTextTopColor};
`;

const IntroTextBottom = styled.div`
  font-size: 28px;
  color: var(--regular-turquoise);
`;

const Banner = () => {
  return (
    <Container>
      <AnchorTarget id="banner" offset={-121} />
      <IntroText>
        <IntroTextTop>Hi, I'm Jeremy</IntroTextTop>
        <IntroTextBottom>web developer</IntroTextBottom>
      </IntroText>
      <ImageContainer>
        <StaticImage
          src="https://cdn.jsdelivr.net/gh/tupasj/developer_portfolio/src/images/web-developer.png"
          alt="web developer coding"
        />
      </ImageContainer>
      <Particles count={29} />
    </Container>
  );
};

export { Banner };
