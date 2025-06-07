<template>
  <div class="project-content">
    <h1>50 Questions</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Poster Design</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>Nov. 2024</p>
      </div>
    </div>

    <div class="project-image full-width">
      <img
        src="/poster/50-questions/Question1.jpg"
        alt="50 Questions - First Image"
      />
    </div>

    <div class="project-description">
      <p>
        This project develops a research methodology through conceptual and
        formal questioning to guide my design practice. The process begins with
        generating and refining a series of questions that explore personal and
        professional themes, serving as a foundation for creative exploration.
      </p>
      <p>
        The second phase involves designing a printed poster to visualize the
        top 50 questions. This poster will not only present the questions but
        also reveal the themes, patterns, and connections discovered throughout
        the inquiry. The final design reflects a thoughtful synthesis of ideas,
        showcasing how questions can shape and inspire a deeper understanding of
        design and life.
      </p>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/poster/50-questions/Question2.jpg"
          alt="50 Questions - Second Image"
        />
      </div>
      <div class="image-container">
        <img
          src="/poster/50-questions/Question3.jpg"
          alt="50 Questions - Third Image"
        />
      </div>
      <div class="image-container">
        <img
          src="/poster/50-questions/Question4.jpg"
          alt="50 Questions - Fourth Image"
        />
      </div>
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
  border-radius: variable.$border-radius-lg;
  overflow: hidden;
  @include mixins.shadow;

  &.full-width {
    width: 100%;
    max-width: none;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.project-image-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: variable.$spacing-md;
  margin: variable.$spacing-lg 0;

  .image-container {
    border-radius: variable.$border-radius-lg;
    overflow: hidden;
    @include mixins.shadow;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}
</style>
