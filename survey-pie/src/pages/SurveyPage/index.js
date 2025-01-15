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
      options: {
        placeholder: '10자 이내로 단답해주세요.',
      },
      required: false,
    },
    {
      title: '질문2',
      desc: '설명2',
      type: 'textarea',
      options: {
        placeholder: '400자 이내로 답해주세요.',
      },
      required: false,
    },
    {
      title: '질문3',
      desc: '설명3',
      type: 'select',
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
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
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}
