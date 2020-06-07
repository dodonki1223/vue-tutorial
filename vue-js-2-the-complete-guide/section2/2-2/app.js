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
  // 非同期タスクを実行する時に使用する
  // computed は常に同期して実行する必要がある
  // 使い分けとしては非同期なのか同期なのかで判断するとよさそう
  //   APIに実行するとかで使用したほうが良さそう……
  watch: {
    // 名前はDataオブジェクトのプロパティ名と一致する必要がある
    // counterの値が変化するたびに実行するコードを記述します
    counter: function(value) {
      var vm = this
      setTimeout(function() {
        vm.counter = 0
      }, 2000)
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
