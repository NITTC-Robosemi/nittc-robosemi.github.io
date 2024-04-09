// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { type Theme, useRoute } from 'vitepress'
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
        const route = useRoute();
        if (route.path.startsWith('/entries/')) {
          return h(EntryHeader);
        }
      },
      'doc-after': () => {
        const route = useRoute();
        if (route.path.startsWith('/entries/')) {
          return h(EntryFooter);
        }
      },
    })
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme
