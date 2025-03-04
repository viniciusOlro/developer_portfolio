export const usePeopleStore = defineStore('peopleStore', {
  state: () => ({
    people: {
      name: "Vinícius",
      age: 23,
      position: "Fullstack Developer",
      githubLink: "https://github.com/viniciusOlro",
      from: "Rio Grande do Sul, Brasil",
      favoriteAnimal: "Cats",
      soccerTeam: "Grêmio"
    }
  }),
  actions: {
    updatePeople(people = {}) {
      this.people = people
    }
  }
})