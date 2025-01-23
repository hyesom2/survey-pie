import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button/Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  const step = useStep();
  const surveyId = useSurveyId();
  const questionsLength = useRecoilValue(questionsLengthState);
  const answers = useAnswers();
  const isLastStep = questionsLength - 1 === step;
  const [success, setSuccess] = useState(false);

  return (
    <ButtonWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLastStep ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            // 제출을 눌렀을 때 postAnswers
            setSuccess(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((error) => {
                console.log(error.response);
                alert('오류가 발생했습니다.');
                setSuccess(false);
              });
          }}
          disabled={success}
        >
          {success ? '제출 중 입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`;
