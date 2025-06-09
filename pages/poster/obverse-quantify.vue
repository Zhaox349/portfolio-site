<template>
  <div class="project-content">
    <ProjectHeader
      title="Observe & Quantify"
      type="Poster Design"
      date="Feb. 2024"
    />

    <div class="project-image-row no-gap">
      <div class="image-container">
        <img
          src="/poster/obverse-quantify/SoftLight.jpg"
          alt="Soft Light Image"
        />
      </div>
      <div class="image-container">
        <img
          src="/poster/obverse-quantify/PinLight.jpg"
          alt="Pin Light Image"
        />
      </div>
      <div class="image-container">
        <img src="/poster/obverse-quantify/Darken.jpg" alt="Darken Image" />
      </div>
    </div>

    <div class="project-description">
      <p>
        Observe & Quantify is a visual research project that transforms mis-shot
        HDR photographs of fireworks into a structured design system. These
        images—overexposed, glitched, and layered with accidental light
        trails—were treated as data rather than mistakes. I analyzed their color
        shifts, motion blur, and abstract forms to extract patterns and rules
        for visual translation. The final outcome is a large-format poster
        composed of nine risograph prints, each focusing on a different aspect
        of the dataset, such as rhythm, contrast, or fragmentation. The
        risograph printing process adds another layer of texture and
        unpredictability, echoing the original glitches. The project explores
        how error, when reframed, can become a tool for design—turning chaos
        into controlled visual language.
      </p>
    </div>

    <div class="project-image-row with-gap">
      <div class="image-container">
        <img
          src="/poster/obverse-quantify/Misshot1.jpg"
          alt="Misshot HDR Firework Image 1"
        />
      </div>
      <div class="image-container">
        <img
          src="/poster/obverse-quantify/Misshot2.jpg"
          alt="Misshot HDR Firework Image 2"
        />
      </div>
    </div>
    <div class="image-caption">
      <p>Mis-shot HDR firework images</p>
    </div>

    <div class="project-image full-width">
      <img
        src="/poster/obverse-quantify/Misshot3.jpg"
        alt="Misshot HDR Firework Image 3"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/poster/obverse-quantify/observe.jpg"
        alt="Observe & Quantify Main Poster"
      />
    </div>
    <div class="image-caption">
      <p>Observe & Quantify main poster with 9 risograph posters</p>
    </div>

    <div class="project-image-row with-gap-3">
      <div class="image-container">
        <img src="/poster/obverse-quantify/riso1.jpg" alt="Risograph Print 1" />
      </div>
      <div class="image-container">
        <img src="/poster/obverse-quantify/riso2.jpg" alt="Risograph Print 2" />
      </div>
      <div class="image-container">
        <img src="/poster/obverse-quantify/riso3.jpg" alt="Risograph Print 3" />
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

.project-image-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: variable.$spacing-lg 0;

  &.with-gap {
    gap: variable.$spacing-md;
    grid-template-columns: repeat(2, 1fr);
    &-3 {
      gap: variable.$spacing-md;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &.no-gap {
    gap: 0;
  }

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

.image-caption {
  text-align: center;
  margin-top: variable.$spacing-sm;
  color: variable.$text-color;
  font-size: variable.$font-size-sm;
  font-style: italic;
}
</style>
