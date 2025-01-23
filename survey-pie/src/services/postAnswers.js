import mainAPI from './APIs/mainAPI';

function postAnswers(surveyId, data) {
  // axios.post('주소', data); 1. axios.post
  // axios.post('주소', { surveyId: 1, data: [] }); // 2. surveyId와 data를 받는데 postAnswers 인자로 받아준다.
  // axios.post('https://localhost3001/answers', { surveyId, data });
  // 주소 자리에 localhost주소를 쓸 때 마다 API를 여러번 쓸 때 마다 매번 넣어주지가 너무 번거롭다. → 1. 변수로 import해서 따로 뺀다. 2. axios에서 제공해주는 default방식
  return mainAPI.post('/answers', { surveyId, data });
  // promise 객체를 return한다.
}

export default postAnswers;
