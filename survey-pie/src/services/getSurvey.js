import mainAPI from './APIs/mainAPI';

function getSurvey(surveyId) {
  return mainAPI.get(`/surveys/${surveyId}`);
}

export default getSurvey;
