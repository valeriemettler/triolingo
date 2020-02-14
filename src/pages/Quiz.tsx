import styled from "@emotion/styled";
import React, { useState } from "react";
import AnswerBlock from "../components/AnswerBlock";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import QuestionBlock from "../components/QuestionBlock";
import Toast from "../components/Toast";

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
  const [selectedAnswer, selectAnswer] = useState(-1);
  const [error, setError] = useState("");

  function nextQuestion() {
    setQuestionIndex(questionIndex + 1);
  }

  function checkAnswer(givenAnswer: number, correctAnswer: number) {
    if (givenAnswer === correctAnswer) {
      nextQuestion();
    } else {
      setError("Wrong answer");
    }
  }

  return (
    <Wrapper>
      <ProgressBar percentage={20} />
      <QuestionBlock {...QUESTIONS[questionIndex]} />
      <AnswerBlock
        answers={QUESTIONS[questionIndex]?.answers}
        selectAnswer={selectAnswer}
        selectedAnswer={selectedAnswer}
      />
      <Toast>
        <Button text="SKIP" onClick={() => nextQuestion()} />
        <Button
          primary
          text="CHECK"
          onClick={() =>
            checkAnswer(
              selectedAnswer,
              QUESTIONS[questionIndex].correctAnswerIndex
            )
          }
        />
      </Toast>
    </Wrapper>
  );
};

export default Quiz;
