import * as React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
position: absolute;
top: -125%;
height: 100%;
width: 100%;
`;

const move = (props) => keyframes`
0% {
transform: translate(${props.xStart}em, ${props.yStart}em);
}
25% {
  transform: translate(${props.xEnd}/4-${props.xJitter}em, ${props.yEnd}/4-${props.yJitter}em);
}
50% {
transform: translate(${props.xEnd}/2-${props.xJitter}em, ${props.yEnd}/2-${props.yJitter}em);
}
75% {
transform: translate(${props.xEnd}/1.3-${props.xJitter}em, ${props.yEnd}/1.3-${props.yJitter}em);
}
100% {
transform: translate(${props.xEnd}em, ${props.yEnd}em);
}
`;

const fadeInOut = (props) => keyframes`
0% {
opacity: 0;
}
15% {
  opacity: ${props.opacity};
}
50% {
  opacity: ${props.opacity};
}
80% {
  opacity: ${props.opacity};
}
100% {
opacity: 0;
}
`;

const Particle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${move} ${(props) => props.lifetime}s infinite linear,
    ${fadeInOut} ${(props) => props.lifetime}s infinite ease-in-out both;
`;

const Particles = ({count}) => {
  const randomParticleParameters = [];
  for (let i = 0; i < count; i++) {
    const getRandomIntWithinRange = (min, max) =>
      Math.round(Math.random() * (max - min) + min);
    const getRandomDecimal = () => Math.random().toFixed(2);
    const getRandomOpacity = (minOpacity) => {
      let opacity = getRandomDecimal();
      while (opacity < minOpacity) {
        opacity = getRandomDecimal();
      }
      return opacity;
    };

    const randomSize = getRandomIntWithinRange(15, 50);
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const randomColor = colors[getRandomIntWithinRange(0, colors.length)];
    const randomLifetime = getRandomIntWithinRange(15, 25);
    const randomOpacity = getRandomOpacity(0.25);
    const randomXStart = getRandomIntWithinRange(1, 100);
    const randomYStart = getRandomIntWithinRange(1, 100);
    const randomXEnd = 100 - randomXStart;
    const randomYEnd = 100 - randomYStart;
    const randomXJitter = getRandomDecimal();
    const randomYJitter = getRandomDecimal();
    
    randomParticleParameters.push({
      size: randomSize,
      color: randomColor,
      lifetime: randomLifetime,
      opacity: randomOpacity,
      xStart: randomXStart,
      yStart: randomYStart,
      xEnd: randomXEnd,
      yEnd: randomYEnd,
      xJitter: randomXJitter,
      yJitter: randomYJitter,
    });
  }

  return (
    <Container>
      {randomParticleParameters.map((parameter, index) => {
        return (
          <Particle
            key={index}
            size={parameter.size}
            color={parameter.color}
            lifetime={parameter.lifetime}
            opacity={parameter.opacity}
            count={count}
            xStart={parameter.xStart}
            yStart={parameter.yStart}
            xEnd={parameter.xEnd}
            yEnd={parameter.yEnd}
            xJitter={parameter.xJitter}
            yJitter={parameter.yJitter}
          />
        );
      })}
    </Container>
  );
};

export { Particles };
