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
          number: "01",
          title: "American Chinese (Restaurant)",
          description: `<p>A comprehensive publication exploring the cultural significance and design aesthetics of American Chinese restaurants.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "translation-liminality",
          number: "02",
          title: "Liminality",
          description: `<p>An exploration of the space between languages and cultures through design and typography.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "wayfinding-design-manual",
          number: "03",
          title: "Wayfinding Design Manual",
          description: `<p>A comprehensive guide to creating effective navigation systems in public spaces.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "design-history-anthology",
          number: "04",
          title: "Design History Anthology",
          description: `<p>A curated collection of essays examining pivotal moments in design history.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "enjoyment-unbounded-ease",
          number: "05",
          title: "Enjoyment in Unbounded Ease",
          description: `<p>A visual exploration of leisure and relaxation in contemporary society.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "research-publication",
          number: "06",
          title: "Research & Publication",
          description: `<p>A collection of research-based design publications exploring various cultural phenomena.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding",
      projects: [
        {
          id: "museum-craft-design",
          number: "07",
          title: "Museum of Craft & Design",
          description: `<p>A comprehensive brand identity for a museum dedicated to craft and design, celebrating traditional techniques and contemporary applications.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "si",
          number: "08",
          title: "SI",
          description: `<p>Brand identity for a contemporary design studio focusing on sustainable practices and innovative solutions.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
      ],
    },
    {
      id: "website",
      title: "Website",
      projects: [
        {
          id: "extreme-scale",
          number: "09",
          title: "Extreme Scale",
          description: `<p>A website exploring the concept of scale in digital environments, pushing the boundaries of conventional web design.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "unimate",
          number: "10",
          title: "UniMate",
          description: `<p>A digital platform designed to connect university students for collaborative projects and social activities.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "reimagining-psychedelia",
          number: "11",
          title: "Reimagining Psychedelia",
          description: `<p>An experimental web project showcasing 50 different design iterations of the same content, exploring versatility in digital design.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
      ],
    },
    {
      id: "poster",
      title: "Poster",
      projects: [
        {
          id: "50-questions",
          number: "12",
          title: "50 Questions",
          description: `<p>A series of typographic posters posing thought-provoking questions about design and society.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "obverse-quantify",
          number: "13",
          title: "Obverse & Quantify",
          description: `<p>A poster series exploring the relationship between qualitative and quantitative aspects of design.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "masonry",
          number: "14",
          title: "Masonry",
          description: `<p>A collection of architectural posters examining the structural and aesthetic qualities of masonry in contemporary buildings.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
      ],
    },
    {
      id: "typeface-design",
      title: "Typeface Design",
      projects: [
        {
          id: "resilience",
          number: "15",
          title: "Resilience",
          description: `<p>A typeface designed to maintain legibility across various media and environmental conditions, emphasizing adaptability and clarity.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
        {
          id: "scroll",
          number: "16",
          title: "Scroll",
          description: `<p>A hybrid typeface combining elements of Chinese calligraphy with Latin letterforms, exploring cultural fusion through typography.</p>`,
          image: "/placeholder.jpg?height=500&width=800",
        },
      ],
    },
  ];

  // 提供数据给应用
  nuxtApp.provide("layoutData", {
    portfolioData,
  });
});
