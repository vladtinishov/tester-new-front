<script lang="ts" setup>
import { Menu, Fold } from '@element-plus/icons-vue'
</script>

<template>
  <div class="buttons-container">
    <el-icon class="button" size="25px"><Menu /></el-icon>
    <el-icon class="button" size="25px"><Fold /></el-icon>
  </div>
</template>

<style scoped>
.buttons-container {
  margin: 0 10px;
}

.button {
  margin: 0 5px;
  cursor: pointer;
}
</style>