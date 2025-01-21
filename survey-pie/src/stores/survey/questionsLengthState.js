import { selector } from 'recoil';

import questionsState from './surveyState';

const questionsLength = selector({
  key: 'questionsLength',
  get: ({ get }) => {
    const questions = get(questionsState).questions;

    return questions.length;
  },
});

export default questionsLength;
