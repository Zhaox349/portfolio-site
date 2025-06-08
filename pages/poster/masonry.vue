<template>
  <div class="project-content">
    <h1>Masonry</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Poster Design</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>Nov. 2023</p>
      </div>
    </div>

    <div class="project-image full-width">
      <img src="/poster/masonry/Masonry1.jpg" alt="Masonry Main Image" />
    </div>

    <div class="project-description">
      <p>
        Masonry is a typographic experiment shaped by systems, grids, and rules.
        The project begins with a grid inspired by traditional Chinese
        architecture, using its modular structure as a base to construct
        letterforms. Influenced by television glitches, visual errors, PCB
        circuit boards, and gaming aesthetics, the poster uses bold,
        high-contrast colors to create a visually striking experience. Letters
        and words are embedded within the structure—intentionally obscured to
        invite viewer interaction. Upon closer inspection and careful decoding,
        hidden messages emerge, revealing terms like Boston University, dome,
        corridor, and labyrinth. The work challenges how meaning is formed,
        concealed, and discovered within systems of visual language.
      </p>
    </div>

    <div class="project-image-grid">
      <div class="image-container">
        <img src="/poster/masonry/Poster0.jpg" alt="Masonry Poster 0" />
      </div>
      <div class="image-container">
        <img src="/poster/masonry/Poster1.jpg" alt="Masonry Poster 1" />
      </div>
      <div class="image-container">
        <img src="/poster/masonry/Poster2.jpg" alt="Masonry Poster 2" />
      </div>
      <div class="image-container">
        <img src="/poster/masonry/Poster3.jpg" alt="Masonry Poster 3" />
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

.project-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: variable.$spacing-md;
  margin: variable.$spacing-lg 0;

  .image-container {
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
