// 컴포넌트 생성
import Vue from './node_modules/vue/dist/vue.js';

var HelloComponent = Vue.extend({
   template: '<h1>hello</h1>'
});

// 컴포넌트 등록
Vue.component('hello-component', HelloComponent);

// 뷰 애플리케이션 초기화
new Vue({
    el: '#app'
});