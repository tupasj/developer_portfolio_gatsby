import * as React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Container = styled.div``;

const Form = styled.form`
  display: grid;
  gap: 12px;
`;

// Notification box
const NotificationBox = styled.div``;

const Success = styled.div``;

const Error = styled.div`
  color: red;
`;

// Form elements
const Honeypot = styled.input`
  display: none;
`;

const Input = styled.input``;

const TextArea = styled.textarea`
  height: 250px;
`;

const Send = styled.button`
  justify-self: center;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvzrbdp");
  // const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        
        <NotificationBox>
          {state.succeeded && <Success>Email sent! &#128512;</Success>}
          <Error>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <ValidationError errors={state.errors} />
          </Error>
        </NotificationBox>

        <Honeypot type="text" name="_gotcha" />
        <Input type="text" name="name" id="name" placeholder="Name" />
        <Input id="email" type="email" name="email" placeholder="Email" required/>
        <TextArea id="message" name="message" placeholder="Message" required /> 

        <Send type="submit" disabled={state.submitting}>Send</Send>
      </Form>
    </Container>
  );
};

export { ContactForm };