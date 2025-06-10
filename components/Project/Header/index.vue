<template>
  <div class="project-header">
    <h1>{{ title }}</h1>
    <div class="meta-info">
      <div class="type">
        <div class="type-tag">TYPE</div>
        <div class="">
          {{ type }}
        </div>
      </div>
      <div class="date">
        <div class="type-tag">DATE</div>
        <div class="date-info">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.project-header {
  h1 {
    margin: 0 0;
    color: #000;
    font-size: 3.4375rem;
    line-height: 3.4375rem;
    font-style: normal;
    font-weight: 400;
    position: relative;
    padding-bottom: 27px;
    &::after {
      position: absolute;
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #000;
      bottom: 0px;
      left: 0;
    }
  }

  .meta-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    height: 44px;
    position: relative;
    &::after {
      position: absolute;
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #000;
      bottom: -2px;
      left: 0;
    }

    .type,
    .date {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 344px;
    }

    .date {
      display: flex;
      align-items: center;
    }

    .type-tag {
      background: #000;
      color: #fff;
      padding: 0.25rem 0.75rem;
      border-radius: 200px;
      text-transform: uppercase;
    }

    .date-info {
      color: #666;
      text-transform: uppercase;
    }
  }
}

@include mixins.respond-to(medium) {
  .project-header {
    .meta-info {
      flex-direction: column;
      width: 100%;
      .type,
      .date {
        width: 100%;
      }
    }
  }
}
</style>
