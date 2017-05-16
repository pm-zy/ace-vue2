<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Ace Editor</h2>
    <editor > </editor>
  </div>
</template>

<script>
import editor from '../../index.js'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default {
  name: 'app',
  component: {
      editor
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

</style>
