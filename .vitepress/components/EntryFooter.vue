<script lang="ts" setup>
import { computed, ComputedRef } from 'vue';
import { ContentData, useRoute } from 'vitepress';
// @ts-expect-error
import { data } from '../scripts/entries.data'
import { getTitle } from '../scripts/get-from-entry';
const entries: ComputedRef<ContentData[]> = computed(() => [...data]);
const { path } = useRoute();
const index = computed(() => entries.value.findIndex((entry: ContentData) => entry.url === path));
const prev = computed(() => entries.value[index.value - 1]);
const next = computed(() => entries.value[index.value + 1]);
</script>

<template>
  <div class="pageFooter">
    <a :href="prev.url" v-if="prev" class="prev">< {{ getTitle(prev) }}</a>
    <a :href="next.url" v-if="next" class="next">{{ getTitle(next) }} ></a>
  </div>
</template>

<style>
.pageFooter {
  position: relative;
  gap: 50px;
  margin-top: 50px;
}
.pageFooter .prev {
  position: absolute;
  left: 0;
}
.pageFooter .next {
  position: absolute;
  right: 0;
}
</style>