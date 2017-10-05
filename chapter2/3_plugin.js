// 플러그인의 install 메소드를 이용해서 커스텀 지시자들을 설정한다.
export default {
    install: function (Vue) {
        Vue.directive('square', function (el, binding) {
            el.innerHTML = Math.pow(binding.value, 2);
        });
        Vue.directive('sqrt', function (el, binding) {
            el.innerHTML = Math.sqrt(binding.value);
        });
        Vue.directive('sin', function (el, binding) {
            el.innerText = Math.sin(binding.value);
        });
        Vue.directive('cos', function (el, binding) {
            el.innerText = Math.cos(binding.value);
        });
        Vue.directive('tan', function (el, binding) {
            el.innerText = Math.tan(binding.value);
        });
    }
};