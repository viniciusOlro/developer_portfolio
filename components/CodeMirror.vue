<template>
  <div class="responsive-box">
    <codemirror v-model="code" class="cool-glow-editor" placeholder="Code goes here..." :style="{ height: '100%', width: '100%' }"
      :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady"
      @change="log('change', $event)" @focus="log('focus', $event)" @blur="log('blur', $event)" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView } from '@codemirror/view'

export default defineComponent({
  components: {
    Codemirror
  },
  setup() {
    const code = ref(`console.log('Hello, world!')`)
    const extensions = [javascript(), oneDark, EditorView.theme({
      '.cm-gutters': { display: 'none' }
    })]

    // Codemirror EditorView instance ref
    const view = shallowRef()
    const handleReady = (payload) => {
      view.value = payload.view
    }

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state
      const ranges = state.selection.ranges
      const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
      const cursor = ranges[0].anchor
      const length = state.doc.length
      const lines = state.doc.lines
      // more state info ...
      // return ...
    }

    return {
      code,
      extensions,
      handleReady,
      log: console.log
    }
  }
})
</script>

<style scoped>
.responsive-box {
  width: 100%;
  min-width: 560px;
  max-width: 100%;
  height: 18rem;
  box-sizing: border-box;
  border-radius: 8px;
}

@media (max-width: 670px) {
  .responsive-box {
    min-width: calc(100vw - 3.2rem - 4.8rem);
  }
}

.cool-glow-editor ::v-deep(.cm-editor) {
  background: var(--code-snippet-bg-color) !important;
  border-radius: 8px;
  border: 1px solid var(--secondary-color);
}

.cool-glow-editor ::v-deep(.cm-content) {
  color: #00eaff !important;
  font-family: "Fira Code", monospace;
}

.cool-glow-editor ::v-deep(.cm-gutters) {
  background: #0d1117 !important;
  border-right: 1px solid rgba(0, 255, 255, 0.2);
}

.cool-glow-editor ::v-deep(.cm-line::selection) {
  background: rgba(0, 255, 255, 0.2) !important;
}

.cool-glow-editor ::v-deep(.cm-activeLine) {
  background: rgba(0, 255, 255, 0.1) !important;
}

.cool-glow-editor ::v-deep(.cm-cursor) {
  border-left: 2px solid #00eaff !important;
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  0% {
    border-left-color: #00eaff;
  }

  100% {
    border-left-color: #00ffff;
  }
}
</style>
