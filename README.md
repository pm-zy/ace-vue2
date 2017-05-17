# ace-vue2
[![NPM version](https://img.shields.io/badge/npm-3.10.9-blue.svg)](https://www.npmjs.com/package/ace-vue2)


A ace package for Vue2 , and based on brace.

Developing.
 
## Install

```sh
$ npm install ace-vue2
```

Ace-vue2 depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/) .

## Usage

### Import it before `export` in `<script>` and register the editor in `components` options.
```js
import editor from 'ace-vue2'
export default {
    components: {
        editor
    },
    ...
}

```
Or use `require` to require it in `components` of Vue options.
```js
export default {
    components: {
        editor:require('vue2-ace-editor'),
    },
    ...
}
```
### Import the editor's mode & theme module from `brace` before `export` 
```js
import 'brace/mode/javascript'
import 'brace/theme/chrome'
```
### Use the editor as a component in your `template`.
```js
<editor height="200px" :content="content" > </editor>
```
`content` is a `String` and it is required.
### Get the codes which are written in the editor.

To get the value, you can use `getValue()` method in your vue scripts. `getValue()` is a method of the editor componnent, and it returns the content of the editor. So, use it as following:

```js 
let code = this.$children[0].getValue();
```

## Props

| props | type | defalut | required|
|---------- | -------| --------------| ----------|
| content | String | "" | required|
| lang | String | javascript | |
| theme | String | chrome | |
| height | String | 400px | |
| width | String | 100% | |
| sync | Boolean | false | |
| readOnly | Boolean | false | |
| options | Object | {} | |

 #### Watched Props: 
 `theme`
 `lang` 
 `content`

## Methods

`getValue` : get the content of the editor.
