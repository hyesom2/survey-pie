import { selector } from 'recoil';

import questionsState from './atom';

const questionsLength = selector({
  key: 'questionsLength',
  get: (get) => {
    const questions = get(questionsState);

    return questions.length;
  },
});

export default questionsLength;
