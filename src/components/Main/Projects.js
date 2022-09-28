import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section``;

const Wrapper = styled.div`
  display: flex;
`;

const Heading = styled.h2``;

// Project
const Project = styled.div``;

const Title = styled.h2``;

const ImageContainer = styled.div`
  width: 100px;
`;

const TechnologiesUsed = styled.div``;

const TechnologyUsed = styled.span``;

const Description = styled.div``;

const Projects = () => {
  return (
    <Container>
      <Heading>Projects</Heading>
      <Wrapper>
        <Project>
          <Title>Portfolio Site</Title>
          <ImageContainer>
            <StaticImage src="../../images/icon.png" alt="placeholder image" />
          </ImageContainer>
          <TechnologiesUsed>
            <TechnologyUsed>HTML</TechnologyUsed>
            <TechnologyUsed>CSS</TechnologyUsed>
            <TechnologyUsed>Gatsby.js</TechnologyUsed>
            <TechnologyUsed>styled-components</TechnologyUsed>
          </TechnologiesUsed>
          <Description>
            Not too much to say here, you're already looking at it! Some things
            that can be pointed out here is the use of Gatsby.js, which is ideal
            for sites such as this one, as it is optimized for static websites.
            Moreover, the CSS was handled through styled-components, which is
            one of the most widely adapted ways to write styling code in
            React-based apps due to it coupling HTMLCSS/JS into a cohesive
            component.
          </Description>
        </Project>
        <Project>
          <Title>Product Landing Page</Title>
          <ImageContainer>
            <StaticImage src="../../images/icon.png" alt="placeholder image" />
          </ImageContainer>
          <TechnologiesUsed>
            <TechnologyUsed>HTML</TechnologyUsed>
            <TechnologyUsed>CSS</TechnologyUsed>
            <TechnologyUsed>SASS</TechnologyUsed>
            <TechnologyUsed>Responsive design</TechnologyUsed>
          </TechnologiesUsed>
          <Description>
            A product landing page clone of the Apple MacBook. It has been
            designed to be fully responsive for the three standard screen sizes
            (desktop, tablet, and mobile) by utilizing media queries. For
            styling, I used the CSS preprocessor SASS, paired with the BEM
            naming convention to enhance code readability.
          </Description>
        </Project>
        <Project>
          <Title>Fake Store</Title>
          <ImageContainer>
            <StaticImage src="../../images/icon.png" alt="placeholder image" />
          </ImageContainer>
          <TechnologiesUsed>
            <TechnologyUsed>HTML</TechnologyUsed>
            <TechnologyUsed>CSS</TechnologyUsed>
            <TechnologyUsed>React</TechnologyUsed>
            <TechnologyUsed>React Router</TechnologyUsed>
            <TechnologyUsed>Firebase</TechnologyUsed>
          </TechnologiesUsed>
          <Description>
            Built a dynamic multi-page fake shopping website with React and
            Firebase. This site involves client-side routing, which helps
            optimize page loading speeds, by using the React Router v6 library.
            In addition, it integrates various backend services through
            Firebase, namely hosting, authentication, and realtime database.
            Users can create accounts, browse through various products, and add
            items to their cart.
          </Description>
        </Project>
        <Project>
          <Title>Twitch.tv Clone</Title>
          <ImageContainer>
            <StaticImage src="../../images/icon.png" alt="placeholder image" />
          </ImageContainer>
          <TechnologiesUsed>
            <TechnologyUsed>HTML</TechnologyUsed>
            <TechnologyUsed>CSS</TechnologyUsed>
            <TechnologyUsed>JavaScript</TechnologyUsed>
            <TechnologyUsed>React</TechnologyUsed>
            <TechnologyUsed>Axios</TechnologyUsed>
            <TechnologyUsed>Jest</TechnologyUsed>
            <TechnologyUsed>React Testing Library</TechnologyUsed>
          </TechnologiesUsed>
          <Description>
            Cloned the popular livestreaming site Twitch.tv, replicating its
            visual design and including its core features. Implemented unit
            tests while incorporating testing techniques such as snapshots and
            mocking API calls. By interacting with the Twitch API and handling
            asynchronous operations within React, I integrated various features
            of the website, including live video and chat.
          </Description>
        </Project>
      </Wrapper>
    </Container>
  );
};

export { Projects };
