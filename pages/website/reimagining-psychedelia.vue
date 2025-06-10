<template>
  <div class="project-content">
    <ProjectHeader
      title="Reimagining Psychedelia"
      type="Poster Design / Web Design"
      date="Oct. 2023"
    />

    <div class="project-image full-width">
      <img
        src="/website/Iteration/Iteration1.jpg"
        alt="Iteration Project - First Image"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        We each chose an iconic poster that resonated with us—visually or
        conceptually—and reimagined it 50 different ways. The goal was to break
        down the original design, extract its core elements, and explore new
        ways of using them to create fresh images, patterns, compositions, or
        messages. After completing the iterations, we built a digital archive to
        collect and present the full process.
      </p>
      <p>
        I chose BG #75 (1967) by Bonnie MacLean, a standout figure in the
        psychedelic poster movement of 1960s San Francisco. The poster features
        a stylized face next to a peacock tail, with swirling blue type listing
        performers at the Fillmore. I was drawn to the intense color contrasts
        and hypnotic forms. The way she played with legibility and visual rhythm
        felt bold, experimental, and emotional—exactly the kind of energy I
        wanted to explore.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/website/Iteration/Iteration 2.jpg"
        alt="Iteration Project - Second Image"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        In my fifty iterations, I pulled apart her use of color, ornamentation,
        and form to push them in new directions. Some versions focused on
        pattern-making, others zoomed in on typography, or flipped the structure
        entirely. This process became a space for discovery, balancing homage
        with play, and learning how design can evolve through transformation and
        repetition.
      </p>
    </div>

    <div class="project-video full-width">
      <video autoplay loop muted playsinline>
        <source src="/website/Iteration/Video1.mov" />
      </video>
    </div>

    <div class="project-description">
      <p>
        This interactive website presents Reimagining Psychedelia in three
        sections. The first is a gradient drawing board where users can draw
        colorful paths with their cursor, accompanied by a brief project
        introduction. The second section is a kaleidoscope that merges all 50
        posters into a single visual. The final section is a dynamic archive
        wall, where each poster appears in a random layout, and users can click
        and drag to rearrange them freely.
      </p>
      <p>
        <ProjectJumpButton url="https://zhaox349.github.io/50iterations/" />
      </p>
    </div>

    <div class="project-video full-width">
      <video autoplay loop muted playsinline>
        <source src="/website/Iteration/Video2.mov" />
      </video>
    </div>

    <div class="project-video full-width">
      <video autoplay loop muted playsinline>
        <source src="/website/Iteration/Video3.mov" />
      </video>
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

  a {
    color: variable.$primary-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      @include mixins.darken(variable.$primary-color, 10%);
    }
  }
}

.project-image,
.project-video {
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

  video {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
