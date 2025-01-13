import { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

export default function App() {
  const questions = [
    {
      title: '질문1',
      desc: '설명1',
      type: 'text',
      options: {},
      required: false,
    },
    {
      title: '질문2',
      desc: '설명2',
      type: 'text',
      options: {},
      required: false,
    },
    {
      title: '질문3',
      desc: '설명3',
      type: 'text',
      options: {},
      required: false,
    },
  ];
  const step = 0;
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionsLength={questions.length}
        // answers={answers} // step번째 답변만 받아오도록
        answer={answers[step]}
        // setAnswers={setAnswers} 전체를 통으로 바꾸는 것이 아닌 answer가 아닌 사용자가 답변을 입력을 한 값만 변경되도록
        setAnswer={(newAnswer) => {
          setAnswers((answer) => {
            const newAnswers = [...answer];
            newAnswers[step] = newAnswer;
            return newAnswer;
          });
        }}
      />
    </div>
  );
}
