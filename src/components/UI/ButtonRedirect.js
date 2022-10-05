import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Container = styled.a`
  display: flex;
  gap: 5px;
  padding: 6px;
  border-radius: 9px;
  background-color: var(--regular-turquoise);
  cursor: pointer;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.05) translate(4px, -2px);
  }
`;

const IconWrapper = styled.span`
  font-size: 17px;
`;

const Text = styled.span``;

const ButtonRedirect = ({ href, target, children }) => {
  return (
    <Container href={href} target={target}>
      <Text>{children}</Text>
      <IconWrapper>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
      </IconWrapper>
    </Container>
  );
};

export { ButtonRedirect };
