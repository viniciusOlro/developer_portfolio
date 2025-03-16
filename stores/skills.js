import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    languages: [
      { name: 'JavaScript', expYears: 5, group: 'languages', status: 'advancedKnowledge', icon: 'ri-javascript-fill' },
      { name: 'Python', expYears: 2, group: 'languages', status: 'intermediateKnowledge', icon: 'ri-code-line' },
      { name: 'PHP', expYears: 1, group: 'languages', status: 'basicContact', icon: 'ri-php-fill' },
      { name: 'Java', expYears: 1, group: 'languages', status: 'basicContact', icon: 'ri-java-fill' },
      { name: 'Kotlin', expYears: 1, group: 'languages', status: 'basicContact', icon: 'ri-code-line' }
    ],
    frontend: [
      { name: 'Vue.js', expYears: 5, status: 'advancedKnowledge', icon: 'ri-vuejs-fill' },
      { name: 'Vuetify', expYears: 5, status: 'advancedKnowledge', icon: 'ri-vuejs-fill' },
      { name: 'Nuxt.js', expYears: 5, status: 'advancedKnowledge', icon: 'ri-vuejs-fill' },
      { name: 'SCSS', expYears: 2, status: 'intermediateKnowledge', icon: 'ri-css3-fill' },
      { name: 'React', expYears: 2, status: 'currentlyLearning', icon: 'ri-reactjs-fill' }
    ],
    backend: [
      { name: 'Node.js', expYears: 5, status: 'intermediateKnowledge', icon: 'ri-javascript-fill' },
      { name: 'Express.js', expYears: 5, status: 'advancedKnowledge', icon: 'ri-javascript-fill' },
      { name: 'Java Spring Boot', expYears: 1, status: 'basicContact', icon: 'ri-java-fill' },
      { name: 'PostgreSQL', expYears: 3, status: 'intermediateKnowledge', icon: 'ri-database-2-fill' },
      { name: 'MongoDB', expYears: 1, status: 'basicContact', icon: 'ri-database-2-fill' }
    ]
  })
})
