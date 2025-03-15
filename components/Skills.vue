<template>
  <div id="skills-container">
    <h3># skills.txt</h3>
    <br>
    <section>
      <h4>[Languages]</h4>
      <br>
      <ul>
        <li v-for="(language, languageIndex) in skills.languages" :key="languageIndex">
          <span>- {{ language.name }} ({{ language.expYears }} years) - [{{ language.status }}]</span>
        </li>
      </ul>
    </section>
    <br>
    <section>
      <h4>[Frontend]</h4>
      <br>
      <ul>
        <li v-for="(front, frontIndex) in skills.frontend" :key="frontIndex">
          <span>- {{ front.name }} ({{ front.expYears }} years) - [{{ front.status }}]</span>
        </li>
      </ul>
    </section>
    <br>
    <section>
      <h4>[Backend]</h4>
      <br>
      <ul>
        <li v-for="(back, backIndex) in skills.backend" :key="backIndex">
          <span>- {{ back.name }} ({{ back.expYears }} years) - [{{ back.status }}]</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { useSkillsStore } from '#imports'

export default {
  name: 'Skills',
  computed: {
    skills() {
      return useSkillsStore().$state;
    }
  }
}
</script>

<style lang="scss" scoped>

#skills-container {
  padding: 1.2rem 2.4rem;
  font-family: "Menlo", "Consolas", "Monaco", "DejaVu Sans Mono", "Liberation Mono", monospace;

  h3 {
    font-size: 1.8rem;
    line-height: 2.7rem;
    font-weight: 450;
    color: var(--comment-light-color);
  }

  section {
    h4 {
      color: var(--success-color);
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        font-size: 1.6rem;
        line-height: 2.7rem;
        color: var(--text-light-color);
      }
    }
  }
}

</style>