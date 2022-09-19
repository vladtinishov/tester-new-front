<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTestStore } from '~/entities/tests/model';
import { TestForm } from '~/features'

const store = useTestStore();
const router = useRoute();

onMounted(async () => await store.getQuestion(router.params.name as string))
</script>

<template>
  <TestForm class="test-form" />
</template>

<style scoped>
.test-form {
  margin-top: 20px;
}
</style>