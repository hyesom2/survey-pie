import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import testState from '../../stores/test/atom';
import testWithComma from '../../stores/test/testWithComma';

export default function CompletionPage() {
  const test = useRecoilValue(testState);
  const testComma = useRecoilValue(testWithComma);

  return (
    <CompletionPageWrapper>
      <div>atom에서 꺼낸 값 : {test}</div>
      <div>selector에서 가공 후 꺼낸 값 : {testComma}</div>
      <h1>설문이 완료되었습니다.</h1>
      <Button type="TERTIARY">새로운 응답 제출하기</Button>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div``;
