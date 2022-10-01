import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { ButtonRedirect } from "../UI";

const Container = styled.section`
  padding-left: 9%;
  padding-right: 9%;
  padding-top: 7%;
  padding-bottom: 7%;
  transform: skewY(9deg);
  text-align: center;
  background-color: lightgray;
`;

const ContentWrapper = styled.div`
  transform: skewY(-9deg);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1.75rem;
`;

// Project
const Project = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto auto 1fr;
  padding: 18px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  max-width: 335px;
`;

const Title = styled.h2`
  padding-bottom: 12px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 300px;
  margin-bottom: 11px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

const TechnologiesUsed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const TechnologyUsed = styled.span`
  border-radius: 12px;
  padding: 5.5px;
  background-color: black;
  color: white;
`;

const Description = styled.div`
  margin-bottom: 7px;
  line-height: 1.25;
`;

const Buttons = styled.div`
  align-self: end;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <ContentWrapper>
        <Heading>Projects</Heading>
        <Wrapper>
          <Project>
            <Title>Portfolio Site</Title>
            <ImageContainer>
              <StaticImage
                src="../../images/macbook-pro-landing-page.png"
                alt="placeholder image"
              />
            </ImageContainer>
            <TechnologiesUsed>
              <TechnologyUsed>HTML</TechnologyUsed>
              <TechnologyUsed>CSS</TechnologyUsed>
              <TechnologyUsed>Gatsby.js</TechnologyUsed>
              <TechnologyUsed>styled-components</TechnologyUsed>
            </TechnologiesUsed>
            <Description>
              Not too much to say here, you're already looking at it! Some
              things that can be pointed out here is the use of Gatsby.js, which
              is ideal for sites such as this one, as it is optimized for static
              websites. Moreover, the CSS was handled through styled-components,
              which is one of the most widely adapted ways to write styling code
              in React-based apps due to it coupling HTML/CSS/JS into a cohesive
              component.
            </Description>
            <Buttons>
              <ButtonRedirect href="#">Live demo</ButtonRedirect>
              <ButtonRedirect href="#">Source code</ButtonRedirect>
            </Buttons>
          </Project>
          <Project>
            <Title>Product Landing Page</Title>
            <ImageContainer>
              <StaticImage
                src="../../images/macbook-pro-landing-page.png"
                alt="placeholder image"
              />
            </ImageContainer>
            <TechnologiesUsed>
              <TechnologyUsed>HTML</TechnologyUsed>
              <TechnologyUsed>CSS</TechnologyUsed>
              <TechnologyUsed>SASS</TechnologyUsed>
              <TechnologyUsed>Responsive design</TechnologyUsed>
            </TechnologiesUsed>
            <Description>
              A product landing page clone of the Apple MacBook. It has been
              designed to be fully responsive for the three standard screen
              sizes (desktop, tablet, and mobile) by utilizing media queries.
              For styling, I used the CSS preprocessor SASS, paired with the BEM
              naming convention to enhance code readability.
            </Description>
            <Buttons>
              <ButtonRedirect
                href="https://tupasj.github.io/MacBook_Pro_Landing_Page/"
                target="_blank"
              >
                Live demo
              </ButtonRedirect>
              <ButtonRedirect
                href="https://github.com/tupasj/MacBook_Pro_Landing_Page"
                target="_blank"
              >
                Source code
              </ButtonRedirect>
            </Buttons>
          </Project>
          <Project>
            <Title>Fake Store</Title>
            <ImageContainer>
              <StaticImage src="../../images/fake-store.png" alt="fake store" />
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
              optimize page loading speeds, by using the React Router v6
              library. In addition, it integrates various backend services
              through Firebase, namely hosting, authentication, and realtime
              database. Users can create accounts, browse through various
              products, and add items to their cart.
            </Description>
            <Buttons>
              <ButtonRedirect
                href="https://shopping-cart-27e1d.firebaseapp.com/"
                target="_blank"
              >
                Live demo
              </ButtonRedirect>
              <ButtonRedirect
                href="https://github.com/tupasj/TOP_Shopping_Cart"
                target="_blank"
              >
                Source code
              </ButtonRedirect>
            </Buttons>
          </Project>
          <Project>
            <Title>Twitch.tv Clone</Title>
            <ImageContainer>
              <StaticImage
                src="../../images/twitchtv-clone.png"
                alt="twitch.tv clone"
              />
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
              asynchronous operations within React, I integrated various
              features of the website, including live video and chat.
            </Description>
            <Buttons>
              <ButtonRedirect
                href="https://site-clone-6db61.firebaseapp.com/"
                target="_blank"
              >
                Live demo
              </ButtonRedirect>
              <ButtonRedirect
                href="https://github.com/tupasj/TOP_Site_Clone"
                target="_blank"
              >
                Source code
              </ButtonRedirect>
            </Buttons>
          </Project>
        </Wrapper>
      </ContentWrapper>
    </Container>
  );
};

export { Projects };
