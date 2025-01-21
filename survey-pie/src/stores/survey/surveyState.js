/*
import { atom } from 'recoil';

const surveyState = atom({
  key: 'surveyState',
  default: null,
  // {
  //   id: 1,
  //   title: '',
  //   questions: [
  //     {
  //       title: '첫번째 질문입니다. 답변해주세요.',
  //       desc: '이 항목은 객관식입니다.',
  //       type: 'select',
  //       options: {
  //         items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
  //       },
  //       required: false,
  //     },
  //     {
  //       title: '두번째 질문입니다. 답변해주세요.',
  //       desc: '추가 설명입니다. 이 항목은 단답식입니다.',
  //       type: 'text',
  //       options: {
  //         placeholder: '10자 이내로 단답해주세요.',
  //       },
  //       required: false,
  //     },
  //     {
  //       title: '세번째 질문입니다. 답변해주세요.',
  //       desc: '추가 설명입니다. 이 항목은 서술형입니다.',
  //       type: 'textarea',
  //       options: {
  //         placeholder: '400자 이내로 답해주세요.',
  //       },
  //       required: false,
  //     },
  //   ],
  // },
});

export default surveyState;
*/

import axios from 'axios';
import { selector } from 'recoil';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    const response = await axios.get(
      `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
    );

    return response.data;
  },
});

export default surveyState;
