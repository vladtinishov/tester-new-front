<script lang="ts" setup>
import {
  ArrowLeft,
  ArrowRight,
  CircleCloseFilled,
  CircleCheckFilled,
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue-demi'
import { useTestStore } from '~/entities/tests/model'
import { AnswerRadio, FilterToolbar } from '~/features'

export interface ITestForm {
  id: number;
  question: string,
  answers: Array<{ answer: string, right: boolean }>
}

const radio1 = ref('')
const currentQuestionIndex = ref(0);
const spans = ref(12)

const store = useTestStore();

const { test, rights, errors, filteredTests } = storeToRefs(store);


// computed
const questions = computed(() => filteredTests.value);
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const currentQuestionAnswers = computed(() => questions.value[currentQuestionIndex.value].answers)

// methods
const toNextQuestion = () => {
  if (questions.value.length > currentQuestionIndex.value + 1) {
    currentQuestionIndex.value += 1;
    store.initQuestion();
  }
}
const toPrevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value -= 1;
    store.initQuestion();
  }
}

const onResize = () => {
  if (window.innerWidth < 920 ) spans.value = 22;
  else spans.value = 12;
}
window.addEventListener("resize", onResize);

onMounted(() => onResize())
</script>

<template>
  <el-row justify="center">
    <el-col :span="spans">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span class="test-name">{{ test.name }}</span>
            <div class="nav-buttons">
              <el-button :icon="ArrowLeft" circle @click="toPrevQuestion" />
              <span class="answered-count">{{ currentQuestionIndex + 1 }} / {{ questions.length }}</span>
              <el-button :icon="ArrowRight" circle @click="toNextQuestion" />
            </div>
          </div>
        </template>
        <div class="card-body">
          <div class="question">
            <span class="question-number">{{ currentQuestionIndex + 1 }}.</span>
            <span class="question-text">{{ currentQuestion.question }}</span>
          </div>
          <div class="answers">
            <AnswerRadio 
              v-for="answer in currentQuestionAnswers"
              :key="answer"

              :text="answer.answer"
              :isRight="answer.right"
            />
          </div>
        </div>
        <div class="filter-toobar">
          <el-divider />
          <FilterToolbar />
        </div>
        <div class="progress">
          <el-divider />
          <div class="errors-end-rights">
            <div class="errors-count">
              <el-icon color="#d64e4e" size="23px"><CircleCloseFilled /></el-icon>
              <span class="errors-count-number">{{ errors }}</span>
            </div>
            <div class="errors-count">
              <el-icon color="#4ed650" size="23px"><CircleCheckFilled /></el-icon>
              <span class="errors-count-number">{{ rights }}</span>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.question {
  text-align: left;
}
.question-number {
  font-size: 19px;
}
.question-text {
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  text-align: left;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.answers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  margin-top: 15px;
}

.answers * {
  margin-right: 0 !important;
  margin: 5px 0;
}

.progress {
  width: 100%;
  margin-top: 50px;
}

.errors-count {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
}

.errors-count-number {
  font-weight: bold;
  margin-left: 7px;
}

.errors-end-rights {
  display: flex;
}

.answered-count {
  margin: 0 10px;
  font-weight: bold;
}

.test-name {
  text-align: left;
}
</style>