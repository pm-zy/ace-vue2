<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h2>Ace Editor</h2>
        <input type="radio" name="lang" v-model="lang" value="javascript" />javasript
        <!-- <input type="radio" name="lang" v-model="lang" value="sql" />sql -->
        <editor :content="content" v-on:change="change" v-on:copy="copy" v-on:paste="paste"> </editor>
        <div class="btn" @click="getValue">
            显示代码
        </div>
        <div class="code-content" >
            {{code}}
        </div>
    </div>
</template>

<script>
import editor from '../../index.js'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default {
    name: 'app',
    components: {
        editor
    },
    data () {
        return {
            content: '在此处写代码',
            lang: 'javascript',
            code:　""
        }
    },
    watch: {
        'lang': function() {
            // console.log(this.lang);
        }
    },
    mounted() {
        var vm = this;
    },
    methods: {
        getValue() {
            this.code = this.$children[0].getValue();
        },
        change(content) {
            console.log(content);
        },
        copy(str) {
            console.log(str);
        },
        paste() {
            console.log('paste');
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

h2 {
    font-weight: normal;
}

.btn {
    background-color: #FCA48B;
    height: 50px;
    width: 200px;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 10px;
    &:hover, &:active {
        background-color: #E27A6C;
    }
}


</style>
