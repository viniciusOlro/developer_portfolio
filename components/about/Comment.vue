<template>
  <div id="comment-container">
    <div id="lines-counter">
      <span v-for="line in linesCounter" :key="line">
        {{ line }}
      </span>
    </div>
    <div id="comment-content">
      <span>/**</span>
      <h3>** {{ title }}</h3>
      <p id="comment-content-message" :style="`--asterisk-content: '${asterisksLineCounter}'`">
        <slot name="message" />
      </p>
      <span>*/</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      linesCounter: 0
    }
  },
  computed: {
    asterisksLineCounter() {
      return "* ".repeat(this.linesCounter).trim()
    }
  },
  methods: {
    updateLinesCount() {
      const p = document.getElementById('comment-content-message')
      const style = window.getComputedStyle(p, null).getPropertyValue('font-size')
      const fontSize = parseFloat(style)
      const lineHeight = Math.floor(fontSize * 1.5)
      const height = p.clientHeight
      this.linesCounter = Math.ceil(height / lineHeight)
    }
  },
  mounted() {
    this.updateLinesCount()
    window.addEventListener("resize", this.updateLinesCount)
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateLinesCount)
  }
}
</script>

<style lang="scss" scoped>
#comment-container {
  display: flex;
  gap: 4rem;
  color: var(--comment-light-color);
  font-size: 1.8rem;
  line-height: 2.7rem;

  h3 {
    font-size: 1.8rem;
    line-height: 2.7rem;
    font-weight: normal;
    color: var(--success-color);
  }

  #lines-counter {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  #comment-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    #comment-content-message {
      white-space: pre-wrap;
      position: relative;
      padding-left: 2ch;
      display: block;
      overflow: auto;

      &::before,
      &::after {
        content: var(--asterisk-content, "* * *");
        position: absolute;
        width: 0;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>