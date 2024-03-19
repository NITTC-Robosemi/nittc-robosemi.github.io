<script lang="ts" setup>
// ????????
// @ts-expect-error
import { data } from '../scripts/entries.data'
import {getDescription, getTitle} from '../scripts/get-from-entry';
import {ContentData, withBase} from 'vitepress';
const entries: ContentData[] = [...data].reverse();
</script>

<template>
  <div class="entries">
    <a v-for="entry in entries" :href="withBase(entry.url)" :key="entry.url" class="entry">
      <img v-if="entry.frontmatter.thumbnail" :src="withBase(entry.frontmatter.thumbnail)" alt="thumbnail" />
      <div class="bottom">
        <span class="title">{{ getTitle(entry) }}</span>
        <span v-if="getDescription(entry)" class="description">{{ getDescription(entry) }}</span>
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
  flex-direction: column;
  gap: 10px;
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

.entry>.bottom .title {
  color: var(--vp-c-text-1);
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entry>.bottom .description {
  color: var(--vp-c-text-2);
}
</style>
