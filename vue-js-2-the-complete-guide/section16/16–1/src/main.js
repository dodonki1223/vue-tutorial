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
  デフォルトは hash モードになっている（以下のような感じでアクセスできる）
    localhost:8080/#/
    localhost:8080/#/user
    # を使っているのでページのリロードが走らない(シングルページアプリケーションを作成するときに有効である)
  HTML5 Historyモード
    HTML5 Historyモード に変更すると以下のような感じになる
      localhost:8080/
      localhost:8080/user
    詳しくはこちらを: https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B
 */ 
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
