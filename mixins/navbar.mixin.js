export default {
  computed: {
    navbarStore() {
      return useNavbarStore()
    },
    isMobileMenuOpen() {
      return this.navbarStore?.isMobileMenuOpen
    }
  }
}