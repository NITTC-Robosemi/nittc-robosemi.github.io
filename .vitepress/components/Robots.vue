<script lang="ts" setup>
import { IconLink } from "@tabler/icons-vue";

type Robot = {
  name: string;
  image?: string;
  description: string;
  result?: string;
  links?: Record<string, string>;
  createdAt: number;
};
const robots: Robot[] = [
  {
    name: "BigM型Wing",
    description: "2001NHKロボコン Aチーム",
    result:"地区大会ベスト4・技術賞/全国大会出場",
    createdAt: 2001,
  },
  {
    name: "ネットウ高志炎",
    description: "2001NHKロボコン Bチーム",
    createdAt: 2001,
  },
  {
    name: "侍",
    description: "2002NHKロボコン Aチーム",
    result:"地区大会特別賞受賞",
    createdAt: 2002,
  },
  {
    name: "デルタワー",
    description: "2002NHKロボコン Bチーム",
    createdAt: 2002,
  },
  {
    name: "Libra",
    description: "2003NHKロボコン Aチーム",
    result:"地区大会ベスト4/全国大会出場",
    createdAt: 2003,
  },
  {
    name: "ん",
    description: "2003NHKロボコン Bチーム",
    createdAt: 2003,
  },
  {
    name: "未確認走行物体",
    description: "2004NHKロボコン Aチーム",
    result:"地区大会ベスト4・技術賞/全国大会出場",
    createdAt: 2004,
  },
  {
    name: "運び屋",
    description: "2004NHKロボコン Bチーム",
    createdAt: 2004,
  },
  {
    name: "縦高無尽",
    description: "2005NHKロボコン Aチーム",
    result:"地区大会優勝/全国大会準優勝・ロボコン大賞",
    createdAt: 2005,
  },
  {
    name: "ロボッテ",
    description: "2005NHKロボコン Bチーム",
    createdAt: 2005,
  },
  {
    name: "雷門兄弟",
    description: "2006NHKロボコン Aチーム",
    result:"地区大会特別賞受賞/全国大会出場",
    createdAt: 2006,
  },
  {
    name: "我々高尾",
    description: "2006NHKロボコン Bチーム",
    createdAt: 2006,
  },
  {
    name: "旗掃天外",
    description: "2007NHKロボコン Aチーム",
    createdAt: 2007,
  },
  {
    name: "UP",
    description: "2007NHKロボコン Bチーム",
    createdAt: 2007,
  },
  {
    name: "我々高尾リターンズ",
    description: "2008NHKロボコン Aチーム",
    result:"地区大会ベスト4",
    createdAt: 2008,
  },
  {
    name: "猿走高飛",
    description: "2008NHKロボコン Bチーム",
    result:"地区大会アイデア賞/全国大会出場",
    createdAt: 2008,
  },
  {
    name: "宙犬八公",
    description: "2009NHKロボコン Aチーム",
    createdAt: 2009,
  },
  {
    name: "Stand by Milk",
    description: "2009NHKロボコン Bチーム",
    result:"地区大会ベスト4/ベストカップル賞",
    createdAt: 2009,
  },
  {
    name: "走快妖怪",
    description: "2010NHKロボコン Aチーム",
    result:"地区大会特別賞受賞",
    createdAt: 2010,
  },
  {
    name: "狭間怪力",
    description: "2010NHKロボコン Bチーム",
    result:"地区大会デザイン賞/全国大会出場",
    createdAt: 2010,
  },
  {
    name: "175リッター",
    description: "2011NHKロボコン Aチーム",
    result:"地区大会セーフティーデザイン賞",
    createdAt: 2011,
  },
  {
    name: "鉄塔兄弟",
    description: "2011NHKロボコン Bチーム",
    result:"地区大会デザイン賞/全国大会出場",
    createdAt: 2011,
  },
  {
    name: "NONA",
    description: "2012NHKロボコン Aチーム",
    createdAt: 2012,
  },
  {
    name: "意気羊々",
    description: "2012NHKロボコン Bチーム",
    result:"地区大会デザイン賞",
    createdAt: 2012,
  },
  {
    name: "Cirque du 高尾",
    description: "2013NHKロボコン Aチーム",
    createdAt: 2013,
  },
  {
    name: "点灯夢志",
    description: "2013NHKロボコン Bチーム",
    createdAt: 2013,
  },
  {
    name: "とろろニクス",
    description: "2014NHKロボコン Aチーム",
    result:"地区大会ベスト4",
    createdAt: 2014,
  },
  {
    name: "そばな・そばを",
    description: "2014NHKロボコン Bチーム",
    result:"地区大会準優勝/全国大会出場",
    createdAt: 2014,
  },
  {
    name: "沼のかばさん",
    description: "2015NHKロボコン Aチーム",
    createdAt: 2015,
  },
  {
    name: "゜ゑ",
    description: "2015NHKロボコン Bチーム",
    result:"地区大会特別賞受賞",
    createdAt: 2015,
  },
  {
    name: "Tmitter",
    description: "2016NHKロボコン Aチーム",
    createdAt: 2016,
  },
  {
    name: "Δt",
    description: "2016NHKロボコン Bチーム",
    createdAt: 2016,
  },
  {
    name: "狭間",
    description: "2017NHKロボコン Aチーム",
    result: "地区大会特別賞受賞",
    createdAt: 2017,
  },
  {
    name: "Bee'z",
    description: "2017NHKロボコン Bチーム",
    createdAt: 2017,
  },
  {
    name: "Strelitzia",
    image: "/assets/robots/2018-a-strelitzia.webp",
    description: "2018NHKロボコン Aチーム",
    result: "地区大会ベスト5",
    createdAt: 2018,
    links: {
      旧サイトで見る:
        "https://sites.google.com/view/nittc-robocon/nhk-records/2018",
    },
  },
  {
    name: "CLΘCKWISE",
    image: "/assets/robots/2018-b-clockwise.webp",
    description: "2018NHKロボコン Bチーム",
    result:
      "地区大会優勝/全国大会出場/エキシビションにて非公式全国大会最速Vゴール",
    createdAt: 2018,
    links: {
      PV: "https://www.youtube.com/watch?v=17SvYzGcg18",
      旧サイトで見る:
        "https://sites.google.com/view/nittc-robocon/nhk-records/2018",
    },
  },
  {
    name: "洗紫万紅",
    // image: "/assets/robots/2019-a-senshibanko.webp",
    description: "2019NHKロボコン Aチーム",
    createdAt: 2019,
    links: {
      旧サイトで見る:
        "https://sites.google.com/view/nittc-robocon/nhk-records/2019",
    },
  },
  {
    name: "黎明",
    // image: "/assets/robots/2019-b-reimei.webp",
    description: "2019NHKロボコン Bチーム",
    createdAt: 2019,
    links: {
      旧サイトで見る:
        "https://sites.google.com/view/nittc-robocon/nhk-records/2019",
    },
  },
  {
    name: "NIT東響楽団演奏会",
    image: "/assets/robots/2020-a-nitharmonics.webp",
    description: "2020NHKロボコン Aチーム",
    result: "特別賞受賞",
    createdAt: 2020,
    links: {
      PV: "https://www.youtube.com/watch?v=PNQ_LcuqU60",
      旧サイトで見る:
        "https://sites.google.com/view/nittc-robocon/nhk-records/2020",
    },
  },
  {
    name: "TRICKSTER",
    image: "/assets/robots/2021-a-trickster.webp",
    description: "2021NHKロボコン Aチーム",
    result: "地区大会優勝/全国大会9位",
    createdAt: 2021,
    links: {
      PV: "https://www.youtube.com/watch?v=o-QHMa3JWDI",
    },
  },
  {
    name: "Mt.高尾",
    image: "/assets/robots/2021-b-mttakao.webp",
    description: "2021NHKロボコン Bチーム",
    result: "地区大会アイデア賞受賞",
    createdAt: 2021,
  },
  {
    name: "鶴翼",
    image: "/assets/robots/2022-a-kakuyoku.webp",
    description: "2022NHKロボコン Aチーム",
    result: "地区大会ベスト5",
    createdAt: 2022,
  },
  {
    name: "∞∞∞",
    image: "/assets/robots/2022-b-trinity.webp",
    description: "2022NHKロボコン Bチーム",
    result: "地区大会準優勝/全国大会出場",
    createdAt: 2022,
    links: {
      PV: "https://www.youtube.com/watch?v=rUCy4x1DraI",
    },
  },
  {
    name: "木ノ実ヤグラ",
    image: "/assets/robots/2023-a-kinomiyagura.webp",
    description: "2023NHKロボコン Aチーム",
    result: "地区大会特別賞受賞",
    createdAt: 2023,
  },
  {
    name: "S∅PNIR",
    image: "/assets/robots/2023-b-sleipnir.webp",
    description: "2023NHKロボコン Bチーム",
    result: "地区大会ベスト4・技術賞/全国大会出場",
    links: {
      PV: "https://www.youtube.com/watch?v=Fu7AD7VwOIU",
    },
    createdAt: 2023,
  },
  {
    name: "がらくた倶楽部",
    image: "/assets/robots/2023-haru-grktclub.webp",
    description: "2023関東春ロボコン",
    createdAt: 2023,
  },
  {
    name: "サンタのおつかい",
    image: "/assets/robots/2023-haru-santa.webp",
    description: "2023関東春ロボコン",
    createdAt: 2023,
  },
  {
    name: "Astarium",
    image: "/assets/robots/2024-a-astarium.png",
    description: "2024NHKロボコン Aチーム",
    result: "地区大会特別賞受賞",
    createdAt: 2024,
  },
  {
    name: "BeeKeeper",
    image: "/assets/robots/2024-b-beekeeper.jpg",
    description: "2024NHKロボコン Bチーム",
    createdAt: 2024,
  },
  {
    name: "桃花飾組",
    image: "/assets/robots/2024-haru-a-momohana.webp",
    description: "2024関東春ロボコン Aチーム",
    createdAt: 2024,
  },
  {
    name: "@Roman",
    image: "/assets/robots/2024-haru-b-atroman.webp",
    description: "2024関東春ロボコン Bチーム",
    createdAt: 2024,
  },
  {
    name: "一夜城",
    image: "/assets/robots/2024-haru-c-ichiyajo.webp",
    description: "2024関東春ロボコン Cチーム",
    result: "ベスト4/特別賞受賞",
    createdAt: 2024,
  },
  {
    name: "建蔵",
    image: "/assets/robots/2025-a-tatezou.jpg",
    description: "2025NHKロボコン Aチーム",
    result: "地区大会特別賞受賞",
    createdAt: 2025,
  },
  {
    name: "明修羅",
    image: "/assets/robots/2025-b-asyura.jpg",
    description: "2025NHKロボコン Bチーム",
    result: "地区大会技術賞/全国大会出場",
    createdAt: 2025,
    links: {
      PV: "https://youtu.be/lZW2xDpCR1E",
    },
  },
  {
    name: "鵥",
    image: "/assets/robots/2025-haru-kakesu.jpg",
    description: "2025関東春ロボコン Aチーム",
    createdAt: 2025,
  },
  {
    name: "ヴォイテック隊長",
    image: "/assets/robots/2025-haru-voitech.jpg",
    description: "2025関東春ロボコン Bチーム",
    result: "特別賞受賞",
    createdAt: 2025,
  },
  {
    name: "BeeMead",
    image: "/assets/robots/2025-haru-beemead.jpg",
    description: "2025関東春ロボコン Cチーム",
    result: "特別賞受賞",
    createdAt: 2025,
  },
  {
    name: "守鴨",
    image: "/assets/robots/2026-kou-a-syugamo.jpg",
    description: "2026交流ロボコン Aチーム",
    createdAt: 2026,
  },
  {
    name: "猟豹",
    image: "/assets/robots/2026-kou-b-ryohyo.jpg",
    description: "2026交流ロボコン Bチーム",
    result: "交ロボ大賞/予選にて大会最速Vゴール",
    createdAt: 2026,
  },
];
const robotsYearGrouped = robots.reduce((acc, robot) => {
  acc.set(robot.createdAt, [...(acc.get(robot.createdAt) ?? []), robot]);
  return acc;
}, new Map<number, Robot[]>());
</script>

