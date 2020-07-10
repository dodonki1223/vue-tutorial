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
  mode: 'history',
  /*
    詳しくはこちらの解説ページを
      https://router.vuejs.org/ja/guide/advanced/scroll-behavior.html#%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AE%E6%8C%AF%E3%82%8B%E8%88%9E%E3%81%84
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // URLに フラグメント識別子がある場合はスクロールする
    if (to.hash) {
      return { selector: to.hash }
    }
    // ここに値を指定すると遷移した時、スクロールした状態で表示される
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
