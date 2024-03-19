import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "東京高専ロボコンゼミ",
  description: "東京高専ロボコンゼミの公式ウェブサイトです。",
  lang: "ja",
  base: "/website/",
  head: [
    ['link', { rel: 'icon', href: '/website/assets/TJUJ9115.PNG' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' }],
    ['meta', { property: "og:image", content: "https://nittc-robosemi.github.io/website/assets/TJUJ9115.PNG" }],
  ],
  async transformHead(context) {
    return [
      ['meta', { property: "og:title", content: context.pageData.title }],
      ['meta', { property: "og:description", content: context.pageData.description }],
    ];
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/TJUJ9115.PNG',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/entries' },
      { text: 'Contact', link: 'https://docs.google.com/forms/d/e/1FAIpQLScytDGcUURyp-uLLH25fj-WHMRDKrZNKTvx9yoTLjcVEeAT_w/viewform' },
    ],
    socialLinks: [
      { icon: 'x', link: 'https://x.com/nittc_robo' },
      { icon: 'youtube', link: 'https://www.youtube.com/@nittc_robo' },
    ],
    footer: {
      copyright: "© 2024- 東京高専ロボコンゼミ",
    },
  }
})
