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
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} answer={answer} setAnswer={setAnswer} />
      <ActionButtons step={step} questionsLength={questionsLength} />
    </div>
  );
}
