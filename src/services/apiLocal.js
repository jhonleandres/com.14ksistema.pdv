import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://localhost:4000',
});

export default apiLocal;