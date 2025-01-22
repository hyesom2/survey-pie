import styled from 'styled-components';

export default function TextInput({ answer = '', setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

const Input = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 12px 18px;
  font-size: 18px;
  line-height: 21px;
`;
