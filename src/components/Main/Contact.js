import * as React from "react";
import styled from "styled-components";
import { AnchorTarget, ContactForm } from "../UI";

const Container = styled.section`
  @media (max-width: 612px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
  }
  padding-left: 30%;
  padding-right: 30%;
  padding-bottom: 5%;
  text-align: center;
`;

const Heading = styled.h2`
  @media (max-width: 468px) {
    width: 250px;
  }
  margin-bottom: 30px;
  color: var(--dark-blue);
`;

const Contact = () => {
  return (
    <Container>
      <AnchorTarget id="contact" offset={-115} />
      <Heading>Send me an email!</Heading>
      <ContactForm />
    </Container>
  );
};

export { Contact };
