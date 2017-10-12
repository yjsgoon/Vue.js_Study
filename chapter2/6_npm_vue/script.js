/**
 *  Installation: npm install vue / npm install vue@csp
 *  규모가 큰 애플리케이션을 작성하는데 주로 사용한다.
 *
 *  [ build 명령어 ]
 *  npm run build
 */

var Vue = require("vue/dist/vue.js");
// ES2015
// import Vue from "vue";

var data =  {
    message: 'Learning Vue.js'
};

new Vue({
    el: '#app',
    data: data
});