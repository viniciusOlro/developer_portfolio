<template>
  <div id="container">
    <Header />
    <div v-if="!isMobileMenuOpen" id="main-content">
      <transition name="fade" mode="out-in">
        <nuxt-page />
      </transition>
    </div>
    <Footer id="app-footer" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#app'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

useHead({
  title: 'viniciusOlro :: Developer Portfolio',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})

const isMobileMenuOpen = ref(false)
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

:root {
  --bg-color: #010C15;
  --primary-color: #011627;
  --secondary-color: #1E2D3D;
  --text-color: #E5E9F0;
  --text-light-color: #F8FAFC;
  --comment-color: #607B96;
  --comment-light-color: #90A1B9;
  --icon-color: #62748E;
  --info-color: #615FFF;
  --success-color: #00D5BE;
  --warning-color: #FFA1AD;
  --code-snippet-bg-color: #020618;
  font-size: 62.5%;
}

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--primary-color);
    border-radius: .4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--comment-color);
    border-radius: .4rem;
    border: .2rem solid var(--primary-color);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--comment-light-color);
  }
}

html,
body {
  height: 100%;
}

body {
  font-size: 1.6rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Fira Code", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

input[type="checkbox"] {
  appearance: none;
  min-width: 2rem;
  min-width: 2rem;
  height: 2rem;
  height: 2rem;
  border: 2px solid var(--icon-color);
  border-radius: .3rem;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &::after {
    content: "";
    display: none;
    width: 12px;
    height: 24px;
    border: solid var(--text-light-color);
    border-width: 0 .3rem .3rem 0;
    transform: rotate(45deg) scale(.3);
  }

  &:checked {
    background-color: var(--icon-color);
    border-color: var(--icon-color);

    &::after {
      display: block;
    }
  }
}


#container {
  border: .1rem solid var(--secondary-color);
  border-radius: .8rem;
  height: calc(100vh - 14.42vh - .2rem);
  width: calc(100vw - 7.18vw - .2rem);
  background-color: var(--primary-color);
  position: relative;

  #main-content {
    height: calc(100vh - 14.42vh - .2rem - 11.2rem);
  }

  #app-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 915px) {
  body {
    padding: 1.6rem;
    display: block;
    overflow: hidden;
  }

  #container {
    height: calc(100vh - 3.2rem);
    width: calc(100vw - 3.2rem);

    #main-content {
      height: calc(100vh - 14.4rem);
    }
  }
}
</style>
