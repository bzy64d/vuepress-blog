import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "強ければ強いほど責任を取りなさい",

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
              text: "N1 2017 07",
              link: "/nihongo/jlpt/n1.201707.md",
            },
            // {
            //   text: "n1.201712",
            //   link: "/nihongo/jlpt/n1.201712.md",
            // },
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
            {
              text: "ドライフラワー",
              link: "/nihongo/kyoku/ドライフラワー.md",
            },
          ],
        },
      ],
    },
  },

  base: "/vuepress-blog/",
});
