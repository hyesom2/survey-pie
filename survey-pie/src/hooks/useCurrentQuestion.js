// import axios from 'axios';
// import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
// import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  // 현재 질문을 가져오는 hooks

  const step = useStep();
  // const surveyId = useSurveyId();
  // const surveyData = useRecoilValue(surveyState);
  const [surveyData, setSurveyData] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((response) => {
  //     setSurveyData(response.data);
  //   });
  // }, [setSurveyData, surveyId]);

  return questions[step];
}

export default useCurrentQuestion;
