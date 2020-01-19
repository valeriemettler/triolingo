import styled from "@emotion/styled";
import React from "react";

type Props = { text: string };

const StyledButton = styled.button`
  color: #4b4b4b;
  border-width: 2px 2px 4px;
  padding: 20px;
  margin: 10px;
  border-radius: 16px;
  width: 260px;
  font-size: 20px;

  &:hover {
    color: #1cb0f6;
    border-color: #1cb0f6;
  }
`;

const Button: React.FC<Props> = ({ text }) => (
  <StyledButton type="button">{text}</StyledButton>
);

export default Button;
