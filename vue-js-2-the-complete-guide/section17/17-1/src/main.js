import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

// store: store 
// みたいな書き方の場合、ES6 で省略して以下のように書ける
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
