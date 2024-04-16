<script setup>
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";

const route = useRoute();
function initZoom() {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
}
onMounted(initZoom);
watch(
  () =>route.path,
  () => nextTick(initZoom)
);

const DefaultLayout = DefaultTheme.Layout
</script>

<template>
  <DefaultLayout>
    <!-- ここなんとかする -->
    <template #doc-before><slot name="doc-before" /></template>
    <template #doc-after><slot name="doc-after" /></template>
  </DefaultLayout>
</template>
