<script lang="ts" setup>
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
      "PV": "https://www.youtube.com/watch?v=17SvYzGcg18",
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2018",
    },
  },
  {
    name: "洗紫万紅",
    // image: "/assets/robots/2019-a-senshibanko.png",
    description: "2019NHKロボコン Aチーム",
    createdAt: 2019,
    links: {
      "旧サイトで見る": "https://sites.google.com/view/nittc-robocon/nhk-records/2019",
    },
  },
  {
    name: "黎明",
    // image: "/assets/robots/2019-b-reimei.png",
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
      "PV": "https://www.youtube.com/watch?v=PNQ_LcuqU60",
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
      "PV": "https://www.youtube.com/watch?v=o-QHMa3JWDI",
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
      "PV": "https://www.youtube.com/watch?v=rUCy4x1DraI",
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
      "PV": "https://www.youtube.com/watch?v=Fu7AD7VwOIU",
    },
    createdAt: 2023,
  },
  {
    name: "がらくた倶楽部",
    image: "/assets/robots/2023-haru-grktclub.jpeg",
    description: "2023関東春ロボコン",
    createdAt: 2023,
  },
  {
    name: "サンタのおつかい",
    image: "/assets/robots/2023-haru-santa.png",
    description: "2023関東春ロボコン",
    createdAt: 2023,
  },
  {
    name: "桃花飾組",
    image: "/assets/robots/2024-haru-a-momohana.JPG",
    description: "2024関東春ロボコン Aチーム",
    createdAt: 2024,
  },
  {
    name: "@Roman",
    image: "/assets/robots/2024-haru-b-atroman.JPG",
    description: "2024関東春ロボコン Bチーム",
    createdAt: 2024,
  },
  {
    name: "一夜城",
    image: "/assets/robots/2024-haru-c-ichiyajo.png",
    description: "2024関東春ロボコン Cチーム",
    result: "ベスト4/特別賞受賞",
    createdAt: 2024,
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
</script>

<template>
  <h1>ロボット</h1>
  <p>東京高専ロボコンゼミが過去に作ったロボットを紹介します。<br>画像はクリック/タップで拡大できます。</p>
    <template v-for="[createdAt, robots] in Array.from(robotsYearGrouped).reverse()" :key="createdAt">
      <div :class="$style.robotsSection" :data-year="createdAt">
        <div v-for="robot in robots" :key="robot.name" :class="$style.robot">
          <img v-if="robot.image" :src="robot.image" :alt="robot.name" :class="$style.image" data-zoomable />
          <div :class="$style.texts">
            <span class="h1Like" :class="$style.name">{{ robot.name }}</span>
            <span :class="$style.text">{{ robot.description }}</span>
            <span v-if="robot.result" :class="$style.text">{{ robot.result }}</span>
          </div>
          <div :class="$style.links">
            <a v-for="(url, name) in robot.links" :key="name" :href="url" :class="$style.link">{{ name }}</a>
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
  background: linear-gradient(90deg, var(--vp-backdrop-bg-color) 30%, transparent 70%);
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

.links>.link {
  padding: 5px 10px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1) !important;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s;
}

.links>.link:hover {
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

.robot>*:not(.image) {
  z-index: 21;
}
</style>
