import styled from 'styled-components';

export default function TextAreaInput({ answer = '', setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

const TextArea = styled.textarea`
  width: 100%;
  height: 187px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 16px 18px;
  font-size: 18px;
  line-height: 21px;
  resize: none;
`;
