import styled from 'styled-components';

const a = 1;

export default function CompletionPage() {
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  background-color: ${a === 123 ? 'aqua' : 'pink'};
`;
