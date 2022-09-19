<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
export interface TestCard {
  test: {
    name: string;
    questionCount: number;
  }
}


const props = defineProps<TestCard>()

</script>

<template>
  <el-card
    class="box-card"
    shadow="hover"
    body-style="text-align: left"
  >
  <template #header>
    <div class="card-header">
      <span class="test-name">{{ props.test.name }}</span>
      <router-link :to="{ name: 'test', params: { name: props.test.name } }"><el-button round>Перейти</el-button></router-link>
    </div>
  </template>
    <div class="card-body">
      <div class="question-count">
        questions: {{ props.test.questionCount }}
      </div>
      <div class="actions">
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 500px;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.test-name {
  font-weight: bold;
}
</style>