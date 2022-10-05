import * as React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding-top: 21px;
  padding-bottom: 21px;
  line-height: 1.75;
  text-align: center;
  color: var(--light-gray);
  background-color: var(--dark-blue);
  border-top: ${(props) => props.theme.footerBorderTop};
`;

const Attribution = styled.a`
  color: var(--light-gray);
  text-decoration: underline;
`;

const SocialIcons = styled.div``;

const SocialIcon = styled.span`
  margin: 7px;
  font-size: 32px;
`;

const Footer = () => {
  return (
    <Container>
      <SocialIcons>
        <SocialIcon>
          <a href="https://github.com/tupasj" target="__blank">
            <i className="devicon-github-original"></i>
          </a>
        </SocialIcon>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/jeremy-tupas" target="__blank">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </SocialIcon>
      </SocialIcons>
      <div>&copy; 2022 - Jeremy Tupas</div>
      <Attribution
        href="https://www.vecteezy.com/free-vector/web"
        target="_blank"
        rel="noreferrer"
      >
        Web Vectors by Vecteezy
      </Attribution>
    </Container>
  );
};

export { Footer };
