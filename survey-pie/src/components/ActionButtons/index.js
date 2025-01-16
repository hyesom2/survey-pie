import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../Button/Button';

export default function ActionButtons({ step, questionsLength }) {
  const isLastStep = questionsLength - 1 === step;
  const navigate = useNavigate();

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
