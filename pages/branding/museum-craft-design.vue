<template>
  <div class="project-content">
    <h1>Museum of Craft & Design</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Branding</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>Nov. 2024</p>
      </div>
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum1.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-description">
      <p>
        This project reimagines the visual identity of the Museum of Craft and
        Design (MOCD), emphasizing its mission to inspire creativity and
        inclusivity. The rebranding features a logo design inspired by craft
        materials and organic shapes, using neutral earth tones to evoke a
        grounded and approachable feel.
      </p>
      <p>
        The campaign introduces the tagline "MO' Craft + Design For All,"
        celebrating the museum's accessibility and creative spirit. Vibrant
        visuals and the prefix "MO'" (e.g., MO' Making, MO' Crafting) create a
        cohesive branding system, extending to merchandise, digital platforms,
        and promotional materials. The rebrand highlights the museum's role as a
        dynamic space for craft and design exploration, fostering engagement
        across diverse audiences.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum2.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum3.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum4.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum5.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum6.jpg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum7.jpeg"
        alt="Museum of Craft & Design"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/branding/museum-craft-design/Museum8.jpeg"
        alt="Museum of Craft & Design"
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
