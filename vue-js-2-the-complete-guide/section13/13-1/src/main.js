import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase()
})

/* 
    3回実行されます……なぜ？
    Vueのインスタンスごとに実行されるため下の new Vue と App.vue と List.vue
    で実行されるためです
    サードパーティのコンポーネントを含んでいる、すべての単一の作成されたVueインスタンス
    に影響があるため、グローバルミックスインは多用しないこと console.log を確認すると
    全部のコンポーネントで実行されていることが確認できます
 */
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
