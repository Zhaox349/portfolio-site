<template>
  <div class="project-content">
    <ProjectHeader
      title="Research & Publication"
      type="Publication"
      date="May. 2024"
    />

    <div class="project-image full-width">
      <img
        src="/publication/research-publication/Research1.jpg"
        alt="Research & Publication"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        Snapshots: Research Publication is a two-part book that bridges research
        and practice. The first half highlights six designers and studios that
        have deeply influenced my thinking, while the second half documents a
        series of design projects developed throughout the Grad I semester.
        These projects reflect not only conceptual exploration and hands-on
        experimentation, but also the creative struggles and breakthroughs that
        shaped my design voice. From inspiration to execution, Snapshots
        captures the layered, evolving nature of my process.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/research-publication/Research2.JPG"
        alt="Research & Publication"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/research-publication/Spread1.jpg"
        alt="Research & Publication"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/research-publication/Spread 2.jpg"
        alt="Research & Publication"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
// 静态页面，无需动态数据获取
</script>

<style lang="scss" scoped>
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
  max-width: 800px;

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
</style>
