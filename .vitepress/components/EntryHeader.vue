<script lang="ts" setup>
import { useData, withBase } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
  <div :style="{ backgroundImage: `url(${withBase(frontmatter.thumbnail ?? '/assets/CPAL5629.PNG')})` }"
       class="pageHeader">
    <h1>{{ frontmatter.title }}</h1>
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
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.pageHeader > * {
  filter: drop-shadow(0 0 10px var(--vp-c-black));
  color: var(--vp-c-white);
}

.pageHeader > h1 {
  font-weight: bold;
  font-size: 2em;
}
</style>
