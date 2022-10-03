import * as React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div``;

const Form = styled.form`
  display: grid;
  gap: 23px;
  padding: 25px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
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

const Input = styled.input`
  border: 2px solid var(--light-blue);
  border-radius: 5px;
  background-color: #fafafa;
`;

const TextArea = styled.textarea`
  height: 250px;
  resize: none;
  background-color: #fafafa;
  border: 2px solid var(--light-blue);
  border-radius: 5px;
`;

const Send = styled.button`
  @media (max-width: 762px) {
    width: 35%;
  }
  justify-self: center;
  padding: 6px;
  width: 25%;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  background-color: var(--light-blue);
  cursor: pointer;
`;

const IconWrapper = styled.span`
  margin-left: 6px;
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <ValidationError errors={state.errors} />
          </Error>
        </NotificationBox>

        <Honeypot type="text" name="_gotcha" />
        <Input type="text" name="name" id="name" placeholder="Your name" />
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <TextArea
          id="message"
          name="message"
          placeholder="Your message"
          required
        />

        <Send type="submit" disabled={state.submitting}>
          Send
          <IconWrapper>
            <FontAwesomeIcon icon={faPaperPlane} />
          </IconWrapper>
        </Send>
      </Form>
    </Container>
  );
};

export { ContactForm };
