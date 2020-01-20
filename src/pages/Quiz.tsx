import styled from "@emotion/styled";
import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import QuestionBlock from "../components/QuestionBlock";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
type QuestionType = "WRITE_IN_FOREIGN" | "SELECT_MISSING_WORD";

export type Question = {
  type: QuestionType;
  title: string;
  answers: string[];
  correctAnswerIndex: number;
};

const QUESTIONS: Question[] = [
  {
    type: "WRITE_IN_FOREIGN",
    title: "Ich ______ enine Frau",
    answers: ["ist", "bin"],
    correctAnswerIndex: 0
  }
];

const Quiz: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <Wrapper>
      <ProgressBar percentage={20} />
      <QuestionBlock {...QUESTIONS[questionIndex]} />)}
    </Wrapper>
  );
};

export default Quiz;
