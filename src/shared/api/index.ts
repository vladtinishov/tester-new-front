import axios from 'axios'

const api = axios.create({
  baseURL: 'https://kfcqsite.000webhostapp.com/tester_new_back/back',
});

export const getQuestions = () => {
  return api.get('/tests/questions').then(d => d.data);
}

export const getQuestion = (name: string) => {
  return api.get(`/tests/question/${name}`).then(d => d.data);
}