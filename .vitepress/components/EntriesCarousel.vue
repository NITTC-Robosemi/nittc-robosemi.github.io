<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { data } from "../scripts/entries.data.js";
import { getTitle } from "../scripts/get-from-entry";
import { withBase } from "vitepress";
const entries = [...data].filter((entry) => entry.frontmatter.displayOnCarousel ?? true).slice(0, 5);
</script>

<template>
  <Carousel :autoplay="5000" :wrap-around="true" :class="$style.root" v-if="entries.length > 0">
    <Slide v-for="entry in entries" :key="entry.url">
      <div :style="{ backgroundImage: `url(${withBase(entry.frontmatter.thumbnail ?? '/assets/CPAL5629.PNG')})` }"
           :class="$style.slide">
        <span>{{ getTitle(entry) }}</span>
      </div>
    </Slide>
  </Carousel>
</template>

<style module>
.root {
  margin: 100px 0;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.slide > span {
  font-weight: bold;
  font-size: 2em;
  filter: drop-shadow(0 0 10px var(--vp-c-black));
  color: var(--vp-c-white);
  margin-left: 50px;
}
</style>


