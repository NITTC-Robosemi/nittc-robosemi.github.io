<script lang="ts" setup>
import { useRoute, withBase } from 'vitepress';
import { getEntry } from "../scripts/get-entry";
import { getTitle } from "../scripts/get-from-entry";
import { computed } from "vue";

const route = useRoute();
const entry = computed(() => getEntry(route.path));
</script>

<template>
  <div :style="{ backgroundImage: `url(${withBase(entry.frontmatter.thumbnail ?? '/assets/CPAL5629.PNG')})` }"
       :class="$style.pageHeader">
    <h1>{{ getTitle(entry) }}</h1>
  </div>
</template>

<style module>
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
