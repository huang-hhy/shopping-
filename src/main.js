import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


// axios({
//   url:'http://106.54.54.237:8000/api/mn/home/multidata'
// }).then(function(res){
//   console.log(res);
// })