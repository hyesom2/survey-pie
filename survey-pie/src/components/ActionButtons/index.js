export default function ActionButtons({ step, questionsLength }) {
  const isLastStep = questionsLength - 1 === step;
  return (
    <div>
      {step === 0 || <button type="button">이전</button>}
      {isLastStep ? (
        <button type="button">제출</button>
      ) : (
        <button type="button">다음</button>
      )}
    </div>
  );
}
