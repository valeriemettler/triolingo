import styled from "@emotion/styled";
import React from "react";
import ProgressBar from "../components/ProgressBar";
import QuestionBlock from "../components/QuestionBlock";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Quiz: React.FC = () => (
  <Wrapper>
    <ProgressBar percentage={20} />
    <QuestionBlock questionType="SELECT_MISSING_WORD" />
  </Wrapper>
);

export default Quiz;
