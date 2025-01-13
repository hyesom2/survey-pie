import TextInput from '../TextInput';

export default function Body({ type, answer, setAnswer }) {
  let InputComponent = null;

  if (type === 'select') {
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
  }

  return (
    <div>
      <InputComponent answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
