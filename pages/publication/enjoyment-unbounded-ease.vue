<template>
  <div class="project-content">
    <ProjectHeader
      title="Enjoyment in Unbounded Ease"
      type="Publication"
      date="Mar. 2024"
    />

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/publication/enjoyment-in-unbounded-ease/Enjoyment1.jpg"
        alt="Enjoyment in Unbounded Ease"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        This project is a translation experiment based on the classical Daoist
        text 《逍遥游》. Through a looped process of linguistic translation,
        from Ancient Chinese to Contemporary Chinese, then to English, and back
        through the same path, the work explores how meaning mutates across
        time, language, and cultural context.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/publication/enjoyment-in-unbounded-ease/Spread1.jpg"
        alt="Enjoyment in Unbounded Ease"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        Rather than aiming for accuracy or fidelity, this project embraces the
        slippages, reinterpretations, and distortions that arise during each
        stage of translation. The final comparison between the original and
        returned version of Ancient Chinese reveals not only shifts in phrasing
        and tone, but deeper questions about authorship, interpretation, and
        narrative ownership. What is preserved, what is lost, and what is
        reimagined through this layered act of translation?
      </p>
      <p>
        Enjoyment in Unbounded Ease reflects how translation becomes a site
        where identity and meaning are constructed, deconstructed, and reframed.
        The journey of language becomes a metaphor for cultural dislocation,
        continuity, and transformation.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/publication/enjoyment-in-unbounded-ease/Enjoyment6.jpg"
        alt="Enjoyment in Unbounded Ease"
        loading="lazy"
      />
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/publication/enjoyment-in-unbounded-ease/Enjoyment7.jpg"
          alt="Enjoyment in Unbounded Ease"
          loading="lazy"
        />
      </div>
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/publication/enjoyment-in-unbounded-ease/Enjoyment8.jpg"
          alt="Enjoyment in Unbounded Ease"
          loading="lazy"
        />
      </div>
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/publication/enjoyment-in-unbounded-ease/Enjoyment10.jpg"
        alt="Enjoyment in Unbounded Ease"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/publication/enjoyment-in-unbounded-ease/Enjoyment11.jpg"
        alt="Enjoyment in Unbounded Ease"
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
</style>
