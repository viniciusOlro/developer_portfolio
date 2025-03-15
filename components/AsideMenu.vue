<template>
  <aside>
    <header>
      <RiArrowDownSFill />
      <h2>{{ title }}</h2>
    </header>
    <slot name="content" />
  </aside>
</template>

<script>
import { RiArrowDownSFill } from 'vue-remix-icons'
export default {
  name: 'AsideMenu',
  components: {
    RiArrowDownSFill
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  width: 17.45%;
  min-width: 20rem;
  max-width: 30rem;
  border-right: .1rem solid var(--secondary-color);
  overflow-y: auto;
  overflow-x: hidden;

  header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 2.4rem;
    color: var(--text-light-color);
    border-bottom: .1rem solid var(--secondary-color);

    svg {
      width: 1.6rem;
      height: 1.6rem;
      cursor: pointer;
    }

    h2 {
      font-weight: 450;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
}
</style>