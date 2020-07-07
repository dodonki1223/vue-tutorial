import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

/*
    vue-resource: https://github.com/pagekit/vue-resource
    非公式ライブラリになっています（https://jp.vuejs.org/2016/11/03/retiring-vue-resource/）
 */
Vue.use(VueResource)

/*
    URLなどのグローバルの設定をここで宣言することができる
 */
Vue.http.options.root = 'https://example.com/data.json'

/*
    interceptors(横取りって意味) を使用することでリクエストのフックを行うことができます
    firebase は PUT にすることでデータの書き換えを行う、POSTの場合は新規に作成する
      POST:新しいリソースを作成する
      PUT :既存のものを更新する（一意の識別子が必要なため、新しいリソースを作ったときにあったよくわからないKeyを使う）
 */
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method == 'POST') {
    request.method = 'PUT'
  }
  next()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
