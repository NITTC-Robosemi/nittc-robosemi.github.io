import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "東京高専ロボコンゼミ",
  description: "東京高専ロボコンゼミの公式ウェブサイトです。",
  lang: "ja",
  base: "/website/",
  head: [
    ['link', { rel: 'icon', href: '/imgs/TJUJ9115.PNG' }]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/TJUJ9115.PNG',
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
