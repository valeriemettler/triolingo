import styled from "@emotion/styled";
import React from "react";

type Props = {
  text: string;
  primary?: boolean;
};

type StyledProps = {
  primary?: boolean;
};

const StyledButton = styled.button<StyledProps>`
  color: ${props => (props.primary ? "#FFF" : "#4b4b4b")};
  background-color: ${props => (props.primary ? "#78c800" : "#FFF")};
  border-color: ${props => (props.primary ? "#58a700" : "#e5e5e5")};
  border-width: 2px 2px 4px;
  padding: 13px 16px;
  margin: 10px;
  border-radius: 16px;
  font-size: 18px;
  min-width: 150px;

  &:hover {
    filter: brightness(1.1);
    color: ${props => (props.primary ? "#FFF" : "#1cb0f6")};
    border-color: ${props => (props.primary ? "#58a700" : "#1cb0f6")};
  }
`;

const Button: React.FC<Props> = ({ text, primary }) => (
  <StyledButton primary={primary} type="button">
    {text}
  </StyledButton>
);

export default Button;
