<template>
  <div class="project-content">
    <h1>UniMate</h1>

    <div class="project-meta">
      <div class="meta-item">
        <h3>Type</h3>
        <p>Web Design</p>
        <p>UI/UX</p>
        <p>Branding</p>
      </div>
      <div class="meta-item">
        <h3>Date</h3>
        <p>May 2024 to Present</p>
      </div>
    </div>

    <div class="project-image full-width">
      <img src="/website/unimate/UniMate1.jpg" alt="UniMate Platform" />
    </div>

    <div class="project-description">
      <p>
        A web platform that connects prospective international students with a
        supportive community of mentors to access reliable and relevant
        information about studying abroad.
      </p>
      <p>
        Visit the website
        <a href="https://unimate.com.vn/" target="_blank" class="highlight-link"
          ><strong>here</strong></a
        >
      </p>
      <div>
        Team members:
        <ul>
          <li>Chichi Zhao, UI/UX designer</li>
          <li>Nhan Ton, Innovator/Product Manager/Product Owner</li>
          <li>Minh Dinh, Technical Lead/Scrum Master</li>
          <li>Nguyen Le, Technical Developers</li>
          <li>Hoang Nguyen, Technical Developers</li>
        </ul>
      </div>
    </div>

    <div class="project-image full-width">
      <img src="/website/unimate/UniMate2.png" alt="UniMate Design" />
    </div>

    <div class="project-image full-width">
      <img src="/website/unimate/UniMate3.jpg" alt="UniMate Interface" />
    </div>

    <div class="project-image full-width">
      <img src="/website/unimate/Poster-01.jpg" alt="UniMate Poster" />
    </div>

    <div class="project-image full-width">
      <img src="/website/unimate/Poster-02.jpg" alt="UniMate Poster" />
    </div>

    <div class="project-description">
      <p>
        <strong>Timeline:</strong> Ongoing | Beta Testing (Jun–Aug 2024), Pilot
        Testing (Sep–Nov 2024)
      </p>

      <h3>🔹 Progress Highlights</h3>
      <p><strong>Spring Phase (SRFS 3):</strong></p>
      <ul>
        <li>Launched campaign operations — platform is ready to go live</li>
        <li>
          Designed session decks for each mentorship track's first meeting
        </li>
        <li>
          Social media strategy led by Hải Anh (lead), Quỳnh (Threads), and
          Phương Anh (Uni-Meet Friends Group)
        </li>
      </ul>
      <p><strong>Community Growth:</strong></p>
      <ul>
        <li>Mentors onboarded: 4</li>
        <li>Mentees signed up: 28</li>
        <li>Established a functional mentor-mentee ratio of 1:8</li>
      </ul>

      <h3>🔸 Current Focus</h3>
      <p><strong>Partnership Development:</strong></p>
      <ul>
        <li>Duolingo, AECC — awaiting responses</li>
        <li>News feature outreach (ghosted, but we're persistent 😅)</li>
      </ul>
      <p><strong>Content & Community:</strong></p>
      <ul>
        <li>Collecting Uni-Meet Friends submissions (Deadline: April 30)</li>
        <li>Finalizing reminder emails to engage inactive mentors</li>
        <li>Outlining a detailed timeline for upcoming social media content</li>
      </ul>

      <h3>▶ Next Steps</h3>
      <ul>
        <li>Begin influencer outreach and booking in the next sprint</li>
        <li>Prioritize securing media coverage</li>
        <li>
          Run final dry tests and host first sessions for each mentorship track
        </li>
        <li>Continue refining mentor-mentee engagement workflows</li>
      </ul>
    </div>

    <div class="project-image full-width">
      <img
        src="/website/unimate/UniMate4.jpg"
        alt="UniMate Platform Features"
      />
    </div>

    <div class="project-description">
      <h3>Recognition & Incentives</h3>
      <p>
        At UniMate, we celebrate our mentors through a milestone-based
        certificate program, recognizing achievements such as completing the
        first mentorship session, 10 or 25 sessions, being named "Mentor of the
        Month," or receiving the most positive review.
      </p>
      <p>
        To further incentivize participation, we offer exclusive merchandise
        like hoodies and stickers as rewards. For outreach and recruitment
        activities — including school seminars and campus events — we designed a
        branded UniMate standee to boost visibility and attract new users.
        Together, these initiatives help build mentor pride, community
        engagement, and broader program awareness.
      </p>
    </div>

    <div class="project-image full-width">
      <img
        src="/website/unimate/UniMate8.png"
        alt="UniMate Recognition Program"
      />
    </div>

    <div class="project-image full-width">
      <img
        src="/website/unimate/UniMate9.png"
        alt="UniMate Platform Interface"
      />
    </div>

    <div class="project-image full-width video-container">
      <video autoplay loop muted playsinline>
        <source
          src="/website/unimate/UniMate_Demo.mov"
          type="video/quicktime"
        />
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
      margin-bottom: variable.$spacing-xs;

      &:last-child {
        margin-bottom: 0;
      }
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

  h3 {
    font-size: variable.$font-size-lg;
    font-weight: variable.$font-weight-bold;
    margin: variable.$spacing-lg 0 variable.$spacing-sm;
  }

  ul {
    list-style-type: disc;
    margin-left: variable.$spacing-lg;
    margin-bottom: variable.$spacing-md;

    li {
      margin-bottom: variable.$spacing-xs;
    }
  }

  .highlight-link {
    color: variable.$primary-color;
    text-decoration: underline;
    font-weight: variable.$font-weight-bold;

    &:hover {
      @include mixins.darken(variable.$primary-color, 10%);
    }
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
    border-radius: 4px;
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
