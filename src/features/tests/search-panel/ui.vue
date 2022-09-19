<script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  </script>

<template>
  <el-input
      v-model="input1"
      class="input"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
</template>

<style scoped>
.input {
  width: 400px;
}
</style>