<template>
  <div class="project-content">
    <h1>Liminality</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Publication</p>
        <p>Poster</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>Apr. 2024</p>
      </div>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality1.jpg"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality2.jpg"
          alt="Liminality"
        />
      </div>
    </div>

    <div class="project-description">
      <p>
        Liminality, a concept rooted in anthropology, describes the transitional
        phase during a rite of passage where participants experience ambiguity
        and disorientation. Inspired by this concept, the project aims to
        explore liminality through the convergence of interactive design and
        literary inspiration.
      </p>
      <p>
        The "Liminality" project explores the fascinating concept of being in a
        transitional or in-between state, specifically focusing on the realm of
        typography. In every moment of transition, there lies a vast, often
        unobserved world where movement gradually succumbs to stillness, where
        the fluid becomes fixed, and where the ephemeral crystallizes into the
        eternal.
      </p>
      <p>
        Emphasizing the captivating transition from movement to stillness,
        focusing on the delicate interplay between time and form, we delve into
        the subtle and often swift transformation of the letter "A", using
        mediums that morph from dynamic to static.
      </p>
      <p>A snapshot of transition...</p>
    </div>

    <div class="project-image-grid">
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality3.jpg"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality4.jpg"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality5.jpg"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality6.jpg"
          alt="Liminality"
        />
      </div>
    </div>

    <div class="project-description">
      <p>
        In a dynamic exploration of form and flux within the "Liminality"
        project, the act of dripping ink introduces a vibrant layer to our
        understanding of transitional states. This experiment involves using a
        dripper to precisely place ink on a surface, then immediately intervenes
        by blowing air across the wet ink, guiding it into the shape of the
        letter "A". This whole process, which unfolds within a mere 10 seconds,
        emphasizes the rapid transition from a static drop to a fluid, moving
        form, manipulated and morphed by the breath. The resulting images
        capture the ink in mid-motion, illustrating the liminal phase where the
        ink is neither fully liquid nor entirely set in its final form.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/translation-liminality/Liminality7.jpg"
        alt="Liminality"
      />
    </div>

    <div class="project-description">
      <p>
        In this experiment, different styles of the letter "A" are meticulously
        laser-cut into acrylic boards. These variations range from bold, heavy
        strokes to delicate, hairline forms, creating diverse templates for
        further artistic exploration.
      </p>
      <p>
        Utilizing these acrylic stencils, the experiment involves the
        application of spray foam within the hollow contours of each 'A'. The
        foam, known for its rapid expansion and hardening properties, begins to
        inflate and adapt to the confines of the acrylic mold. Within seconds,
        what begins as a simple chemical reaction transforms into a tangible,
        three-dimensional letter. The resulting pieces showcase how materials
        can be manipulated to fill and exceed the spaces defined.
      </p>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality8.JPG"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality9.jpg"
          alt="Liminality"
        />
      </div>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality10.jpg"
          alt="Liminality"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/translation-liminality/Liminality11.jpg"
          alt="Liminality"
        />
      </div>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/translation-liminality/Liminality12.jpg"
        alt="Liminality"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/translation-liminality/Liminality13.jpg"
        alt="Liminality"
      />
    </div>
  </div>
</template>

<script setup>
// 静态页面，无需动态数据获取
</script>

<style lang="scss" scoped>
// @use "@/assets/scss/variable" as variable;
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

  .image-container {
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
    grid-template-columns: 1fr;

    .image-container {
      margin-bottom: variable.$spacing-md;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
