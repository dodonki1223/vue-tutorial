new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
  },
  // プロパティのように扱います
  computed: {
    output: function() {
      console.log('Computed')
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  methods: {
    // ES6の書き方なのでこちらを採用すると良さそう！！
    result() {
      console.log('Methods')
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    },
    increase: function(step, event) {
      this.counter += step;
    },
    // v-on ディレクティブの場合、引数としてeventオブジェクトにアクセスすることができる
    // eventはVue.jsで自動的に作成される引数になる
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    alertMe: function() {
      alert('Alert!')
    },
  }
})
