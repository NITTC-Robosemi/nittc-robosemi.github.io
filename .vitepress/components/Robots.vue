<script lang="ts" setup>
type Robot = {
  name: string;
  image: string;
  description: string;
  result?: string;
  links?: Record<string, string>;
  createdAt: number;
};
const robots: Robot[] = [
  {
    name: "Strelitzia",
    image: "/assets/robots/2018-a-strelitzia.jpg",
    description: "2018NHKロボコン Aチーム",
    result: "地区大会ベスト5",
    createdAt: 2018,
    links: {
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2018",
    }
  },
  {
    name: "CLΘCKWISE",
    image: "/assets/robots/2018-b-clockwise.jpg",
    description: "2018NHKロボコン Bチーム",
    result: "地区大会優勝/全国大会出場/エキシビションにて非公式全国大会最速Vゴール",
    createdAt: 2018,
    links: {
      "PV": "https://www.PV.com/watch?v=17SvYzGcg18",
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2018",
    },
  },
  {
    name: "洗紫万紅",
    image: "/assets/robots/2019-a-senshibanko.png",
    description: "2019NHKロボコン Aチーム",
    createdAt: 2019,
    links: {
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2019",
    },
  },
  {
    name: "黎明",
    image: "/assets/robots/2019-b-reimei.png",
    description: "2019NHKロボコン Bチーム",
    createdAt: 2019,
    links: {
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2019",
    },
  },
  {
    name: "NIT東響楽団演奏会",
    image: "/assets/robots/2020-a-nitharmonics.png",
    description: "2020NHKロボコン Aチーム",
    result: "特別賞受賞",
    createdAt: 2020,
    links: {
      "PV": "https://www.PV.com/watch?v=PNQ_LcuqU60",
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2020",
    },
  },
  {
    name: "TRICKSTER",
    image: "/assets/robots/2021-a-trickster.png",
    description: "2021NHKロボコン Aチーム",
    result: "地区大会優勝/全国大会9位",
    createdAt: 2021,
    links: {
      "PV": "https://www.PV.com/watch?v=o-QHMa3JWDI",
    },
  },
  {
    name: "Mt.高尾",
    image: "/assets/robots/2021-b-mttakao.jpg",
    description: "2021NHKロボコン Bチーム",
    result: "地区大会アイデア賞受賞",
    createdAt: 2021,
  },
  {
    name: "鶴翼",
    image: "/assets/robots/2022-a-kakuyoku.png",
    description: "2022NHKロボコン Aチーム",
    result: "地区大会ベスト5",
    createdAt: 2022,
  },
  {
    name: "∞∞∞",
    image: "/assets/robots/2022-b-trinity.png",
    description: "2022NHKロボコン Bチーム",
    result: "地区大会準優勝/全国大会出場",
    createdAt: 2022,
    links: {
      "PV": "https://www.PV.com/watch?v=rUCy4x1DraI",
    },
  },
  {
    name: "木ノ実ヤグラ",
    image: "/assets/robots/2023-a-kinomiyagura.jpeg",
    description: "2023NHKロボコン Aチーム",
    result: "地区大会特別賞受賞",
    createdAt: 2023,
  },
  {
    name: "S∅PNIR",
    image: "/assets/robots/2023-b-sleipnir.png",
    description: "2023NHKロボコン Bチーム",
    result: "地区大会ベスト4・技術賞/全国大会出場",
    links: {
      "PV": "https://www.PV.com/watch?v=Fu7AD7VwOIU",
    },
    createdAt: 2023,
  },
];
const robotsYearGrouped = robots.reduce((acc, robot) => {
  if (acc.has(robot.createdAt)) {
    acc.set(robot.createdAt, [...acc.get(robot.createdAt), robot]);
  } else {
    acc.set(robot.createdAt, [robot]);
  }
  return acc;
}, new Map<number, Robot[]>());
console.log(robotsYearGrouped);
</script>

<template>
  <h1>ロボット</h1>
  <p>東京高専ロボコンゼミが過去に作ったロボットを紹介します。</p>
  <div>
    <div v-for="[createdAt, robots] in Array.from(robotsYearGrouped).reverse()" :key="createdAt">
      <div :class="$style.robotsSection" :data-year="createdAt">
        <div v-for="robot in robots" :key="robot.name" :style="{backgroundImage: `url(${robot.image})`}" :class="$style.robot">
          <span class="h1Like" :class="$style.name">{{ robot.name }}</span>
          <span :class="$style.text">{{ robot.description }}</span>
          <span v-if="robot.result" :class="$style.text">{{ robot.result }}</span>
          <div :class="$style.links">
            <a v-for="(url, name) in robot.links" :key="name" :href="url" :class="$style.link">{{ name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  border-radius: 5px;
  border: solid 2px var(--vp-c-brand);
  width: 70px;
  text-align: center;
  z-index: 1;
}

.robotsSection .robot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 10px;
  margin-bottom: 20px;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  text-decoration: none;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.name {
  color: var(--vp-c-white);
  text-shadow: 0 0 5px var(--vp-c-black), 0 0 10px var(--vp-c-black);
}

.text {
  color: var(--vp-c-white);
  font-weight: bold;
  text-shadow: 0 0 5px var(--vp-c-black), 0 0 10px var(--vp-c-black);
}

.links {
  display: flex;
  gap: 10px;
  justify-content: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.links>.link {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1) !important;
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color 0.25s;
}

.links>.link:hover {
  border-color: var(--vp-c-brand);
}
</style>
