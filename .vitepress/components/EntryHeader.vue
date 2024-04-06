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
    <span>{{ getTitle(entry) }}</span>
  </div>
</template>

<style module>
.pageHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 10px;
  margin-bottom: 50px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.pageHeader > span {
  text-shadow: 0 0 5px var(--vp-c-black), 0 0 10px var(--vp-c-black);
  color: var(--vp-c-white);
  font-weight: bold;
  font-size: 2em;
  line-height: 1.3em;
}
</style>
