// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import EntryHeader from '../components/EntryHeader.vue'
import EntryFooter from '../components/EntryFooter.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-before': () => {
        const page = useData();
        if (page.page.value.relativePath.startsWith('entries/')) {
          return h(EntryHeader);
        }
      },
      'doc-after': () => {
        const page = useData();
        if (page.page.value.relativePath.startsWith('entries/')) {
          return h(EntryFooter);
        }
      },
    })
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme
