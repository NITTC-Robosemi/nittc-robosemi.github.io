<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { data } from "../scripts/entries.data.js";
import { getDisplayOnCarousel, getThumbnailOrDefault, getTitle } from "../scripts/get-from-entry";
import { withBase } from "vitepress";
const entries = [...data].reverse().filter((entry) => getDisplayOnCarousel(entry)).slice(0, 5);
</script>

<template>
  <Carousel :autoplay="5000" :wrap-around="true" :mouse-drag="false" :class="$style.root" v-if="entries.length > 0">
    <Slide v-for="entry in entries" :key="entry.url">
      <a :href="withBase(entry.url)" :class="$style.link">
        <div :style="{ backgroundImage: `url(${getThumbnailOrDefault(entry)})` }"
             :class="$style.slide">
          <span class="h1Like">{{ getTitle(entry) }}</span>
        </div>
      </a>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style module>
.root {
  margin: 100px 0;
}

.link {
  text-decoration: none !important;
  display: block;
  width: 100%;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 40px;
  gap: 10px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.slide > span {
  text-shadow: 0 0 5px var(--vp-c-black), 0 0 10px var(--vp-c-black);
  color: var(--vp-c-white);
}
</style>

<style>
.carousel__slide {
  padding: 2px;
}

.carousel__icon {
  color: white;
  filter: drop-shadow(0 0 3px var(--vp-c-black));
}
</style>
