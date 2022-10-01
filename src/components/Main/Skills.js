import * as React from "react";
import styled from "styled-components";
import { AnchorTarget } from "../UI/AnchorTarget";

const Container = styled.section`
  padding-left: 9%;
  padding-right: 9%;
  padding-top: 5%;
  &:target {
    display: block;
    position: relative;
    top: -50px; /* this is your offset */
    visibility: hidden;
    padding-top: 5%;
  }
`;

const Heading = styled.h2`
  margin-bottom: 45px;
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 42px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 100px;
`;

const Skills = () => {
  return (
    <Container>
      <AnchorTarget id="skills" offset={-200} />
      <Heading>Skills</Heading>
      <Wrapper>
        <Skill>
          <Icon>
            <i className="devicon-html5-plain colored"></i>
          </Icon>
          <span>HTML5</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-css3-plain colored"></i>
          </Icon>
          <span>CSS3</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-sass-original colored"></i>
          </Icon>
          <span>SASS</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-javascript-plain colored"></i>
          </Icon>
          <span>JavaScript</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-react-original colored"></i>
          </Icon>
          <span>React</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-jest-plain colored"></i>
          </Icon>
          <span>Jest</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-git-plain colored"></i>
          </Icon>
          <span>Git</span>
        </Skill>
        <Skill>
          <Icon>
            <i className="devicon-photoshop-plain colored"></i>
          </Icon>
          <span>Photoshop</span>
        </Skill>
      </Wrapper>
    </Container>
  );
};

export { Skills };
