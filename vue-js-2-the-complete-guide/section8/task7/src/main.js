import Vue from 'vue'
import App from './App.vue'

// ２階層以上ある時に使用するとデータの管理が容易になる
export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
