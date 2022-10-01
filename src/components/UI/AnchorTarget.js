import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  visibility: hidden;
  display: block;
  position: relative;
  top: ${(props) => props.offset}px;
`;

const AnchorTarget = ({id, offset}) => <Container id={id} offset={offset}></Container>;

export { AnchorTarget };
