<template>
  <div class="project-content">
    <ProjectHeader
      title="American Chinese (Restaurant)"
      type="PUBLICATION / POSTER"
      date="Apr. 2023 - Apr. 2025"
    />

    <div class="project-image full-width">
      <img
        src="/publication/american-chinese/Restaurant1.jpg"
        alt="American Chinese Restaurant"
      />
    </div>

    <div class="project-section intro-section">
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant2.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="text-container">
        <p>
          Many Chinese restaurants in NYC first impressed me with those 80's
          old-style because the owners started their business for survival and
          adapted the flavor to cater to American tastes. Around the topic of
          "American Chinese Restaurant", I conducted first-hand research and
          interviews with my ABC (American-born Chinese) friends. Through the
          investigation, I found that most Americans have stamped Chinese food
          as "cheap stuff" since takeout boxes, posters, and even menus were
          designed quickly and outdated. The font use and design aesthetic even
          lack reference to authentic Chinese culture. This project aims to show
          different aspects of Chinese restaurant stereotypes.
        </p>
      </div>
    </div>

    <div class="project-image-row" style="margin-bottom: 20px">
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant3.jpg"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant4.jpg"
          alt="American Chinese Restaurant"
        />
      </div>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant7.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant11.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
    </div>

    <div class="project-image-row three-images">
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant5.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant6.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant8.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant9.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/Restaurant10.JPG"
          alt="American Chinese Restaurant"
        />
      </div>
    </div>

    <div class="project-description">
      <p>
        The graphic book will function as sarcasm to challenge the prejudiced
        attitude towards the Chinese community and culture, while the layout and
        design of the collage zine refer to some of the stereotyped styles.
        Being influenced by Asian Hate, many western people's impression about
        China are turning negatively. So I hope my book can be a medium to
        change their stereotypical mind about Chinese culture, food and
        community.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/publication/american-chinese/Restaurant12.jpg"
        alt="American Chinese Restaurant"
      />
    </div>

    <div class="project-description">
      <p>
        This project extended this year into an exploration of the visual and
        cultural identity of Chinatowns through a series of posters and design
        experiments based on restaurant signage across Boston, San Francisco,
        and New York—three of the most prominent Chinatowns in the United
        States.
      </p>
      <p>
        I used field documentation and typographic observation as a starting
        point for visual reinterpretation. Through abstraction, remixing, and
        deconstruction, each poster investigates how signage reflects both
        cultural expression and cultural distortion. These visuals unpack how
        design choices reinforce or challenge Western expectations of
        "Chineseness."
      </p>
      <p>
        By comparing and reimagining signage across these three cities, the
        project reveals patterns, contradictions, and tensions between
        authenticity, appropriation, and adaptation. Mapping Out Chinatown is
        ultimately a visual reflection on how design shapes the way Chinese
        culture is seen, sold, and experienced in the American urban landscape.
      </p>
    </div>

    <div class="project-image full-width">
      <img src="/publication/american-chinese/map13.jpg" alt="Chinatown Map" />
    </div>

    <div class="project-image-row">
      <div class="image-container">
        <img
          src="/publication/american-chinese/map14.jpg"
          alt="Chinatown Map"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/map15.jpeg"
          alt="Chinatown Map"
        />
      </div>
    </div>

    <div class="project-image-row no-gap">
      <div class="image-container">
        <img
          src="/publication/american-chinese/map16.jpg"
          alt="Chinatown Map"
        />
      </div>
      <div class="image-container">
        <img
          src="/publication/american-chinese/map17.jpg"
          alt="Chinatown Map"
        />
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

.project-section {
  margin: variable.$spacing-xl 0;

  &.intro-section {
    display: flex;
    align-items: center;
    gap: 20px;

    .image-container {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .text-container {
      flex: 1;

      p {
        line-height: 1.6;
      }
    }

    @include mixins.respond-to(medium) {
      flex-direction: column;

      .image-container,
      .text-container {
        width: 100%;
      }

      .text-container {
        margin-top: variable.$spacing-md;
      }
    }
  }
}

.project-image-row {
  display: flex;
  gap: 0;

  .image-container {
    flex: 1;
    line-height: 0;

    img {
      width: 100%;
      height: auto;
      display: block;

      @include mixins.shadow(light);
      @include mixins.transition(box-shadow, transform);

      &:hover {
        @include mixins.shadow(medium);
        transform: scale(1.01);
      }
    }
  }

  &.three-images {
    .image-container {
      flex: 1;
    }
  }

  &.no-gap {
    .image-container img {
      border-radius: 0;
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

    &.three-images {
      .image-container {
        width: 100%;
      }
    }
  }
}
</style>
