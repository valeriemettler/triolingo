import styled from "@emotion/styled";
import React from "react";

type LabelProps = {
  htmlFor?: string;
  checked: boolean;
};

type Props = {
  text: string;
  value: string;
  checked: boolean;
  onClick: () => void;
};

const StyledLabel = styled("label")<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-color: ${props => (props.checked ? "#1cb0f6" : "#e5e5e5")};
  color: ${props => (props.checked ? "#1cb0f6" : "#4b4b4b")};
  border-style: solid;
  border-width: 2px 2px 4px;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 16px;
  width: 260px;
  font-size: 20px;

  &:hover {
    color: #1cb0f6;
    border-color: #1cb0f6;
    background-color: #ddf4ff;
  }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: inherit;
  border-radius: 8px;
  color: inherit;
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  justify-content: center;
  width: 30px;
`;

const StyledInput = styled.input`
  visibility: hidden;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: -30px;
  color: inherit;
`;

const AnswerButton: React.FC<Props> = ({ text, value, checked, onClick }) => (
  <StyledLabel htmlFor={value} checked={checked} onClick={onClick}>
    <StyledInput
      id={value}
      name="answer"
      type="radio"
      value={value}
      checked={true}
    />
    <Number>{value}</Number>
    <TextWrapper>{text}</TextWrapper>
  </StyledLabel>
);

export default AnswerButton;
