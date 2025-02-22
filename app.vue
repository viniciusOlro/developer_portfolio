<template>
  <div id="container">
    <nuxt-page />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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

*, body {
  margin: 0;
  padding: 0;
}

html, body {
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

#container {
  border: .1rem solid var(--secondary-color);
  border-radius: .8rem;
  height: calc(100vh - 14.42vh - .2rem);
  width: calc(100vw - 7.18vw - .2rem);
  background-color: var(--primary-color);
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
  }
}

</style>