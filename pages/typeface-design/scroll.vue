<template>
  <div class="project-content">
    <ProjectHeader title="SCROLL(S)" type="Exhibition" date="Apr. 2025" />

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/typeface-design/scroll/Scrolls1.jpg"
        alt="SCROLL(S) Exhibition"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        To<span class="scroll-text"> scroll</span> is to move forward, navigate,
        and traverse a space. The 2025 Boston University Graphic Design MFA
        Exhibition, <span class="scroll-text">Scroll(s)</span>, explores how we
        engage with information, craft, and form. The exhibition's title is
        embedded with multiple meanings: from the ancient tradition of
        <span class="scroll-text">scrolls</span> as vehicles for recordkeeping
        and storytelling to the contemporary act of
        <span class="scroll-text">scrolling</span> through digital
        interfaces—our primary mode of accessing and processing vast amounts of
        information is intimately tied to the term.
      </p>
      <p>
        Exhibition by 2025 BUGD MFA<br />
        <span class="scroll-text">Scroll(s)</span> Typeface by Amanda Mundy,
        Lucy, Xuru Zhao, and Xinran Wang<br />
        Branding/Design by BUGD MFA Visual Identity Team<br />
        Motion/Website by BUGD MFA MotionWeb Team<br />
        Photography by BUGD MFA Documentation Team<br />
        Budget/Purchase by BUGD MFA Logistic Team
      </p>
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/typeface-design/scroll/Scroll2.jpg"
        alt="SCROLL(S) Exhibition Display"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/typeface-design/scroll/Scroll3.jpg"
        alt="SCROLL(S) Exhibition Space"
        loading="lazy"
      />
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/typeface-design/scroll/Scroll4.jpg"
        alt="SCROLL(S) Exhibition Installation"
        loading="lazy"
      />
    </div>

    <div class="project-description">
      <p>
        Within this framework, <span class="scroll-text">Scroll(s)</span> serves
        as both noun and verb. It refers to artifacts-documents that preserve
        thought and intent-but also to the action of moving through knowledge,
        ideas, and experiences. The twenty Graphic Design MFA candidates
        featured in this exhibition each chart their own paths through the
        field, navigating research and practice in ways that are simultaneously
        independent and interconnected. The pluralizing in the title
        acknowledges this multiplicity, reflecting a group of designers working
        in tandem, yet each with their own methodologies, Inquiries, and
        outcomes. The time spent in the MFA program can be understood as an
        ever-evolving <span class="scroll-text">scroll</span>-one that unspools
        through a continuous stream of prompts and responses, design problems,
        and inventive solutions. Each iteration builds upon the last, each
        critique opens new possibilities, and each unexpected challenge-whether
        a printer error or a misaligned grid-becomes an opportunity for
        discovery. Like the motion of a <span class="scroll-text">scroll</span>,
        learning in this space is fluid, recursive, and full of momentum. The
        projects presented here are not conclusions but moments of clarity in an
        ongoing exploration-waypoints in a larger trajectory of lifelong design
        inquiry.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        v-fullscreen-image
        src="/typeface-design/scroll/Typeface1.png"
        alt="SCROLL(S) Typeface Design"
        loading="lazy"
      />
    </div>

    <div class="project-images grid-2">
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/typeface-design/scroll/Typeface2.jpg"
          alt="SCROLL(S) Typeface Sample 1"
          loading="lazy"
        />
      </div>
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/typeface-design/scroll/Typeface3.jpg"
          alt="SCROLL(S) Typeface Sample 2"
          loading="lazy"
        />
      </div>
    </div>

    <div class="project-images grid-2">
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/typeface-design/scroll/Poster1.png"
          alt="SCROLL(S) Poster 1"
          loading="lazy"
        />
      </div>
      <div class="image-container">
        <img
          v-fullscreen-image
          src="/typeface-design/scroll/Poster2.png"
          alt="SCROLL(S) Poster 2"
          loading="lazy"
        />
      </div>
    </div>

    <div class="project-description">
      <p>
        <a href="/typeface-design/scroll/Scroll(s).otf" download
          >Download <span class="scroll-text">Scroll(s)</span> Typeface here</a
        >
      </p>
    </div>

    <div class="project-description">
      <p>
        Beyond its contemporary digital associations, the
        <span class="scroll-text">scroll</span> as a physical object has a deep
        historical lineage, used across civilizations as a tool for recording
        and disseminating knowledge. The transition from
        <span class="scroll-text">scroll</span> to codex to screen speaks to
        shifts not just in technology but in the ways we comprehend and
        encounter information. The designers in
        <span class="scroll-text">Scroll(s)</span> engage with this lineage-some
        questioning the interface of the book, others investigating typography,
        motion, interaction, and the porous border between print and digital
        spaces. Their work resists a singular definition of graphic design,
        instead embracing an open-ended and evolving discipline.
      </p>
    </div>

    <div class="project-image full-width video-container">
      <video autoplay loop muted playsinline>
        <source src="/typeface-design/scroll/Website.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="project-description">
      <p>
        Website coded by professor Halim Lee<br />

        <ProjectJumpButton url="https://bu-gd.github.io/scrolls" />
      </p>
    </div>

    <div class="project-description">
      <p>
        <span class="scroll-text">Scroll(s)</span> brings these investigations
        together in one space, inviting viewers to move through and engage with
        a collection of diverse ideas. As visitors navigate the work, the
        metaphor of <span class="scroll-text">scrolling</span> takes on new
        resonance-reminding us that to design is to move forward, to search, to
        question, and to continually reframe our understanding of the world.
      </p>
    </div>
  </div>
</template>

<script setup>
// 静态页面，无需动态数据获取
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Scrolls";
  src: url("/typeface-design/scroll/Scroll(s).otf") format("opentype");
}

.scroll-text {
  font-family: "Scrolls", sans-serif;
}

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
    img,
    video {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  img,
  video {
    @include mixins.shadow(light);
    @include mixins.transition(box-shadow);

    &:hover {
      @include mixins.shadow(medium);
    }
  }
}

.project-images {
  margin: variable.$spacing-lg 0;

  &.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: variable.$spacing-md;

    .image-container {
      img {
        width: 100%;
        height: auto;

        @include mixins.shadow(light);
        @include mixins.transition(box-shadow);

        &:hover {
          @include mixins.shadow(medium);
        }
      }
    }
  }
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

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
