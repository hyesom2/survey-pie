import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import questionsState from '../../stores/questions/atom';
import Button from '../Button/Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  const params = useParams();
  const step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;
  const isLastStep = questionsLength - 1 === step;

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
            navigate('/done');
          }}
        >
          제출
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
