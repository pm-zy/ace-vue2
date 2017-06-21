var ace = require('brace');

module.exports = {
    template: '<div :style="{height: height, width: width}"></div>',
    props: {
        content: {
            type: String,
            default: ''
        },
        lang: {
            type: String,
            default: 'javascript'
        },
        theme: {
            type: String,
            default: 'chrome'
        },
        height: {
            type: String,
            default: '400px'
        },
        width: {
            type: String,
            default: '100%'
        },
        sync: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default: function () { return {} }
        },
        readOnly: {
            type: Boolean,
            default: false
        }
    },

    data: function () {
        return {
        };
    },

    mounted: function () {
        var vm = this;
        var lang = this.lang;
        var theme = this.theme;
        var editor = this.editor = ace.edit(vm.$el);
        var options = this.options;
        editor.$blockScrolling = Infinity;
        editor.getSession().setMode('ace/mode/' + lang);
        editor.setTheme('ace/theme/' + theme);
        editor.setValue(vm.content, 1);
        editor.setOptions(options);
        editor.setHighlightActiveLine(true);
        editor.setReadOnly(this.readOnly);
        editor.on('change', function () {
            vm.$emit('change', editor.getValue());
        });
        editor.on('copy', function (str) {
            vm.$emit('copy', str);
        });
        editor.on('paste', function () {
            vm.$emit('paste');
        })
    },

    watch: {
        'content': function (newContent) {
            if (this.sync) {
                this.editor.setValue(newContent, 1);
            }
        },
        'lang': function () {
            this.editor.getSession().setMode('ace/mode/' + this.lang);
        },
        theme: function (newTheme) {
            this.editor.setTheme('ace/theme/' + newTheme);
        }
    },
    methods: {
        getValue: function() {
            return this.editor.getValue()
        }
    }
};
