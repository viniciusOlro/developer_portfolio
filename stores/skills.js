import { RiJavascriptFill, RiCodeLine, RiPhpFill, RiJavaFill, RiVuejsFill, RiReactjsFill, RiCss3Fill, RiDatabase2Fill } from 'vue-remix-icons'

export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    languages: [
      {
        name: 'JavaScript',
        expYears: 5,
        group: 'languages',
        status: 'advancedKnowledge',
        icon: RiJavascriptFill
      },
      {
        name: 'Python',
        expYears: 2,
        group: 'languages',
        status: 'intermediateKnowledge',
        icon: RiCodeLine
      },
      {
        name: 'PHP',
        expYears: 1,
        group: 'languages',
        status: 'basicContact',
        icon: RiPhpFill
      },
      {
        name: 'Java',
        expYears: 1,
        group: 'languages',
        status: 'basicContact',
        icon: RiJavaFill
      },
      {
        name: 'Kotlin',
        expYears: 1,
        group: 'languages',
        status: 'basicContact',
        icon: RiCodeLine
      }
    ],
    frontend: [
      {
        name: 'Vue.js',
        expYears: 5,
        status: 'advancedKnowledge',
        icon: RiVuejsFill
      },
      {
        name: 'Vuetify',
        expYears: 5,
        status: 'advancedKnowledge',
        icon: RiVuejsFill
      },
      {
        name: 'Nuxt.js',
        expYears: 5,
        status: 'advancedKnowledge',
        icon: RiVuejsFill
      },
      {
        name: 'SCSS',
        expYears: 2,
        status: 'intermediateKnowledge',
        icon: RiCss3Fill
      },
      {
        name: 'React',
        expYears: 2,
        status: 'currentlyLearning',
        icon: RiReactjsFill
      },
    ],
    backend: [
      {
        name: 'Node.js',
        expYears: 5,
        status: 'intermediateKnowledge',
        icon: RiJavascriptFill
      },
      {
        name: 'Express.js',
        expYears: 5,
        status: 'advancedKnowledge',
        icon: RiJavascriptFill
      },
      {
        name: 'Java Spring Boot',
        expYears: 1,
        status: 'basicContact',
        icon: RiJavaFill
      },
      {
        name: 'PostgreSQL',
        expYears: 3,
        status: 'intermediateKnowledge',
        icon: RiDatabase2Fill
      },
      {
        name: 'MongoDB',
        expYears: 1,
        status: 'basicContact',
        icon: RiDatabase2Fill
      },
    ]
  }),
  actions: {
    //
  }
})