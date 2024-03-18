<script lang="ts" setup>
// ????????
// @ts-expect-error
import { data } from '../scripts/entries.data'
import { getTitle } from '../scripts/get-from-entry';
import { withBase } from 'vitepress';
const entries = [...data].reverse();
</script>

<template>
  <div class="entries">
    <a v-for="entry in entries" :href="withBase(entry.url)" :key="entry.url" class="entry">
      <img v-if="entry.frontmatter.thumbnail" :src="withBase(entry.frontmatter.thumbnail)" alt="thumbnail" />
      <div class="bottom">
        <span>{{ getTitle(entry) }}</span>
      </div>
    </a>
  </div>
</template>

<style>
.entries {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.entry {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  text-decoration: none !important;
  background-color: var(--vp-c-gray-soft);
  border: 2px solid var(--vp-c-gray-1);
  padding: 20px;
  transition: border-color 0.3s !important;
}

.entry>.bottom {
  display: flex;
  justify-content: space-between;
}

.entry:hover {
  border-color: var(--vp-c-brand-2);
}

.entry>img {
  aspect-ratio: 16/5;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.entry>.bottom span {
  color: var(--vp-c-text-1);
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entry>.bottom time {
  color: var(--vp-c-text-2);
}
</style>
