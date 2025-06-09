// 提供布局数据给页面组件
export default defineNuxtPlugin((nuxtApp) => {
  // 从layouts/default.vue中导入的数据结构
  const portfolioData = [
    {
      id: "publication",
      title: "Publication",
      projects: [
        {
          id: "american-chinese",
          title: "American Chinese (Restaurant)",
          description: `A book about American Chinese Food`,
        },
        {
          id: "translation-liminality",
          title: "Liminality",
          description: `Experimental book around letter “A”`,
        },
        {
          id: "wayfinding-design-manual",
          title: "Wayfinding Design Manual",
          description: `Wayfinding system for the Boston Contemporary Museum`,
        },
        {
          id: "design-history-anthology",
          title: "Design History Anthology",
          description: `A book about Art Nouveau & Psychedelic Art`,
        },
        {
          id: "enjoyment-unbounded-ease",
          title: "Enjoyment in Unbounded Ease",
          description: `A book about translation between languages`,
        },
        {
          id: "research-publication",
          title: "Research & Publication",
          description: `A book about my research process and design practice`,
        },
      ],
    },
    {
      id: "branding",
      title: "Branding",
      projects: [
        {
          id: "museum-craft-design",
          title: "Museum of Craft & Design",
          description: `Rebranding for Museum of Craft and Design (MOCD)`,
        },
        {
          id: "si",
          title: "SI",
          description: `Branding for stretch mark shaper`,
        },
      ],
    },
    {
      id: "website",
      title: "Website",
      projects: [
        {
          id: "extreme-scale",
          title: "Extreme Scale",
          description: `An interactive website about cultural identity`,
        },
        {
          id: "unimate",
          title: "UniMate",
          description: `A web platform for prospective international students`,
        },
        {
          id: "reimagining-psychedelia",
          title: "Reimagining Psychedelia",
          description: `50 Iterative Posters and a website about psychedelic art`,
        },
      ],
    },
    {
      id: "poster",
      title: "Poster",
      projects: [
        {
          id: "50-questions",
          title: "50 Questions",
          description: `Poster Series about self-introspection`,
        },
        {
          id: "obverse-quantify",
          title: "Obverse & Quantify",
          description: `An infographic poster with 9 Risographs about mis-shot HDR firework`,
        },
        {
          id: "masonry",
          title: "Masonry",
          description: `A typographic experiment poster series shaped by grids`,
        },
      ],
    },
    {
      id: "typeface-design",
      title: "Typeface Design",
      projects: [
        {
          id: "resilience",
          title: "Resilience",
          description: `A typeface created by Shrinky Dinks sheets`,
        },
        {
          id: "scroll",
          title: "SCROLL(S)",
          description: `2025 Boston University Graphic Design MFA Exhibition with custom typeface `,
        },
      ],
    },
  ];

  // 提供数据给应用
  nuxtApp.provide("layoutData", {
    portfolioData,
  });
});
