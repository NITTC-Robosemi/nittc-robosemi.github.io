<script lang="ts" setup>
import { useData } from 'vitepress';
import { getPublishedAt } from '../scripts/get-from-entry';

const { frontmatter } = useData();
</script>

<template>
  <div class="pageHeader" :style="{ backgroundImage: `url(${frontmatter.thumbnail ?? '/assets/CPAL5629.PNG'})` }">
    <h1>{{ frontmatter.title }}</h1>
    <time>{{ getPublishedAt(frontmatter) }}</time>
  </div>
</template>

<style>
.pageHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  aspect-ratio: 16/5;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.pageHeader>* {
  filter: drop-shadow(0 0 10px var(--vp-c-black));
  color: var(--vp-c-white);
}
.pageHeader>h1 {
  font-weight: bold;
  font-size: 2em;
}
</style>
