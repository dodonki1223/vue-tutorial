new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    // v-on ディレクティブの場合、引数としてeventオブジェクトにアクセスすることができる
    // eventはVue.jsで自動的に作成される引数になる
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
  }
})
