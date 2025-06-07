<template>
  <div class="home-page">
    <h1>Welcome to My Portfolio</h1>
    <p class="intro">Explore my work across different categories</p>

    <div class="categories-grid">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/${category.id}`"
        class="category-card"
      >
        <h2>{{ category.title }}</h2>
        <p>{{ category.projectCount }} Projects</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 静态定义分类数据
const categories = [
  { id: "publication/american-chinese", title: "Publication", projectCount: 6 },
  { id: "branding/museum-craft-design", title: "Branding", projectCount: 2 },
  { id: "website/extreme-scale", title: "Website", projectCount: 5 },
  { id: "poster/50-questions", title: "Poster", projectCount: 3 },
  {
    id: "typeface-design/resilience",
    title: "Typeface Design",
    projectCount: 2,
  },
];
</script>

<style lang="scss" scoped>
.home-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.category-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--primary-color);
  }

  p {
    color: #666;
  }
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .category-card {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
