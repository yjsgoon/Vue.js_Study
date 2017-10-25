/**
 * Component는 개별적인 변수 범위를 가진다.
 * Application은 전역적인 변수 범위를 가진다.
 *
 * Component에서 Application의 변수로 접근이 가능하다.
 *
 * 단, prop 속성을 사용해 부모 Compoenet의 어떤 속성에 접근할 것인지 알려주고
 * 해당 속성을 Compoenet 인스턴스에서 v-bind 문법을 사용해 바인딩해줘야 한다.
 */

import Vue from './node_modules/vue/dist/vue.js';

// var HelloComponent = Vue.extend({
//     el: '#hello',
//     data: { msg: 'Hello' }
// });

// var HelloComponent = Vue.component('hello-component', {
//     el: function() {
//         return '#hello';
//     },
//     data: function() {
//         return {
//             msg: 'Hello'
//         };
//     }
// });

// hello Component
Vue.component('hello-component', {
    template: '#hello',
    data: function() {
        return {
            msg: 'Hello'
        }
    },
    props: ['user']
});
// Vue.component('hello-component', {
//     template: '#hello'
// });


// form Component
Vue.component('form-component', {
    template: '#form',
    props: ['value']
});


// greetings Component
Vue.component('greetings-component', {
    template: '#greetings',
    data: function() {
        return {
            user: 'hero'
        }
    }
});

/**
 * user를 Component에 바인딩해주기 위해선...
 *
 * 1. Component의 prop 속성 내에서 이 속성을 지정해준다.
 * 2. 해당 속성을 hello-component를 호출할 때 바인딩해준다.
 */
new Vue({
    el: '#app'
    // data: {
    //     user: 'hero'
    // }
});