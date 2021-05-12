
import Vue from 'vue';
import routes from './router/index';
import '../css/app.css';

// require('./bootstrap');

Vue.component('app-header', require('./components/Header.vue').default);

const app = new Vue({
    el: '#app',
    router: routes,
});
