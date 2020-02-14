import styled from "@emotion/styled";
import React from "react";

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

const Toast: React.FC = ({ children }) => (
  <WrapperOuter>
    <WrapperInner>{children}</WrapperInner>
  </WrapperOuter>
);

export default Toast;
