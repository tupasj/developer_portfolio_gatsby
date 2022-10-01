import * as React from "react";
import styled from "styled-components";
import { AnchorTarget, ContactForm } from "../UI";

const Container = styled.section`
@media (max-width: 468px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
padding-left: 30%;
padding-right: 30%;
padding-bottom: 5%;
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
      <AnchorTarget id="contact" offset={-115} />
      <Heading>Contact</Heading>
      <ContactForm />
    </Container>
  );
};

export { Contact };
