import Vuex from 'vuex';
import Vue from '../node_modules/vue/dist/vue.js';

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

/**
 * [ vue-cli ]
 * vue는 자체명령행 인터페이스도 가지고 있으며, vue-cli 뷰 애플리케이션을 원하는 설저응로 초기화할 수 있다.
 * install command: npm install -g vue-cl
 *
 * [ init application ]
 * vue init webpack
 * vue init webpack-simple
 * vue init browserify
 * vue init browserify-simple
 * vue init simple
 */
