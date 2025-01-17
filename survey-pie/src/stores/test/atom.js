import { atom } from 'recoil';

const testState = atom({
  key: 'testState',
  default: [1, 2, 3, 4],
});

export default testState;
