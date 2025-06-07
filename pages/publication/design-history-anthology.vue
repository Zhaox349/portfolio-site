<template>
  <div class="project-content">
    <h1>Design History Anthology</h1>

    <div class="project-meta">
      <div class="meta-item">
        <p>Publication</p>
      </div>
      <div class="meta-item">
        <p>Nov. 2023</p>
      </div>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/design-history-anthology/Anthology1.jpg"
        alt="Design History Anthology"
      />
    </div>

    <div class="project-description">
      <p>
        This curated anthology explores cultural design practices through the
        lens of Psychedelic Art, presenting a collection of articles,
        reflections, and academic essays. Emerging in the 1960s and 1970s,
        Psychedelic Art was deeply influenced by earlier movements such as Art
        Nouveau, which itself arose in response to the industrialization of the
        late 19th century. Known for its vivid color palettes, flowing lines,
        and visual distortions, Psychedelic Art became a powerful expression of
        countercultural values and altered states of consciousness.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/design-history-anthology/Spreads1.jpg"
        alt="Design History Anthology"
      />
    </div>

    <div class="project-description">
      <p>
        For this project, we each selected a design movement or era and compiled
        ten research-based texts into a cohesive book. My anthology includes
        writings that explore the origins and visual language of Psychedelic
        Art, the psychological effects of psychedelic drugs, the role of music
        and concert posters, and the feminine iconography rooted in Art Nouveau.
      </p>
      <p>
        By examining both the aesthetic and cultural context of the movement,
        this anthology highlights how Psychedelic Art functions as more than
        visual style—it acts as a response to social change and collective
        imagination. Through this lens, the project reflects on how design
        continues to bridge past and present, shaping how we see and understand
        the world.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/design-history-anthology/Spreads2.jpg"
        alt="Design History Anthology"
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

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
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
