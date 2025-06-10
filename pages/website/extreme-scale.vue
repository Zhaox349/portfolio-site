<template>
  <div class="project-content">
    <ProjectHeader
      title="Extreme Scale"
      type="Interactive Web Design"
      date="Dec. 2024"
    />

    <div class="project-image full-width">
      <img
        src="/website/extreme-scale/Extreme1.jpg"
        alt="Extreme Scale"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        Extreme Scale explores how design transforms when pushed beyond its
        usual limits—through size, weight, intensity, emotion, or meaning. The
        project magnifies a single idea to an exaggerated degree, shifting the
        ordinary into something bold, immersive, or provocative. These
        experiments challenge how we perceive presence, proportion, and impact
        in design.
      </p>
      <p>
        What Do You Think of When You Hear Chinese Culture?, scales cultural
        identity into an interactive experience. The website invites users to
        respond to floating, emoji-like icons representing stereotypical Chinese
        cultural symbols. As answers are entered, they appear on screen in the
        Wonton typeface, dropping with gravity and bouncing at the bottom. Over
        time, the piling responses form a chaotic "mountain" of text. The
        characters become increasingly illegible, yet ironically highlight the
        decorative strokes of the Wonton font—a typeface often associated with
        cultural appropriation. This piece plays with excess, interaction, and
        irony to examine how cultural identity is flattened, distorted, and
        reshaped through design at scale.
      </p>
    </div>

    <ProjectJumpButton url="https://chinese-culture.onrender.com" />

    <div class="project-image full-width video-container">
      <video autoplay loop muted playsinline>
        <source src="/website/extreme-scale/Extreme5.mov" />
      </video>
    </div>

    <div class="project-image full-width">
      <img
        src="/website/extreme-scale/Extreme2.png"
        alt="Extreme Scale Design"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/website/extreme-scale/Extreme3.png"
        alt="Extreme Scale Design"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width video-container">
      <video autoplay loop muted playsinline>
        <source src="/website/extreme-scale/Extreme6.mov" />
      </video>
    </div>

    <div class="project-image full-width">
      <img
        src="/website/extreme-scale/Extreme4.png"
        alt="Extreme Scale Design"
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
    margin-left: calc(-1 * variable.$spacing-md);
    margin-right: calc(-1 * variable.$spacing-md);
    width: calc(100% + 2 * variable.$spacing-md);
  }

  img,
  video {
    width: 100%;
    height: auto;

    @include mixins.shadow(light);
    @include mixins.transition(transform, filter);

    &:hover {
      transform: scale(1.02);
      filter: brightness(1.05);
    }
  }
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
