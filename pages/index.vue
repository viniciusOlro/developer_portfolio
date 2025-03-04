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
      seção 2
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
main {
  height: 100%;
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
}

@media (max-width: 915px) {
  main {
    flex-direction: column;
    padding: 0 2.4rem;
  }
}
</style>