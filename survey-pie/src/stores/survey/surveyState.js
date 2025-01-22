// import axios from 'axios';
import { selector } from 'recoil';

// import mainAPI from '../../services/APIs/mainAPI'; // axios 대신 사용
import getSurvey from '../../services/getSurvey';

// axios.defaults.baseURL = 'http://localhost:3001';m
const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    // const response = await mainAPI.get(
    //   `/surveys/${window.location.pathname.split('/')[2]}`,
    // );
    const response = await getSurvey(window.location.pathname.split('/')[2]);

    return response.data;
  },
});

export default surveyState;
