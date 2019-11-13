import Vue from 'vue'
import App from './App.vue'

// Font Awesomeの設定を追加
// この前に以下のコマンドを叩くこと
// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// userのアイコンを追加（１つずつしか読み込めないかも……）
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
