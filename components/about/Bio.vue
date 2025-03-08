<template>
  <Comment title="bio">
    <template v-slot:message>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officia distinctio repellat, placeat blanditiis quo ad deserunt nulla pariatur maxime unde deleniti similique porro, quibusdam laudantium aut? Sunt, vero atque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officia distinctio repellat, placeat blanditiis quo ad deserunt nulla pariatur maxime unde deleniti similique porro, quibusdam laudantium aut? Sunt, vero atque!
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
