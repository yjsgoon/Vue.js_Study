/**
 * Component는 개별적인 변수 범위를 가진다.
 * Application은 전역적인 변수 범위를 가진다.
 *
 * Component에서 Application의 변수로 접근이 가능하다.
 *
 * 단, prop 속성을 사용해 부모 Compoenet의 어떤 속성에 접근할 것인지 알려주고
 * 해당 속성을 Compoenet 인스턴스에서 v-bind 문법을 사용해 바인딩해줘야 한다.
 */

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