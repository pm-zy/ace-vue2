<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h2>Ace Editor</h2>
        <editor height="200px" :content="content" lang="javascript"> </editor>
        <div class="btn">
            显示代码
        </div>
    </div>
</template>

<script>
import editor from 'ace-vue2'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default {
    name: 'app',
    components: {
        editor
    },
    data () {
        return {
            content: '在此处写代码'
        }
    },
    methods: {
        
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
