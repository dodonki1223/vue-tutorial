import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)


/*
  下記書き方は以下の省略の書き方です
    const router = new VueRouter({
      routes: routes
    })
 */ 
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
