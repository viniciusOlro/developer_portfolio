<template>
  <Comment title="bio">
    <template v-slot:message>
      Hello to everyone reading this portfolio! I am Vinícius de Oliveira Rodrigues, a fullstack web developer with a
      focus on frontend, but also a big lover of my wife, my five cats, and my soccer team, Grêmio!
      <br>
      I’ve always been a mix of interests and curiosities, and I will try to explain chronologically how I got here.
      Like everyone, everything starts in childhood. I was always a child connected to sports and physical activities,
      but I became completely fascinated by the great machine that was gifted to my sister on her 15th birthday. I
      remember, as if it were today, the sounds of Windows Vista, MSN, how important Orkut was in her and other
      teenagers' lives. All of that was incredible to the eyes of a child about six years old. It didn't take long
      before I also demanded my space in front of the computer.
      <br>
      A short time later, maybe one or two years at most, I received from my father what was probably the best gift of
      my life. My first computer was a turning point in my journey. Having the opportunity to explore that machine on my
      own was a unique feeling. Everything had great meaning to me. From turning on the computer, creating my profile on
      the operating system, accessing the internet, and researching various topics—I wanted to know everything about
      that machine and the universe that unfolded before my eyes.
      <br>
      A few years later, already over ten years old, I had my first contact with website development without even
      realizing it. It was something simple, but it was very special to me! I loved writing blogs about topics that
      piqued my interest. I remember dedicating a considerable amount of time to writing a blog about dinosaurs and
      having my own Flash games blog. One of the processes that fascinated me the most was manipulating the HTML tags
      and tweaking the CSS on my blog, even if only in a basic way. The other part was registering and sharing things
      that I thought were super cool!
      <br>
      Over time, these hobbies faded away, and I began to dedicate more time to my studies. Around the age of 13, I
      stopped playing soccer—a sport that had accompanied me for many years—and also significantly reduced my time in
      front of the computer to create content. My routine focused on studying, doing schoolwork, and diving deep into
      subjects like history and geopolitics. During this period, I dedicated myself to being accepted into the Federal
      Institute of Canoas (IFRS Canoas), a goal I achieved through effort. However, the commuting logistics and the lack
      of adaptation to the environment led me to decide to leave and continue my studies at a public school in my city,
      where most of my childhood friends were.
      <br>
      I chose to pursue high school integrated with a technical course in Administration because subjects related to
      finance and economics attracted me in some way. I especially enjoyed math, history, and philosophy classes. During
      the first two years of high school, I considered pursuing an academic career in the humanities or social sciences
      but realized that the classroom environment did not match my more introverted personality.
      <br>
      In 2019, I started researching the job market and noticed how much the tech industry was expanding. Since I
      attended high school in the afternoon, I decided to fill my mornings with a technical course in Internet
      Computing. This decision was a milestone in my life. I learned a lot in an intense and immersive way, with
      teachers who not only taught theory and practice but also shared their passion for programming. I will never
      forget the feeling of writing my first variables in Java or understanding an "if else" for the first time and
      being amazed by its endless possibilities.
      <br>
      In 2020, the world stopped. The Covid-19 pandemic completely changed my routine. My technical course and high
      school classes were interrupted. Despite the chaos, that year was crucial for my development. A few months later,
      my technical course resumed remotely, and fortunately, the quality of the classes remained high thanks to
      excellent teachers. On the other hand, high school took longer to resume, and that period of uncertainty left
      marks on me that, to this day, appear in dreams and nightmares about not having fulfilled my obligations.
      <br>
      Another important event in 2020 was meeting, through Tinder, the woman who would become the love of my life:
      Suelen de Oliveira Marques. We built a solid friendship that soon evolved into a relationship full of
      companionship and shared dreams. I dedicate this paragraph to her—a smart, dreamy, and faithful woman.
      <br>
      From 2021 onwards, my life took a definitive direction. I built my family (currently consisting of myself, my
      wife, and our five cats), moved out of my parents' house, changed cities, and worked in various fields to support
      myself. In 2022, I started as an intern at a major company in the educational sector, where I was hired after six
      months and grew significantly as a professional developer. In 2024, I resumed my undergraduate studies, continuing
      my academic and professional improvement.
      <br>
      Today, I remain dedicated to programming and building my story—one line of code at a time.
    </template>
  </Comment>
</template>

<script>

import Comment from './Comment.vue';

export default {
  name: 'Bio',
  components: {
    Comment
  }
}
</script>
