var ace = require('brace');

module.exports = {
    template: '<div :style="{height: height, width: width}"></div>',

    props: {
        content: {
            type: String,
            required: true
        },
        lang: String,
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
        options:  {
            type: Object,
            default: function () {return {}}
        },
        code: String,
        readOnly: {
            type: Boolean,
            default: false
    },

    data: function () {
        return {
            editor: null,
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
        editor.setValue(this.content, 1);
        editor.setOptions(options);
        editor.setHighlightActiveLine(true);
        editor.setReadOnly(this.readOnly);
        editor.on('change', function () {
          vm.$emit('contentChange', editor.getValue());
        });
    },

    watch: {
        'content': function (newContent) {
            if (this.sync) {
                this.editor.setValue(newContent, 1);
            }
        },
        'lang' : function () {
            this.editor.getSession().setMode('ace/mode/' + this.lang);
        },
        theme: function (newTheme) {
            this.editor.setTheme('ace/theme/' + newTheme);
        }
    },
    methods: {
        getValue() {
            return this.editor.getValue()
        }
    }
};
