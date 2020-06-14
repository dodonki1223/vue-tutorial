import Vue from 'vue'
import App from './App.vue'


/*
  以下のQiitaの記事にまさにの説明がある
    https://qiita.com/teinen_qiita/items/ed1bb1909a17f9ca9daa
  この記述の意味がよくわからない……
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  こういうことらしい
    new Vue({
      el: '#app',
      components: { App },
      template: '<App />'
    })
 */
new Vue({
  el: '#app',
  render: h => h(App)
})
