<template>
  <aside :class="{ 'is-expanded': isExpanded }">
    <header>
      <i class="ri-arrow-down-s-line" :class="['arrow', { 'is-expanded': isExpanded }]" @click="isExpanded = !isExpanded" />
      <transition name="fade" mode="out-in">
        <h2 v-if="isExpanded">{{ title }}</h2>
      </transition>
    </header>
    <transition name="fade" mode="out-in">
      <slot v-if="isExpanded" name="content" />
    </transition>
  </aside>
</template>

<script>
export default {
  name: 'AsideMenu',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: true
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  width: 5rem;
  height: 100%;
  border-right: .1rem solid var(--secondary-color);
  overflow-y: auto;
  overflow-x: hidden;
  transition: ease-in-out 1.5s all;

  @media (max-width: 915px) {
    max-width: none;
  }

  &.is-expanded {
    width: 100%;

    header {
      justify-content: flex-start;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    gap: 1.2rem;
    padding: 0 2.4rem;
    color: var(--text-light-color);
    border-bottom: .1rem solid var(--secondary-color);

    .arrow {
      font-size: 2rem;
      cursor: pointer;
      transform: rotate(-90deg);
      transition: transform .5s ease-in-out;
      &.is-expanded {
        transform: rotate(0deg);
      }
    }

    h2 {
      font-weight: 450;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
}
</style>