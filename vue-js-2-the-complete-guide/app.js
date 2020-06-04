// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://google.com'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!'
      // dataオブジェクトはthisに含まれているがテンプレートに関してはthisは必要ない(重要らしいので覚えること)
      return this.title
    }
  }
})
