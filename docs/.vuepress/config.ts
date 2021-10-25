import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "chen.zhang's blog",

  themeConfig: {
    logo: "",
    navbar: [
      {
        text: "俺の日本語",
        link: "/nihongo/",
      },
    ],
    sidebar: {
      "/nihongo/": [
        {
          text: "JLPT聴解",
          children: [
            {
              text: "n1.201707",
              link: "/nihongo/jlpt/n1.201707.md",
            },
            {
              text: "n1.201712",
              link: "/nihongo/jlpt/n1.201712.md",
            },
          ],
        },
        {
          text: "曲の練習",
          children: [
            {
              text: "アイロニ",
              link: "/nihongo/kyoku/アイロニ.md",
            },
            {
              text: "夜に駆ける",
              link: "/nihongo/kyoku/夜に駆ける.md",
            },
          ],
        },
      ],
    },
  },

  base: "/vuepress-blog/",
});
