<script lang="ts" setup>
import { useRoute, withBase } from 'vitepress';
import { getEntry } from "../scripts/get-entry";
import { getTags, getThumbnailOrDefault, getTitle } from "../scripts/get-from-entry";
import { computed } from "vue";

const route = useRoute();
const entry = computed(() => getEntry(route.path));
</script>

<template>
  <div :style="{ backgroundImage: `url(${getThumbnailOrDefault(entry)})` }"
       :class="$style.pageHeader">
    <span class="h1Like">{{ getTitle(entry) }}</span>
  </div>
  <div :class="$style.tags">
    <a :class="$style.tag" v-for="tag in getTags(entry)" :href="`/entries?tag=${tag}`">{{ tag }}</a>
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
  margin-bottom: 20px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.pageHeader > span {
  text-shadow: 0 0 5px var(--vp-c-black), 0 0 10px var(--vp-c-black);
  color: var(--vp-c-white);
  text-align: center;
}

.tags {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 50px;
}

.tags > .tag {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--vp-c-gray-soft);
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color 0.25s;
}

.tags > .tag:hover {
  border-color: var(--vp-c-brand-1);
}
</style>
