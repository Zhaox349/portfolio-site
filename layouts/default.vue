<template>
  <div class="portfolio-app">
    <!-- Fixed Top Menu -->
    <header class="top-menu">
      <nav>
        <a href="mailto:xuruz111@gmail.com">Email</a>
        <a href="https://instagram.com/chiiiz_art" target="_blank">Instagram</a>
        <a href="https://linkedin.com/in/xuruzhao" target="_blank">LinkedIn</a>
        <NuxtLink to="/">About</NuxtLink>
      </nav>
    </header>

    <div class="content-container">
      <!-- Left Directory -->
      <aside class="directory">
        <div
          v-for="(category, categoryIndex) in portfolioData"
          :key="categoryIndex"
          class="category"
        >
          <h2>
            {{ category.title }}
          </h2>
          <ul>
            <li
              v-for="(project, projectIndex) in category.projects"
              :key="projectIndex"
              :class="{
                active: isActiveProject(category.id, project.id),
                project,
              }"
              @click="navigateToProject(category.id, project.id)"
            >
              {{ project.number }}. {{ project.title }}
            </li>
          </ul>
        </div>
      </aside>

      <!-- Right Content Area -->
      <main class="content-area">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// 从插件获取数据
const { $layoutData } = useNuxtApp();
const portfolioData = $layoutData.portfolioData;

// 导航函数
const navigateToProject = (categoryId, projectId) => {
  router.push(`/${categoryId}/${projectId}`);
  // 切换项目时滚动到顶部
  if (import.meta.client) {
    document.querySelector(".content-area").scrollTop = 0;
  }
};

// 检查当前路由是否匹配项目
const isActiveProject = (categoryId, projectId) => {
  const path = route.path.split("/").slice(1, 3);
  if (path[0] === categoryId && path[1] === projectId) {
    return true;
  }
};
</script>

<style lang="scss">
// 这里可以添加特定于此布局的样式
// 全局样式已经在assets/styles/global.scss中定义

// 如果需要覆盖或添加特定样式，可以在这里添加
.portfolio-app {
  // 特定于此布局的样式
  .content-container {
    .directory {
      .category h2 {
        font-size: 28px;
      }
      .project {
        font-size: 20px;
      }
    }
  }
}
</style>
