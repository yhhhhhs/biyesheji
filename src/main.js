// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; //全局引入element
import 'element-ui/lib/theme-chalk/index.css'; //全局引入element的样式
import './assets/css/common.css'
import './assets/css/root.css'
import 'animate.css';
Vue.config.productionTip = false

Vue.use(ElementUI); //全局注入element
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})