<template>
  <h1>ロボット</h1>
  <p>
    東京高専ロボコンゼミが過去に作ったロボットを紹介します。<br />画像はクリック/タップで拡大できます。
  </p>
  <template
    v-for="[createdAt, robots] in Array.from(robotsYearGrouped).reverse()"
    :key="createdAt"
  >
    <div :class="$style.robotsSection" :data-year="createdAt">
      <div v-for="robot in robots" :key="robot.name" :class="$style.robot">
        <img
          v-if="robot.image"
          :src="robot.image"
          :alt="robot.name"
          :class="$style.image"
          data-zoomable
        />
        <div :class="$style.texts">
          <span class="h1Like" :class="$style.name">{{ robot.name }}</span>
          <span :class="$style.text">{{ robot.description }}</span>
          <span v-if="robot.result" :class="$style.text">{{
            robot.result
          }}</span>
        </div>
        <div :class="$style.links">
          <a
            v-for="(url, name) in robot.links"
            :key="name"
            :href="url"
            :class="$style.link"
            ><IconLink />{{ name }}</a
          >
        </div>
      </div>
    </div>
  </template>
</template>

<style module>
.robotsSection {
  border-left: solid 2px var(--vp-c-brand);
  padding: 10px 0 10px 20px;
  position: relative;
}

