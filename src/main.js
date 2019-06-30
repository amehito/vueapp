import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import store from './store.js'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MyInputNumber from './components/MyInputNumber.vue'

Vue.component('MyInputNumber', MyInputNumber)
Vue.use(VueAxios, axios)
Vue.use(VideoPlayer)
Vue.use(ElementUI,{size:'small',zIndex:3000 });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});