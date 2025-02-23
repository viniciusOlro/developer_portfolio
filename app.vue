<template>
  <div id="container">
    <header>
      <h1>vinicius_olro</h1>
      <nav>
        <ul>
          <li 
            v-for="page in pages"
            :key="page.id"
            @click="onPageClick(page.path)"
          >
            <a>_{{ page.name }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt-page />
  </div>
</template>

<script>
export default {
  name: 'App',
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
      ];
    },
    currentPage() {
      return this.$route;
    }
  },
  methods: {
    onPageClick(pagePath) {
      this.$router.push(pagePath);
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

:root {
  --bg-color: #010C15;
  --primary-color: #011627;
  --secondary-color: #1E2D3D;
  --text-color: #E5E9F0;
  --comment-color: #607B96;
  --info-color: #4D5BCE;
  --success-color: #43D9AD;
  --warning-color: #E99287;
  font-size: 62.5%;
}

*,
body {
  margin: 0;
  padding: 0;
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


#container {
  border: .1rem solid var(--secondary-color);
  border-radius: .8rem;
  height: calc(100vh - 14.42vh - .2rem);
  width: calc(100vw - 7.18vw - .2rem);
  background-color: var(--primary-color);

  header {
    color: var(--comment-color);
    padding: 0 2.2rem;
    display: flex;
    border-bottom: .1rem solid var(--secondary-color);

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
          &.selected {
            &::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: -.2rem;
              height: .3rem;
              width: 100%;
              background-color: var(--warning-color);
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  body {
    padding: 1.6rem;
    display: block;
    overflow: hidden;
  }

  #container {
    height: calc(100vh - 3.2rem);
    width: calc(100vw - 3.2rem);

    header {
      nav {
        display: none;
      }
    }
  }
}
</style>