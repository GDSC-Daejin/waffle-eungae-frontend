import React, { useMemo } from "react";
import styled, { keyframes, css } from "styled-components";

const pulseKeyframe = keyframes` /* 시작, 중간, 끝에서의 밝기 표현 */
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
`;

const Base = styled.span`
  // 스켈레톤 감싸줌, Props 받아서 하나씩 구현
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && "border-radius: 8px"};
  ${({ circle }) => circle && "border-radius: 50%"};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton = ({
  animation = true,
  children,
  width,
  height,
  circle,
  rounded,
  count,
  unit = "px",
  color = "#9f9f9f",
  style,
}) => {
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count]
  ); /*count 숫자만큼의 배열을 선언해서 '-'로 join*/

  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
    >
      <Content>{children || content}</Content>
    </Base>
  );
};

export default Skeleton;
