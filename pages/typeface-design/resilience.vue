<template>
  <div class="project-content">
    <ProjectHeader title="Resilience" type="Typeface Design" date="Jan. 2023" />

    <div class="project-image full-width">
      <img
        src="/typeface-design/resilience/Resilience1.jpg"
        alt="Resilience Typeface Design"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        The Resilience project is a typographic experiment using hand-cut
        Helvetica letterforms on Shrinky Dinks sheets to compose new letter
        forms while using a heat gun. The high temperature shrinks and bends the
        flexible sheet in order to create a new elastic form of type. It aims to
        address the resilience concept through form-making and adapting to
        deconstruction and a deviation in direction.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/typeface-design/resilience/Resilience2.jpg"
        alt="Resilience Typeface Experiment"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/typeface-design/resilience/Resilience3.jpg"
        alt="Resilience Type Forms"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/typeface-design/resilience/Resilience4.jpg"
        alt="Resilience Final Design"
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
  max-width: 100%;

  p {
    margin-bottom: variable.$spacing-md;
    line-height: 1.6;
  }
}

.project-image {
  margin: variable.$spacing-lg 0;

  &.full-width {
    width: 100%;

    img {
      width: 100%;
      height: auto;

      @include mixins.shadow(medium);
    }
  }
}
</style>
