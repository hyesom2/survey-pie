import styled from 'styled-components';

export default function Title({ children }) {
  return (
    <QuestionTitle>
      <span>Q.</span>
      {children}
    </QuestionTitle>
  );
}

const QuestionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #121111;
  margin-bottom: 16px;

  span {
    color: #000;
    margin-right: 12px;
  }
`;
