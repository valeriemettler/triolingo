import styled from "@emotion/styled";
import React, { useState } from "react";
import AnswerButton from "./AnswerButton";

type Props = { answers: string[] };

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const AnswerBlock: React.FC<Props> = ({ answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  return (
    <Wrapper>
      {answers.map((answer, index) => (
        <AnswerButton
          text={answer}
          value={(index + 1).toString()}
          checked={selectedAnswer === index + 1}
          onClick={() => setSelectedAnswer(index + 1)}
        />
      ))}
    </Wrapper>
  );
};

export default AnswerBlock;
