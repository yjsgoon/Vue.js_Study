// Vue와 미리 작성한 플러그인을 import하고 Vue의 use메소드를 통해 플러그인을 사용한다.
// 이후 뷰 인스턴스를 생성한다.

// import Vue from 'vue/dist/vue.js';
import Vue from './node_modules/vue/dist/vue.js';
import VueMathPlugin from './3_plugin.js';

Vue.use(VueMathPlugin);

new Vue({
    el: '#app',
    data: {
        item: 49
    }
});