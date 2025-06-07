<template>
  <div class="project-content">
    <h1>About Me</h1>
    <div>
      <p>
        Hello! My name is Chichi Zhao (she/her) and welcome to my site. I am a
        visual designer based in both New York City and Shanghai.
      </p>

      <p style="margin-top: 30px">
        Chichi Zhao is a senior at Parsons School of Design, majoring
        Communication Design and minoring Data Visualization. Chichi cofounded
        the design studio: “World of Brain” in Shanghai, China.
      </p>

      <p style="margin-top: 30px">
        Questioning stereotypes that persist in today’s society, many of my
        works reflect on those social phenomenons that are either being
        overlooked or decayed. To provide my own voice, I bring in my cultural
        background as a Chinese designer, and my interests in human health and
        nature. My eclectic devotion in graphic books, printing and typography
        becomes a visually appealing outcome of self-expression and a way of
        communicating with the public.
      </p>

      <p style="margin-top: 30px">
        Simplicity and bold colors, along with digital media, help direct my
        aesthetics in work; but also provide alternatives to achieve something
        beyond traditional graphic design.
      </p>

      <p style="margin-top: 30px">
        Beyond doing design stuff,I enjoy gaming, cooking, and travelling.
      </p>
    </div>
    <div v-if="aboutContent.image" class="project-image">
      <img :src="aboutContent.image" :alt="aboutContent.title" />
    </div>
  </div>
</template>

<script setup>
const aboutContent = {
  id: "about",
  title: "About Me",

  image: "/placeholder.jpg?height=400&width=400",
};
</script>
