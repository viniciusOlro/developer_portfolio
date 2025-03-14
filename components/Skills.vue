<template>
  <div id="skills-container">
    <h3># skills.txt</h3>
    <br>
    <section>
      <h4>[Languages]</h4>
      <br>
      <ul>
        <li v-for="(language, languageIndex) in languages" :key="languageIndex">
          <span>- {{ language.name }} ({{ language.expYears }} years) - [{{ language.status }}]</span>
        </li>
      </ul>
    </section>
    <br>
    <section>
      <h4>[Frontend]</h4>
      <br>
      <ul>
        <li v-for="(front, frontIndex) in frontend" :key="frontIndex">
          <span>- {{ front.name }} ({{ front.expYears }} years) - [{{ front.status }}]</span>
        </li>
      </ul>
    </section>
    <br>
    <section>
      <h4>[Backend]</h4>
      <br>
      <ul>
        <li v-for="(back, backIndex) in backend" :key="backIndex">
          <span>- {{ back.name }} ({{ back.expYears }} years) - [{{ back.status }}]</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  computed: {
    languages() {
      return [
        {
          name: 'JavaScript',
          expYears: 5,
          group: 'languages' ,
          status: 'advancedKnowledge'
        },
        {
          name: 'Python',
          expYears: 2,
          group: 'languages',
          status: 'intermediateKnowledge' 
        },
        {
          name: 'PHP',
          expYears: 1,
          group: 'languages',
          status: 'basicContact' 
        },
        {
          name: 'Java',
          expYears: 1,
          group: 'languages',
          status: 'basicContact' 
        },
        {
          name: 'Kotlin',
          expYears: 1,
          group: 'languages',
          status: 'basicContact'
        }
      ]
    },
    frontend() {
      return [
        {
          name: 'Vue.js',
          expYears: 5,
          status: 'advancedKnowledge'
        },
        {
          name: 'Vuetify',
          expYears: 5,
          status: 'advancedKnowledge'
        },
        {
          name: 'Nuxt.js',
          expYears: 5,
          status: 'advancedKnowledge'
        },
        {
          name: 'SCSS',
          expYears: 2,
          status: 'intermediateKnowledge'
        },
        {
          name: 'React',
          expYears: 2,
          status: 'currentlyLearning'
        },
      ]
    },
    backend() {
      return [
        {
          name: 'Node.js',
          expYears: 5,
          status: 'intermediateKnowledge'
        },
        {
          name: 'Express.js',
          expYears: 5,
          status: 'advancedKnowledge'
        },
        {
          name: 'Java Spring Boot',
          expYears: 1,
          status: 'basicContact'
        },
        {
          name: 'PostgreSQL',
          expYears: 3,
          status: 'intermediateKnowledge'
        },
        {
          name: 'MongoDB',
          expYears: 1,
          status: 'basicContact'
        },
      ]
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