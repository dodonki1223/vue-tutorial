import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// グローバルコンポーネントととして登録する
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
