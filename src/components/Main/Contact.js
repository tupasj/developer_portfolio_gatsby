import * as React from "react";
import styled from "styled-components";
import { ContactForm } from "../UI";

const Container = styled.section`
margin-left: 15%;
margin-right: 15%;
margin-bottom: 5%;
text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.75rem;
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact</Heading>
      <ContactForm />
    </Container>
  );
};

export { Contact };
