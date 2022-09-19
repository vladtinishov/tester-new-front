<script lang="ts" setup>
import { RouterView } from "vue-router";

</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <!-- <BaseSide /> -->
      <div style="width: 100%">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
