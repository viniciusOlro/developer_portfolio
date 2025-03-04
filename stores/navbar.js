export const useNavbarStore = defineStore('navbarStore', {
  state: () => ({
    isMobileMenuOpen: false
  }),
  actions: {
    updateIsMobileMenuOpen() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
})