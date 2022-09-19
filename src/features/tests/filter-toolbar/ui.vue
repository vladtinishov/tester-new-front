<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue-demi";
import { useTestStore } from "~/entities/tests/model";

const store = useTestStore();
const { test } = storeToRefs(store);

const start = ref(1);
const end = ref(1);

// computed
const questions = computed(() => test.value.questions);
const questionCount = computed(() => test.value.questions.length);

// methods
const setFilteredQuestions = () => {
  const filteredQuestions = questions.value.slice(start.value - 1, end.value);
  store.setFilteredTests(filteredQuestions.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value))
}
</script>

<template>
  <div class="title-container">
    <span class="title">Фильтры</span>
  </div>
  <div class="buttons">
    <div class="field">
      <span>От</span>
      <el-input-number v-model="start" :min="1" :max="questionCount"  />
    </div>
    <div class="field">
      <span>До</span>
      <el-input-number v-model="end" :min="1" :max="questionCount"  />
    </div>
  </div>
  <div class="apply-button">
    <el-button @click="setFilteredQuestions">Применить</el-button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: flex-start;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
}
.field:first-child {
  margin: 0;
}
.field span {
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
  margin-left: 10px;
}

.apply-button {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
.title-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.title {
  font-weight: bold;
  text-align: left;
}
</style>