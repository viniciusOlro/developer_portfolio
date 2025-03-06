<template>
  <main>
    <section>
      <div>
        <span>Hi all. I am</span>
        <h2>Vinícius</h2>
        <strong>> Fullstack Developer</strong>
      </div>
      <div id="code-style-github-info">
        <p>// complete the game to continue</p>
        <p>// find my profile on Github:</p>
        <div>
          <span>const </span>
          <span>githubLink </span>
          <span>= </span>
          <span>"https://github.com/viniciusOlro"</span>
        </div>
      </div>
    </section>
    <section>
      <CodeMirror id="code-mirror" />
    </section>
  </main>
</template>

<script>
import CodeMirror from '~/components/CodeMirror.vue';

export default {
  name: 'Index',
  components: {
    CodeMirror
  }
}
</script>

<style scoped>
main {
  height: 100%;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  section:first-child {
    display: flex;
    flex-direction: column;
    gap: 7.2rem;

    span {
      font-size: 1.8rem;
      line-height: 2.7rem;
      color: var(--comment-light-color);
      padding-bottom: .4rem;
    }

    h2 {
      font-size: 6rem;
      line-height: 6.6rem;
      color: var(--text-light-color);
      padding-bottom: .8rem;
    }

    strong {
      font-size: 3rem;
      line-height: 4.2rem;
      color: var(--info-color);
    }

    #code-style-github-info {
      display: flex;
      flex-direction: column;
      gap: .8rem;
      font-size: 1.6rem;
      line-height: 2.4rem;

      p {
        color: var(--comment-light-color);
      }

      div:last-child {
        span {
          &:nth-child(1) {
            color: var(--info-color);
          }

          &:nth-child(2) {
            color: var(--success-color);
          }

          &:nth-child(3) {
            color: var(--text-light-color);
          }

          &:nth-child(4) {
            color: var(--warning-color);
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }

  section:last-child {
    /* overflow: hidden; */
    #code-mirror {
      position: relative;
      z-index: 1000;
      &::after {
        content: "";
        position: absolute;
        top: -17.8rem;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("/public/background_blurs.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top;
        height: 77.96rem;
        width: 74.22rem;
        z-index: -1;
        transform: scale(2);
        pointer-events: none;
      }
    }
  }
}

@media (max-width: 915px) {
  main {
    flex-direction: column;
  }
}
</style>