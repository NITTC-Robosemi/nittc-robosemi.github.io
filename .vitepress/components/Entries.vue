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
  border-radius: 10px;
  text-decoration: none !important;
  background-color: var(--vp-c-gray-soft);
  border: 1px solid transparent;
  transition: border-color 0.25s !important;
  overflow: hidden;
}

.entry > .bottom {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 15px;
  gap: 5px;
}

.entry:hover {
  border-color: var(--vp-c-brand-1);
}

.entry > img {
  max-height: 150px;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.entry > .bottom .title {
  color: var(--vp-c-text-1);
  font-size: 1.2em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entry > .bottom .description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--vp-c-text-2);
}
</style>
