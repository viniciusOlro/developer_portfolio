export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    languages: [
      {
        name: 'JavaScript',
        expYears: 5,
        group: 'languages',
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
    ],
    frontend: [
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
    ],
    backend: [
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
  }),
  actions: {
    //
  }
})