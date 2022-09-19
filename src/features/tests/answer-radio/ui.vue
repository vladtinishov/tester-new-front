<script lang="ts" setup>
import { computed, ref } from "vue-demi";
import { useTestStore } from "~/entities/tests/model";

export interface IAnswerRadio {
  text: string;
  isRight: boolean;
}

const props = withDefaults(defineProps<IAnswerRadio>(), {
  text: "",
  isRight: false,
});

const store = useTestStore();

const radioType = ref('');

// methods
const handleCheck = () => {
  if (!props.isRight) {
    radioType.value = 'danger';
    store.setError();
  } else {
    radioType.value = 'primary';
    store.setRights();
  }
}
</script>

<template>
  <el-button
    class="button"
    :label="props.text"
    size="large"
    :type="radioType"
    @click="handleCheck()"
    :plain="radioType != 'primary'"
  >
  {{ props.text }}
  </el-button>
</template>

<style scoped>
.button {
  white-space: normal;
  text-align: left;
  height: auto;
  line-height: 20px;
}
</style>