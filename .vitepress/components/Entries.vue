<script lang="ts" setup>
import { data } from '../scripts/entries.data.js'
import { getDescription, getTitle } from '../scripts/get-from-entry';
import { withBase } from 'vitepress';
import { ref } from "vue";
import { VPButton } from 'vitepress/theme';

const size = 20;
const entries = [...data].reverse();
const entriesToShow = ref(entries.slice(0, size));
</script>

<template>
  <div :class="$style.entries">
    <a v-for="entry in entriesToShow" :key="entry.url" :href="withBase(entry.url)" :class="$style.entry">
      <img v-if="entry.frontmatter.thumbnail" :src="withBase(entry.frontmatter.thumbnail)" alt="thumbnail"/>
      <div :class="$style.bottom">
        <span :class="$style.title">{{ getTitle(entry) }}</span>
        <span v-if="getDescription(entry)" :class="$style.description">{{ getDescription(entry) }}</span>
      </div>
    </a>
    <VPButton v-if="entriesToShow.length < entries.length"
              text="もっと見る" theme="alt" @click="entriesToShow = entries.slice(0, entriesToShow.length + size)"/>
  </div>
</template>

<style module>
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

.entry > .bottom {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
}

.entry:hover {
  border-color: var(--vp-c-brand-2);
}

.entry > img {
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.entry > .bottom .title {
  color: var(--vp-c-text-1);
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entry > .bottom .description {
  color: var(--vp-c-text-2);
}
</style>
