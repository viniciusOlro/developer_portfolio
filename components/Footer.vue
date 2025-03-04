<template>
  <footer>
    <div>
      <span>
        find me in:
      </span>
      <div class="icon" @click="onLinkedinClick">
        <RiLinkedinFill />
      </div>
    </div>
    <div @click="onGithubClick">
      <span>
        @vinicius_olro
      </span>
      <RiGithubFill />
    </div>
  </footer>
</template>

<script>
import { RiLinkedinFill, RiGithubFill } from 'vue-remix-icons';
export default {
  name: 'Footer',
  components: {
    RiLinkedinFill,
    RiGithubFill
  },
  methods: {
    onLinkedinClick() {
      console.log('Enviar para Likedin em nova aba.');
      // window.open('', '_blank');
    },
    onGithubClick() {
      window.open('https://github.com/viniciusOlro', '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>

footer {
  height: 5.6rem;
  border-top: .1rem solid var(--secondary-color);
  display: flex;
  justify-content: space-between;
  color: var(--comment-color);

  div:first-child {
    display: flex;
    border-right: .1rem solid var(--secondary-color);

    span {
      border-right: .1rem solid var(--secondary-color);
      padding: 0 2.2rem;
      display: flex;
      align-items: center;
    }
    
    .icon {
      padding: 0 1.6rem;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 0 2.2rem;
    border-left: .1rem solid var(--secondary-color);
    cursor: pointer;
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
}

</style>