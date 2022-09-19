<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { TestCard } from '~/entities';
import { CreateButton, SearchPanel, ChangeListStyle } from '~/features';
import { useTestStore } from '~/entities/tests/model';
import { onMounted, ref } from 'vue';

const store = useTestStore();

const { tests } = storeToRefs(store);
const spans = ref(14);

const onResize = () => {
  if (window.innerWidth < 920 ) spans.value = 22;
  else spans.value = 14;
}
window.addEventListener("resize", onResize);
onMounted(() => onResize())
</script>

<template>
  <el-row justify="center">
    <!-- <el-col :span="14" class="toolbar" >
      <CreateButton />
      <SearchPanel style="margin-left: 10px" />
      <ChangeListStyle />
    </el-col> -->
    <el-col :span="spans" style="margin-top: 10px">
      <div class="test-list">
        <TestCard
          v-for="test in tests"
          class="item"
          :mode="'large'"
          :test="test"
          :key="test"
        />
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.test-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.item {
  margin: 10px;
}

.toolbar {
  margin: 20px 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>