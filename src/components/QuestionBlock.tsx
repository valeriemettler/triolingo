import styled from "@emotion/styled";
import React from "react";
import { Question } from "../pages/Quiz";
import AnswerBlock from "./AnswerBlock";
import Toast from "./Toast";
import { H1 } from "./Typography";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`;

const QuestionBlock: React.FC<Question> = ({ title, answers }) => (
  <Wrapper>
    <div>
      <H1>Select the missing word</H1>
      {title}
    </div>
    <AnswerBlock answers={answers} />
    <Toast />
  </Wrapper>
);

export default QuestionBlock;
