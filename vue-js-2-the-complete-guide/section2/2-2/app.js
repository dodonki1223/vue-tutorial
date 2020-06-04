new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function() {
      this.counter++
    },
    // v-on ディレクティブの場合、引数としてeventオブジェクトにアクセスすることができる
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
  }
})
