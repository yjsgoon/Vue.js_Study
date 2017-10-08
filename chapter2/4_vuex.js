import Vuex from 'vuex';
import Vue from './node_modules/vue/dist/vue.js';

Vue.use(Vuex);

// Vuex 관련 설정부분
var store = new Vuex.Store({
    state: { /* ... */},
    mutations: { /* ... */}
});

// Vue 관련 인스턴스 생성(컴포넌트를 같이 넘겨줘야 한다.)
new Vue({
    components: components,
    store: store
});

/*
    이후부터 메인 애플리케이션과 관련 컴포넌트들이 Vuex 저장소를 인지하고 내부 데이터에 접근할 수 있게 됐으며,
    애플리케이션의 생명 주기 아무 때나 지정된 액션을 수행할 수 있게 됐다.
 */