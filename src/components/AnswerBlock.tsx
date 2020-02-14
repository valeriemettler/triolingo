import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction } from "react";
import AnswerButton from "./AnswerButton";

type Props = {
  answers: string[];
  selectedAnswer?: number;
  selectAnswer: Dispatch<SetStateAction<number>>;
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const AnswerBlock: React.FC<Props> = ({
  answers,
  selectedAnswer,
  selectAnswer
}) => {
  return (
    <Wrapper>
      {answers?.map((answer, index) => (
        <AnswerButton
          text={answer}
          value={(index + 1).toString()}
          checked={selectedAnswer === index + 1}
          onClick={() => selectAnswer(index + 1)}
        />
      ))}
    </Wrapper>
  );
};

export default AnswerBlock;
