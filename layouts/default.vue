<template>
  <div class="portfolio-app">
    <!-- Fixed Top Menu -->
    <header class="top-menu">
      <nav>
        <a href="mailto:xuruz111@gmail.com">Email</a>
        <a href="https://instagram.com/chiiiz_art" target="_blank">IG</a>
        <a href="https://linkedin.com/in/xuruzhao" target="_blank">LinkedIn</a>
        <NuxtLink to="/">About</NuxtLink>
      </nav>

      <div class="menu-controls">
        <div>：）</div>
        <button class="menu-toggle" @click="isMenuOpen = true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="content-container">
      <!-- Left Directory -->
      <aside
        ref="directoryRef"
        :class="['directory', { 'mobile-menu': isMenuOpen }]"
      >
        <button class="close-menu" @click="isMenuOpen = false">&times;</button>
        <div
          v-for="(category, categoryIndex) in portfolioData"
          :key="categoryIndex"
          class="category"
        >
          <h2>
            {{ category.title }}
          </h2>
          <div
            v-for="(project, projectIndex) in category.projects"
            :id="categoryIndex + '-' + projectIndex"
            :key="projectIndex"
            :class="{
              project: true,
            }"
            @click="
              navigateToProject(
                category.id,
                project.id,
                categoryIndex + '-' + projectIndex
              )
            "
          >
            <div
              :class="{
                title: true,
                active: isActiveProject(category.id, project.id),
              }"
            >
              {{ project.title }}
            </div>
            <div class="description">
              {{ project.description }}
            </div>
          </div>
        </div>
      </aside>

      <!-- Right Content Area -->
      <main ref="contentAreaRef" class="content-area">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

// 从插件获取数据
const { $layoutData } = useNuxtApp();
const portfolioData = $layoutData.portfolioData;

const directoryRef = ref(null);
const contentAreaRef = ref(null);

// 导航函数
const navigateToProject = (categoryId, projectId, id) => {
  router.push(`/${categoryId}/${projectId}`);
  isMenuOpen.value = false;

  const projectItem = document.getElementById(id);
  directoryRef.value.scrollTo({
    top: projectItem.offsetTop - 50,
    behavior: "smooth",
  });

  contentAreaRef.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
.portfolio-app {
  @include mixins.flex(column);
  min-height: 100vh;
  .top-menu {
    @include mixins.fixed(0, 0, auto, 0);
    height: variable.$menu-height;
    background-color: variable.$primary-color;
    @include mixins.flex(row, space-between, center);
    padding: 0 variable.$spacing-md;
    z-index: 100;
    nav {
      @include mixins.flex;
      gap: variable.$nav-spacing;
    }

    .menu-controls {
      @include mixins.flex(row, center, center);
      gap: variable.$spacing-md;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;

      span {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        transition: transform 0.3s ease;
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }

    a {
      color: #000;
      text-decoration: none;
      font-weight: variable.$font-weight-medium;
      @include mixins.transition(color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .content-container {
    @include mixins.flex;
    margin-top: variable.$menu-height;
    height: calc(100vh - variable.$menu-height);
    overflow: hidden;
    .directory {
      min-width: variable.$sidebar-width;
      padding: variable.$spacing-lg variable.$spacing-md;
      background-color: variable.$white;
      overflow-y: auto;
      border-right: 1px solid variable.$light-gray;
      height: 100%;

      .close-menu {
        display: none;
      }

      @media (max-width: 768px) {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1000;
        padding-top: 60px;

        &.mobile-menu {
          display: block;
        }

        .close-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .category {
        margin-bottom: variable.$spacing-xl;

        h2 {
          position: relative;
          font-size: variable.$font-size-lg;
          margin-bottom: variable.$spacing-md;
          font-weight: variable.$font-weight-bold;
          &::after {
            position: absolute;
            bottom: -5px;
            left: 0;
            content: " ";
            height: 1px;
            width: 100%;
            background-color: #000;
          }

          a {
            color: variable.$primary-color;
            text-decoration: none;
            @include mixins.transition(color);

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .project {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 26px;
          .title {
            margin-bottom: variable.$spacing-sm;
            height: 48px;
            padding: 1px 14px;
            display: flex;
            align-items: center;
            cursor: pointer;
            @include mixins.transition(color);
            font-size: variable.$font-size-md;
            line-height: 2.6525rem;
            border: 1px solid #000;
            border-radius: 40px;
            &:hover {
              color: variable.$primary-color;
              background-color: #000;
            }

            &.active {
              color: variable.$primary-color;
              font-weight: variable.$font-weight-medium;
              background-color: #000;
            }
          }
          .description {
            position: relative;
            font-size: variable.$font-size-xs;
            color: variable.$secondary-color;
            width: 100%;
            &::after {
              position: absolute;
              bottom: -8px;
              left: 0;
              content: " ";
              height: 1px;
              width: 100%;
              background-color: #000;
            }
          }
        }
      }
    }

    .content-area {
      flex: 1;
      padding: variable.$spacing-lg;
      overflow-y: auto;
      background-color: variable.$medium-gray;
    }
  }
}
</style>
