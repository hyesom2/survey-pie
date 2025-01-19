import axios from 'axios';
import styled from 'styled-components';

import Button from '../../components/Button/Button';

export default function CompletionPage() {
  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res);
  });
  return (
    <CompletionPageWrapper>
      <h1>설문이 완료되었습니다.</h1>
      <Button type="TERTIARY">새로운 응답 제출하기</Button>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div``;
