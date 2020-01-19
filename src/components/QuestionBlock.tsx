import styled from "@emotion/styled";
import React from "react";
import AnswerBlock from "./AnswerBlock";
import Toast from "./Toast";
import { H1 } from "./Typography";

type QuestionType = "WRITE_IN_FOREIGN" | "SELECT_MISSING_WORD";

type Props = { questionType: QuestionType };

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`;

const QuestionBlock: React.FC<Props> = () => (
  <Wrapper>
    <H1>Select the missing word</H1>
    <AnswerBlock answers={["ist", "bin"]} />
    <Toast />
  </Wrapper>
);

export default QuestionBlock;