.robotsSection::before {
  content: attr(data-year);
  display: block;
  position: absolute;
  left: -20px;
  top: 0;
  padding: 10px;
  background-color: var(--vp-c-bg);
  border-radius: 6px;
  border: solid 2px var(--vp-c-brand);
  width: 70px;
  text-align: center;
  z-index: 22;
  pointer-events: none;
}

.robot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  height: 400px;
  border-radius: 12px;
  text-decoration: none;
  position: relative;
  border: solid 1px var(--vp-c-divider);
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.texts {
  display: flex;
  flex-direction: column;
  pointer-events: none;
  gap: 7px;
  width: 100%;
  padding: 15px 20px;
  background: linear-gradient(
    90deg,
    var(--vp-backdrop-bg-color) 30%,
    transparent 70%
  );
}

.name {
  color: var(--vp-c-white);
  pointer-events: none;
  user-select: none;
}

.text {
  color: var(--vp-c-white);
  font-weight: bold;
  pointer-events: none;
  user-select: none;
}

.links {
  display: flex;
  gap: 10px;
  justify-content: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.links > .link {
  padding: 5px 10px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1) !important;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s;
  font-weight: bold;
  display: flex;
  gap: 5px;
  justify-content: center;
}

.links > .link:hover {
  border-color: var(--vp-c-brand);
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 !important;
  pointer-events: auto;
}

.robot > *:not(.image) {
  z-index: 21;
}
</style>
