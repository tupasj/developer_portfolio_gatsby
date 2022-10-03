import * as React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding-top: 21px;
  padding-bottom: 21px;
  line-height: 1.75;
  text-align: center;
  color: var(--light-gray);
  background-color: var(--dark-blue);
`;

const Attribution = styled.a`
  color: var(--light-gray);
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Container>
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
