<template>
  <main>
    <section>
      seção 1
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
}

@media (max-width: 915px) {
  main {
    flex-direction: column;
  }
}

</style>