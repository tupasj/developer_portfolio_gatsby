import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Container = styled.a`
  background-color: black;
  color: white;
  padding: 6px;
  border-radius: 9px;
  cursor: pointer;
  transition: transform 200ms;
  background-color: var(--regular-turquoise);
  
  &:hover {
    transform: scale(1.05) translate(4px, -2px);
  }
`;

const IconWrapper = styled.span`
  margin-left: 5px;
`;

const ButtonRedirect = ({ href, target, children }) => {
  return (
    <Container href={href} target={target}>
      {children}
      <IconWrapper>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
      </IconWrapper>
    </Container>
  );
};

export { ButtonRedirect };
