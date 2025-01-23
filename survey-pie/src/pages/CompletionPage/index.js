import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button/Button';
import useSurveyId from '../../hooks/useSurveyId';

export default function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <CongratsImg src={congrats} alt="" />
      <Title>설문이 완료되었습니다.</Title>
      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt="" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const ReloadButton = styled(Button)`
  position: absolute;
  bottom: 48px;
  width: 240px;
  height: 56px;
  white-space: nowrap;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const CongratsImg = styled.img`
  display: block;
  width: 209px;
  height: 204px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const CompletionPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 60px 0 48px 0;

  .congrats {
    display: block;
    width: 209px;
    height: 204px;
    margin-bottom: 16px;
  }
`;
