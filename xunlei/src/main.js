// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'  //引入iview
import  router from './router/index'
import 'iview/dist/styles/iview.css'//引入iview的css文件

Vue.config.productionTip = false

Vue.use(iview)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
