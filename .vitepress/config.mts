import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "東京高専ロボコンゼミ",
  description: "東京高専ロボコンゼミの公式ウェブサイトです。",
  lang: "ja",
  head: [
    ['link', { rel: 'icon', href: '/assets/TJUJ9115.webp' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
    }],
    ['meta', { property: "og:image", content: "https://nittc-robosemi.github.io/assets/TJUJ9115.webp" }],
    ['meta', { property: "og:title", content: "東京高専ロボコンゼミ" }],
    ['meta', { property: "og:description", content: "東京高専ロボコンゼミの公式ウェブサイトです。" }],
  ],
  async transformHead(context) {
    return [
      ['meta', { property: "og:title", content: context.pageData.title }],
      ['meta', { property: "og:description", content: context.pageData.description }],
    ];
  },
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    config: (md) => {
      md.set({ breaks: true });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/TJUJ9115.webp',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/entries' },
      { text: 'Robots', link: '/robots' },
    ],
    socialLinks: [
      { icon: 'x', link: 'https://x.com/nittc_robo' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nittc_robo' },
    ],
    footer: {
      copyright: "© 2024- 東京高専ロボコンゼミ",
    },
  },
  srcExclude: [
    "how-to-add-entry.md",
  ],
  sitemap: {
    hostname: "https://nittc-robosemi.github.io",
  },
})
