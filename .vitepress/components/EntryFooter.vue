<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, withBase } from 'vitepress';
import { data } from '../scripts/entries.data.js'
import { getTitle } from '../scripts/get-from-entry';
import { getEntryIndex } from "../scripts/get-entry";

const entries = [...data];
const route = useRoute();
const index = computed(() => getEntryIndex(route.path));
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
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

@media screen and (max-width: 640px){
  .pageFooter {
    flex-direction: column;
  }
}

.pageFooter * {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 11px 16px 13px;
  transition: border-color .25s, color .25s, transform .25s;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  width: 100%;
}

.pageFooter *:hover {
  border-color: var(--vp-c-brand-1);
}

.pageFooter .prev {
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