import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
display: flex;
justify-content: center;
`;

const IntroText = styled.div``;

const Banner = () => {
  return (
    <Container>
      <IntroText>
        <div>Hi, I'm name</div>
        <div>web developer</div>
      </IntroText>
      <StaticImage src="../../images/icon.png" alt="placeholder image" />
    </Container>
  );
};

export { Banner };
