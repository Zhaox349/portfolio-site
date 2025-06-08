<template>
  <div class="project-content">
    <h1>Wayfinding Design Manual</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Publication</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>Dec. 2023</p>
      </div>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding1.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
      <!-- <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding2.jpg"
          alt="Wayfinding Design Manual"
        />
      </div> -->
    </div>

    <div class="project-description">
      <p>
        This project presents a comprehensive wayfinding system for the Boston
        Contemporary Museum, designed to enhance visitor navigation and
        engagement. The manual includes detailed layouts of the entire
        wayfinding system, featuring museum floor maps, directory elevations,
        directional signage, and location signage elevations.
      </p>
      <p>
        Through thoughtful design and clear visual communication, the wayfinding
        system ensures an intuitive and seamless visitor experience, balancing
        functionality with the museum's contemporary aesthetic. Each element has
        been carefully crafted to reflect the museum's identity while
        prioritizing accessibility and ease of use for a diverse audience.
      </p>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/Manual-01.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/Manual-02.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/wayfinding-design-manual/Manual-03.jpg"
        alt="Wayfinding Design Manual"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/wayfinding-design-manual/Manual-04.jpg"
        alt="Wayfinding Design Manual"
      />
    </div>

    <div class="project-image-grid no-gap four-columns">
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding7.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding8.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding9.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/wayfinding-design-manual/wayfinding10.jpg"
          alt="Wayfinding Design Manual"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// 静态页面，无需动态数据获取
</script>

<style lang="scss" scoped>
// 使用与其他页面一致的变量和混合器命名空间
// @use "@/assets/scss/variables" as variable;
// @use "@/assets/scss/mixins" as mixins;

.project-content {
  padding: variable.$spacing-md;
  max-width: 1200px;
  margin: 0 auto;
}

.project-meta {
  display: flex;
  margin: variable.$spacing-md 0 variable.$spacing-lg;
  gap: variable.$spacing-xl;

  .meta-item {
    h3 {
      font-size: variable.$font-size-base;
      font-weight: variable.$font-weight-bold;
      margin-bottom: variable.$spacing-xs;
    }

    p {
      font-size: variable.$font-size-base;
    }
  }
}

.project-description {
  margin: variable.$spacing-lg 0;
  max-width: 100%;

  p {
    margin-bottom: variable.$spacing-md;
    line-height: 1.6;
  }
}

.project-image {
  margin: variable.$spacing-lg 0;

  img {
    width: 100%;
    height: auto;

    @include mixins.shadow(light);
    @include mixins.transition(box-shadow, transform);

    &:hover {
      @include mixins.shadow(medium);
      transform: scale(1.01);
    }
  }

  &.full-width {
    margin: variable.$spacing-xl 0;
    width: 100%;
  }
}

.project-image-row {
  display: flex;
  gap: variable.$spacing-md;
  margin: variable.$spacing-lg 0;

  .image-container {
    flex: 1;

    img {
      width: 100%;
      height: auto;

      @include mixins.shadow(light);
      @include mixins.transition(box-shadow, transform);

      &:hover {
        @include mixins.shadow(medium);
        transform: scale(1.01);
      }
    }
  }

  @include mixins.respond-to(medium) {
    flex-direction: column;

    .image-container {
      margin-bottom: variable.$spacing-md;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.project-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: variable.$spacing-md;
  margin: variable.$spacing-lg 0;

  &.four-columns {
    grid-template-columns: repeat(2 1fr);
    gap: 0;
    line-height: 0;

    @include mixins.respond-to(large) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.respond-to(medium) {
      grid-template-columns: 1fr;
    }
  }

  &.no-gap {
    gap: 0;
  }

  .image-container {
    img {
      width: 100%;
      height: auto;
      border-radius: 0; // 无间隙布局时移除圆角
      @include mixins.transition(transform);

      &:hover {
        transform: scale(1.01);
      }
    }
  }

  @include mixins.respond-to(medium) {
    grid-template-columns: 1fr;

    .image-container {
      margin-bottom: 0; // 无间隙布局时移除底部间距

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
