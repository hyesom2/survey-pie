import { useRecoilValue } from 'recoil';

import questionsState from '../stores/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  // 현재 질문을 가져오는 hooks

  const step = useStep();
  const questions = useRecoilValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
