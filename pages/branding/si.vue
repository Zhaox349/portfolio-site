<template>
  <div class="project-content">
    <ProjectHeader title="SI" type="Branding" date="Jan. 2023" />

    <div class="project-image full-width">
      <img src="/branding/si/Product 1.JPG" alt="SI Product 1" />
    </div>

    <div class="project-description">
      <p>
        SI is a Stretch Mark Shaper brand offering natural and toxin-free mark
        liner and stencil kits. Every mark is the witness of time and growth. We
        believe in presenting the authentic self and accomplishing the new
        concept of an attractive body for every consumer. Instead of covering
        and being ashamed about body marks, we aim to highlight body positivity
        through coloring marks. We use natural and sustainable materials to
        fulfill aesthetic needs. Our cosmetics brand allows people with stretch
        marks to accept and respect themselves. Our mission is to create a new
        standard of beauty.
      </p>
    </div>

    <div class="project-image full-width">
      <img src="/branding/si/Overview.jpg" alt="SI Overview" />
    </div>

    <div class="project-image full-width">
      <img src="/branding/si/Product 2.JPG" alt="SI Product 2" />
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img src="/branding/si/Product 3.JPG" alt="SI Product 3" />
      </div>
      <div class="image-container">
        <img src="/branding/si/Product 4.JPG" alt="SI Product 4" />
      </div>
    </div>

    <div class="project-image full-width">
      <img src="/branding/si/SI4.jpg" alt="SI Design 4" />
    </div>

    <div class="project-description">
      <p>
        As part of the branding project, I developed visual identities in line
        with business objectives and created marketing materials, including ads.
        To gather inspiration, I explored the city and used natural patterns as
        examples.
      </p>
      <p>
        Tree rings are natural markings on a tree trunk that indicate its age.
        These marks bear witness to the passing of time and become part of the
        tree. Animal marks, such as zebra and tiger stripes, act as camouflage
        and protection from predators. As humans, why are we ashamed of body
        marks? Why do we view them like scars and want to remove them? What do
        stretch marks mean to us? I raised these questions during an
        advertisement poster experiment.
      </p>
    </div>

    <div class="project-image full-width">
      <img src="/branding/si/SI5.jpg" alt="SI Design 5" />
    </div>

    <div class="project-image full-width">
      <img src="/branding/si/SI6.jpg" alt="SI Design 6" />
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

.project-image-row {
  display: flex;
  gap: variable.$spacing-md;
  margin: variable.$spacing-xl 0;

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
}
</style>
