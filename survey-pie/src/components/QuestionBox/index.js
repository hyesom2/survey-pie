import styled from 'styled-components';

import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox({
  question,
  step,
  questionsLength,
  answer,
  setAnswer,
}) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons step={step} questionsLength={questionsLength} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
