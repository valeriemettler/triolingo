import styled from "@emotion/styled";
import React from "react";

type Props = { percentage: number };

const BarBackground = styled.div`
  border-radius: 98px;
  height: 16px;
  background: #e5e5e5;
  width: 100%;
`;

const BarForeground = styled("div")<Props>`
  background: #78c800;
  min-width: 16px;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
  height: 16px;
  border-radius: 86px;
  width: ${(props: Props) => props.percentage}%;

  &:after {
    background: #fff;
    border-radius: 98px;
    content: "";
    display: block;
    height: 5px;
    margin: 0 10px 0 15px;
    opacity: 0.2;
    transform: translate3d(0, 4px, 0);
  }
`;

const ProgressBar: React.FC<Props> = ({ percentage }) => (
  <BarBackground>
    <BarForeground percentage={percentage} />
  </BarBackground>
);

export default ProgressBar;
