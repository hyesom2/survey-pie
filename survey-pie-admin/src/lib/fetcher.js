// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// axios로 변경
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
