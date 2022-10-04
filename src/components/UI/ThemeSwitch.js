import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  width: 50px;
  background-color: var(--dark-blue);
  border: 2px solid var(--light-gray);
  border-radius: 9px;
`;

const Switch = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--light-gray);
  transform: translateX(${(props) => props.theme.switchPosition}px);
  transition: transform 200ms;
`;

const ThemeSwitch = ({ toggleTheme }) => {
  const [isToggled, setisToggled] = useState(false);

  const onToggle = () => {
    setisToggled(!isToggled);
    toggleTheme();
  };

  return (
    <Container>
      <Switch onClick={onToggle} />
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
    </Container>
  );
};

export { ThemeSwitch };
