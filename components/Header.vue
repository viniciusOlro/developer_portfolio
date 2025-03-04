<template>
  <header>
    <h1>vinicius_olro</h1>
    <div :class="[{ 'hamburger-open': isMobileMenuOpen }, 'hamburger']" @click="handleHamburgerMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav :class="{ 'mobile-menu-open': isMobileMenuOpen }">
      <ul>
        <li v-for="page in pages" :key="page.id" :class="{ 'selected': page.path === currentPage.path }"
          @click="onPageClick(page.path)">
          <a>_{{ page.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import navbarMixin from '~/mixins/navbar.mixin';
export default {
  name: 'Navbar',
  mixins: [navbarMixin],
  computed: {
    pages() {
      return [
        {
          name: 'hello',
          path: '/',
          id: 0
        },
        {
          name: 'about-me',
          path: '/about-me',
          id: 1
        },
        {
          name: 'projects',
          path: '/projects',
          id: 2
        },
        {
          name: 'contact-me',
          path: '/contact-me',
          id: 3
        }
      ]
    },
    currentPage() {
      return this.$route
    }
  },
  methods: {
    onPageClick(pagePath) {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false
      }
      this.$router.push(pagePath)
    },
    handleHamburgerMenu() {
      this.navbarStore.updateIsMobileMenuOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  color: var(--comment-color);
  padding: 0 2.2rem;
  display: flex;
  border-bottom: .1rem solid var(--secondary-color);

  .hamburger {
    display: none;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: normal;
    margin: auto;
    margin-right: 15.4rem;
  }

  nav {
    width: 100%;
    height: 5.6rem;

    ul {
      display: flex;
      width: 100%;
      height: 100%;

      li {
        padding: 0 3.2rem;
        border-left: .1rem solid var(--secondary-color);
        display: flex;
        align-items: center;
        position: relative;

        &:last-child {
          margin-left: auto;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -0.2rem;
          height: 0.3rem;
          width: 0%;
          /* Estado inicial */
          background-color: var(--warning-color);
          transition: width 0.3s ease-in-out;
        }

        &.selected {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 915px) {
  header {
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .hamburger {
      width: 1.8rem;
      height: 1.6rem;
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
        width: 100%;
        height: 0.2rem;
        background-color: var(--comment-color);
        transition: all 0.3s ease-in-out;
        position: absolute;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        &:nth-child(3) {
          bottom: 0;
        }
      }

      &.hamburger-open {
        span {
          &:nth-child(1) {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          }
        }
      }
    }

    h1 {
      display: flex;
      align-items: center;
      margin: 0%;
    }

    nav {
      position: absolute;
      top: 7.2rem;
      left: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

      ul {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 8.8rem);
        width: calc(100vw - 3.2rem);
        margin: auto;

        li {
          margin: 0;
          margin-left: 0 !important;
          padding: 0;
          padding-left: 2.2rem;
          height: 5.6rem;
          border-bottom: .1rem solid var(--secondary-color);

          &::after {
            content: none;
          }
        }
      }

      &.mobile-menu-open {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
      }
    }

  }
}
</style>