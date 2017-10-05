// import Vue from 'vue/dist/vue.js';
import Vue from 'chapter2/node_modules/vue/dist/vue.js';
import VueMathPlugin from './3_plugin.js';

Vue.use(VueMathPlugin);

new Vue({
    el: '#app',
    data: {
        item: 49
    }
});