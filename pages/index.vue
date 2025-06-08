<template>
  <div class="about-page">
    <div class="about-header">
      <h1>XURU (CHICHI) ZHAO</h1>
    </div>
    <div class="about-content">
      <div class="about-image">
        <img src="/about-me/me.jpg" alt="Chichi Zhao" />

        <div class="download-list">
          <a>Download CV</a>
          <a>Download Portfolio</a>
        </div>
      </div>
      <div class="about-text">
        <div class="intro-section">
          <p>
            Hello! My name is Chichi Zhao (she/her) and welcome to my site. I am
            a visual designer based in Boston.
          </p>

          <p>
            I recently earned my MFA in Graphic Design from Boston University,
            following a BFA in Communication Design from Parsons School of
            Design. My work often reflect on overlooked social phenomena and
            challenge stereotypes through a culturally informed lens.
          </p>

          <p>
            Drawing from my Chinese heritage and personal interests in health
            and nature, I bring a distinctive perspective to my design practice.
            My passion for publications, typography and website design fuels my
            exploration of self-expression and public communication. My
            aesthetic blends complexity with bold colors and digital media,
            creating alternatives that push beyond traditional graphic design.
          </p>

          <p>Outside the studio, I enjoy gaming and traveling.</p>
        </div>
      </div>
    </div>
    <div class="about-content">
      <div class="education-section">
        <h2>EDUCATION</h2>
        <div class="education-item">
          <div class="date">Sep. 2023 - May 2025</div>
          <div class="school">Boston University,</div>
          <div class="degree">MFA in Graphic Design</div>
        </div>

        <div class="education-item">
          <div class="date">Sep. 2019 - May 2023</div>
          <div class="school">Parsons School of Design, The New School</div>
          <div class="degree">BFA in Communication Design</div>
        </div>
      </div>

      <div class="contact-section">
        <h2>CONTACT</h2>
        <p>
          I am open for both full time and freelance work now, so feel free to
          reach out for that, or if you just wanna say what's up.
        </p>
        <div class="contact-links">
          <div>
            Email:
            <a href="mailto:xuruz111@gmail.com">xuruz111@gmail.com</a>
          </div>
          <div>
            Instagram:
            <a href="https://instagram.com/chiiiz_art" target="_blank"
              >@chiiiz_cc</a
            >
          </div>
          <div>
            Website:
            <a href="https://chichizhao.com" target="_blank">chichizhao.com</a>
          </div>
          <div>
            Linkedin:
            <a href="https://www.linkedin.com/in/xuruzhao/" target="_blank"
              >linkedin.com/in/xuruzhao</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: variable.$spacing-xl;

  .about-header {
    margin-bottom: variable.$spacing-xl;

    h1 {
      font-size: variable.$font-size-xxl;
      font-weight: variable.$font-weight-bold;
      color: variable.$text-color;
    }
  }

  .about-content {
    @include mixins.flex(row, flex-start, flex-start);
    gap: variable.$spacing-xl;

    .about-image {
      flex: 0 0 40%;

      img {
        width: 100%;
        height: auto;
      }

      .download-list {
        margin-top: variable.$spacing-md;
        display: flex;
        flex-direction: column;

        a {
          margin-bottom: variable.$spacing-sm;
          text-decoration: underline;
          cursor: pointer;
          color: variable.$primary-color;
        }
      }
    }

    .about-text {
      flex: 1;

      p {
        margin-bottom: variable.$spacing-lg;
        line-height: 1.6;
      }
    }

    .education-section {
      flex: 40% 0 0;
      .education-item {
        margin-bottom: variable.$spacing-lg;

        .date {
          color: variable.$text-color;
          margin-bottom: variable.$spacing-xs;
        }

        .school {
          font-weight: variable.$font-weight-medium;
          margin-bottom: variable.$spacing-xs;
        }

        .degree {
          color: variable.$text-color;
        }
      }
    }

    .education-section,
    .contact-section {
      h2 {
        font-size: variable.$font-size-lg;
        font-weight: variable.$font-weight-bold;
      }
    }

    .contact-section {
      .contact-links {
        margin-top: variable.$spacing-md;

        div {
          margin-bottom: variable.$spacing-sm;
        }

        a {
          color: variable.$primary-color;
          text-decoration: none;
          @include mixins.transition(color);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @include mixins.respond-to(medium) {
    padding: variable.$spacing-md;

    .about-content {
      flex-direction: column;

      .about-image {
        flex: 0 0 100%;
        margin-bottom: variable.$spacing-xl;
      }
    }
  }
}
</style>
