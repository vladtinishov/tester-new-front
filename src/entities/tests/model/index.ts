import { defineStore } from "pinia";
import { getQuestions, getQuestion } from "~/shared/api";

export const useTestStore = defineStore({
  id: 'test',

  state: () => ({
    errors: 0,
    rights: 0,
    isRightsSet: false,
    isErrorsSet: false,
    filteredTests: [
      {
        question: 'Web сервис (www)– это:',
        answers: [
          { answer: 'технология доступа к информационному ресурсу посредством Web сайта', right: true },
          { answer: ' URL графического файла, который будет использован в качестве фонового изображения', right: false },
          { answer: 'цвет просмотренных текстовых гиперссылок', right: false },
          { answer: ' это каждый элемент списка, который состоит из двух частей: термина и его определения', right: false },
          { answer: ' слово, группу слов или картинку, при подведении мыши к которым ее курсор принимает форму человеческой руки', right: false },
        ]
      },
      {
        question: '4 + 2 = ?',
        answers: [
          { answer: '6', right: true },
          { answer: '2', right: false },
          { answer: '3', right: false },
          { answer: '1', right: false },
        ]
      },
      {
        question: '3 + 4 = ?',
        answers: [
          { answer: '7', right: true },
          { answer: '2', right: false },
          { answer: '3', right: false },
          { answer: '1', right: false },
        ]
      },
    ],
    tests: [
      {
        id: 0,
        name: 'История Казахстана',
        questionCount: 504,
      },
      {
        id: 1,
        name: 'Информационные технологии',
        questionCount: 298,
      },
      {
        id: 2,
        name: 'Философия',
        questionCount: 301,
      },
    ],
    test: {
      id: 0,
      name: 'Арифметика',
      questions: [
        {
          question: 'Web сервис (www)– это:',
          answers: [
            { answer: 'технология доступа к информационному ресурсу посредством Web сайта', right: true },
            { answer: ' URL графического файла, который будет использован в качестве фонового изображения', right: false },
            { answer: 'цвет просмотренных текстовых гиперссылок', right: false },
            { answer: ' это каждый элемент списка, который состоит из двух частей: термина и его определения', right: false },
            { answer: ' слово, группу слов или картинку, при подведении мыши к которым ее курсор принимает форму человеческой руки', right: false },
          ]
        },
        {
          question: '4 + 2 = ?',
          answers: [
            { answer: '6', right: true },
            { answer: '2', right: false },
            { answer: '3', right: false },
            { answer: '1', right: false },
          ]
        },
        {
          question: '3 + 4 = ?',
          answers: [
            { answer: '7', right: true },
            { answer: '2', right: false },
            { answer: '3', right: false },
            { answer: '1', right: false },
          ]
        },
      ]
    },
  }),
  actions: {
    async getQuestions() {
      this.tests = await getQuestions();
    },
    async getQuestion(name: string) {
      this.test = await getQuestion(name);
      this.setFilteredTests(this.test.questions.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value))
    },
    setError() {
      if (!this.isErrorsSet) {
        this.errors += 1;
        this.isErrorsSet = true;
      }
    },
    setRights() {
      if (!this.isRightsSet) {
        this.rights += 1;
        this.isRightsSet = true;
      }
    },
    initQuestion() {
      this.isRightsSet = false;
      this.isErrorsSet = false;
    },
    setFilteredTests(tests) {
      this.filteredTests = tests;
    }
  }
})