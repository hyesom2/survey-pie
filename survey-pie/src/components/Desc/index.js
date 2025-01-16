import styled from 'styled-components';

export default function Desc({ children }) {
  return <QuestionDesc>{children}</QuestionDesc>;
}

const QuestionDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #463c3c;
  padding-left: 38px;
  margin-bottom: 60px;
`;
