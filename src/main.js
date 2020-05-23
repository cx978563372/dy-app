// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios' //引入axios
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'
// swiper组件css
import 'swiper/css/swiper.css'
// video组件css
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// reset_css
import './assets/styles/reset_css.css'
// iconfont
import './assets/styles/iconfont.css'

Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
