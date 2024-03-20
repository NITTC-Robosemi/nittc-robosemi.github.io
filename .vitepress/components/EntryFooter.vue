<script lang="ts" setup>
import { computed } from "vue";
import { ContentData, useRoute, withBase } from 'vitepress';
// @ts-expect-error
import { data } from '../scripts/entries.data'
import { getTitle } from '../scripts/get-from-entry';

const entries: ContentData[] = [...data];
const route = useRoute();
const index = computed(() => entries.findIndex((entry) => withBase(entry.url) === route.path));
const prev = computed(() => entries[index.value - 1]);
const next = computed(() => entries[index.value + 1]);
</script>

<template>
  <div class="pageFooter">
    <a v-if="prev" :href="withBase(prev.url)" class="prev"> {{ getTitle(prev) }}</a>
    <a v-if="next" :href="withBase(next.url)" class="next">{{ getTitle(next) }} </a>
  </div>
</template>

<style>
.pageFooter {
  position: relative;
}

.pageFooter * {
  display: block;
  position: absolute;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 11px 16px 13px;
  transition: border-color .25s, color .25s, transform .25s;
  width: 45%;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.pageFooter *:hover {
  border-color: var(--vp-c-brand-1);
}

.pageFooter .prev {
  left: 0;
  text-align: left;
}

.pageFooter .prev:hover {
  transform: translate(-5px, 0);
}

.pageFooter .prev::before {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 12px;
  content: "Previous page";
}

.pageFooter .next {
  right: 0;
  text-align: right;
}

.pageFooter .next:hover {
  transform: translate(5px, 0);
}

.pageFooter .next::before {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 12px;
  content: "Next page";
}
</style>