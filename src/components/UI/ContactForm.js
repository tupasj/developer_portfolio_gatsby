import * as React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ContactForm = () => {
  return (
    <Container>
      <form style={{display: 'grid', gap: '12px'}}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Name"/>
        <label htmlFor="sender-email"></label>
        <input type="text" id="sender-email" name="sender-email" placeholder="Email" />
        <label htmlFor="message"></label>
        <textarea id="message" name="message" placeholder="Message" style={{height: '250px'}}></textarea>
        <input type="submit" value="Submit" style={{justifySelf: 'center'}} />
      </form>
    </Container>
  );
};

export { ContactForm };
