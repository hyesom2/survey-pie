import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

export default function SurveyPage() {
  const params = useParams();

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
  const step = parseInt(params.step);
  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionsLength={questions.length}
        answer={answers[step]}
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
