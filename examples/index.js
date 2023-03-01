import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import AmirUi from '../src/main';

Vue.use(Element);
Vue.use(AmirUi);
console.log(11111)

new Vue({
    render: (h) => h(App),
}).$mount('#app');