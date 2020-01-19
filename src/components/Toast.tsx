import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";

const WrapperOuter = styled.div`
  padding: 40px;
  display: flex;
  max-width: 1200px;
  position: absolute;
  bottom: 0;
`;

const WrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toast: React.FC = () => (
  <WrapperOuter>
    <WrapperInner>
      <Button text="SKIP" />
      <Button primary text="CHECK" />
    </WrapperInner>
  </WrapperOuter>
);

export default Toast;
